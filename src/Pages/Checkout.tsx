import React, {useState} from 'react';
import Footer from "../Components/Layout/Footer";
import Shipping from "../Components/Layout/shipping/Shipping";
import CartPageList from "../Components/Features/cart/CartPageList";
import CheckoutForm from "../Components/Features/checkout/CheckoutForm";
import {nanoid} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {selectCheckoutOrder, userDetails} from "../Components/Features/checkout/checkoutSlice";
import {useNavigate} from "react-router-dom";
import CartNoItems from "../Components/Features/cart/CartNoItems";
import {selectShopCart} from "../Components/Features/cart/cartSlice";

export const orderId = nanoid()
const Checkout = () => {
    const order = useSelector(selectCheckoutOrder)
    const dispatch = useDispatch()
    const itemsInCart = useSelector(selectShopCart)
    const initialValue = {
        firstName: "",
        lastName: "",
        streetAddress: "",
        country: "",
        town: "",
        zip: "",
        phone: "",
        email: "",
        orderNotes: "",
    }
    const [data, setData] = useState<{
        firstName: string;
        lastName: string;
        streetAddress: string;
        country: string;
        town: string;
        zip: string;
        phone: string;
        email: string;
        orderNotes: string;
    }>(initialValue);
    const navigate = useNavigate()
    const express: string = "19"
    const standard: string = "10"
    const [shipping,setShipping] = useState<{value: string,town: "California",zip:"",country: "Usa"}>({
        value: standard,
        town: "California",
        zip: "",
        country: "Usa"
    })

    const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const name = e.target.name
        const value = e.target.value
        setShipping(prevData => ({
            ...prevData,
            [name]: value
        }))
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const findOrder = order.find(item => item.id === orderId)
        if(findOrder){
            dispatch(userDetails(findOrder.id, findOrder.country, findOrder.town, findOrder.zip, findOrder.value, data.firstName, data.lastName, data.phone, data.email, data.orderNotes,new Date().toDateString(),data.streetAddress))
        }
        else {
            dispatch(userDetails(orderId,data.country,data.town,data.zip,shipping.value,data.firstName,data.lastName,data.phone,data.email,data.orderNotes,new Date().toDateString(),data.streetAddress))
        }
        setData(initialValue)
        setTimeout(() => {
            navigate(`order/${orderId}`)
        },2000)
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const type = e.target.type;

        const name = e.target.name;

        const value = type === "checkbox" ? e.target.checked : e.target.value;

        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            { itemsInCart.length === 0 ? <CartNoItems open={itemsInCart.length===0}/> :

                    <div className="container my-4 md:my-36 flex flex-col md:flex md:flex-row mx-auto items-stretch ">
                    <div className="flex-col w-full md:w-3/5 relative mr-5">
                        <h1 className="my-auto tracking-wide no-underline hover:no-underline font-semibold text-gray-800 text-2xl">Billing
                            details</h1>
                        <CheckoutForm data={data} handleChange={handleChange} handleSubmit={handleSubmit}
                                      orderId={orderId} selectChange={selectChange} shipping={shipping}/>
                    </div>
                    <div className="flex-col w-full md:w-2/5 relative mb-10 w-full">
                        <h1 className="my-auto tracking-wide no-underline hover:no-underline font-semibold text-gray-800 text-2xl ">Your
                            order</h1>
                        <CartPageList display={false}/>
                        <Shipping shipping={shipping} setShipping={setShipping} display={false} express={express}
                                  standard={standard} orderId={orderId}/>
                        <button
                            form={"form"}
                            className="bg-panelBackground w-full items-center text-white py-4 mt-4 hover:bg-buttonHover">
                            Place order
                        </button>
                        <p className="py-8 md:hidden"/>
                    </div>
                </div>
            }
            <Footer styles={{position: "fixed"}}/>

        </>
    );
};

export default Checkout;