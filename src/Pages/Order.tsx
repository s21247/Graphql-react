import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {CheckoutOrder, selectCheckoutOrder} from "../Components/Features/checkout/checkoutSlice";
import {ItemCart, selectShopCart} from "../Components/Features/cart/cartSlice";
import {countTotalPrice} from "../Components/Helpers/cartHelpers";
import Footer from "../Components/Layout/Footer";
import {persistor} from "../index";

const Order = () => {
    const {orderId} = useParams()
    const getOrder = useSelector(selectCheckoutOrder)
    const findOrder = getOrder.find(item => item.id === orderId)
    const getCard = useSelector(selectShopCart)
    const totalPrice = countTotalPrice(getCard)
    const navigate = useNavigate()

    const purge = () => {
        persistor.purge()
    }
    function refreshPage() {
        window.location.reload();
    }
    return (
        <>
        <div className="container my-36 flex flex-col mx-auto items-stretch">
            <div className="flex items-center text-3xl mx-auto text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                     className="bi bi-check2 mr-2" viewBox="0 0 16 16">
                    <path
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                </svg>
                <p className="">Thank you. Your order has been received.</p>
            </div>
            <div className="mt-10 w-2/3 text-2xl mx-auto flex text-gray-500">
                <div className=" flex-col mx-auto justify-between">
                    <p>Order number:</p>
                    <p>{findOrder?.id.slice(0,4)}</p>
                </div>
                <div className=" flex-col mx-auto justify-between">
                    <p>Date:</p>
                    <p>{findOrder?.date}</p>
                </div>
                <div className="flex-col mx-auto justify-between">
                    <p>Total:</p>
                    <p>${parseInt(findOrder!.value) + totalPrice}.00</p>
                </div>
                <div className=" flex-col mx-auto justify-between">
                <p>Payment method:</p>
                <p className="text-red-500">unavailable</p>
                </div>


            </div>
            <div className="w-2/3 mx-auto">
                <p className="text-3xl mt-10">Order details</p>
                {
                    getCard.map((product : ItemCart) => (
                        <div
                            className="mt-10 p-6 flex text-2xl items-center "
                            key={product.id}>
                            <p className="text-yellow-500">{product.name}</p>
                            <p className="pl-6"><span className="fill-current hover:text-black" aria-hidden="true">&#x2715;</span>
                                {product.quantity}</p>
                            <p className="ml-auto">${product.price!*product!.quantity!}.00</p>
                        </div>
                    ))
                }
                <div className="flex p-6 text-2xl">
                <p>Subtotal:</p>
                    <p className="ml-auto">${totalPrice}.00</p>
                </div>
                <div className="flex px-6 pb-6 text-2xl">
                    <p>Shipping</p>
                    <p className="ml-auto order-1">{findOrder?.value === "10" ? "via standard" : "via express"}</p>
                    <p className="ml-auto order-2">${findOrder?.value}.00</p>
                </div>
                <div className="flex px-6 pb-6 text-2xl mt-10">
                    <p className="">Payment method:</p>
                    <p className="ml-auto order-2 text-red-500">Unavailable</p>
                </div>
                <div className="flex px-6 pb-6 text-2xl">
                    <p>Total:</p>
                    <p className="ml-auto order-2">${parseInt(findOrder!.value) + totalPrice}.00</p>
                </div>
                <p className="text-3xl mt-10">User details</p>
                {
                    getOrder.map((order : CheckoutOrder) => (
                        <div
                            className="mt-10 p-6 text-2xl items-center shadow-blue-500/50"
                            key={order.id}>
                            <p className="">First name: </p>
                            <p className="pl-2 pb-3 ">{order.firstName}</p>
                            <p className="">Last name: </p>
                            <p className="pl-2 pb-3">{order.lastName}</p>
                            <p className="">Street address: </p>
                            <p className="pl-2 pb-3">{order.streetAddress}</p>
                            <p className="">Country: </p>
                            <p className="pl-2 pb-3">{order.country}</p>
                            <p className="">Town: </p>
                            <p className="pl-2 pb-3">{order.town}</p>
                            <p className="">ZIP code: </p>
                            <p className="pl-2 pb-3">{order.zip}</p>
                            <p className="">Phone: </p>
                            <p className="pl-2 pb-3">{order.phone}</p>
                            <p className="">Email: </p>
                            <p className="pl-2 pb-3">{order.email}</p>
                        </div>
                    ))
                }
                <div className="w-1/2 mx-auto">
                    <p className="text-red-500"><span className="text-xl">NOTE! </span>this button removes all the data from storage due to the fact there is no login so it can't be cleared on logout</p>
                <button
                    className="bg-black w-full items-center text-white py-4 mt-4 hover:bg-gray-800"
                    onClick={() => {
                        purge()
                        navigate("/")
                        setTimeout(() => {
                            refreshPage()
                        },1000)
                    }}>purge</button>
                </div>
            </div>
                </div>
            <Footer styles={{position: "relative"}}/>
        </>
    );
};

export default Order;