import React, {useState} from 'react';
import Footer from "../Components/Layout/Footer";
import CartPageList from "../Components/Features/cart/CartPageList";
import CartTotals from "../Components/Features/cart/CartTotals";
import {useNavigate} from "react-router-dom";
import Shipping from "../Components/Layout/Shipping";
import {orderId} from "./Checkout";

const Cart = () => {
    const navigate = useNavigate()
    const routeChange = (path: string) => {
        navigate(path)
    }
    const express: string = "19"
    const standard: string = "10"
    const [shipping,setShipping] = useState<{value: string,town: "California",zip:"",country: "Usa"}>({
        value: standard,
        town: "California",
        zip: "",
        country: "Usa"
    })
    return (
        <>
            <div className="container my-4 md:my-36 flex-col md:flex md:flex-row mx-auto items-stretch w-full">
                <div className="flex-col w-full md:w-3/5 relative mr-5">
                    <h1 className="my-auto tracking-wide no-underline hover:no-underline font-semibold text-gray-800 text-2xl">Shopping Cart</h1>
                    <CartPageList display={true}/>
                    <div className="w-full flex  items-stretch ">
                        <button className="w-1/2 py-4 mr-6 border border-gray-300 hover:border-black" onClick={() => routeChange("/")}>Continue shopping</button>
                        <button className="w-1/2 ml-6 border border-gray-300 hover:border-black" onClick={() => routeChange("/checkout")}>Proceed to checkout</button>
                    </div>
                </div>
                <div className="flex-col w-full md:w-2/5 mt-4 md:mt-0 relative mb-10 h-min-content">
                    <h1 className="my-auto tracking-wide no-underline hover:no-underline font-semibold text-gray-800 text-2xl ">Cart Totals</h1>
                    <CartTotals/>
                    <Shipping shipping={shipping} setShipping={setShipping} express={express} standard={standard} orderId={orderId}/>
                    <p className="py-8 md:hidden"/>

                </div>
            </div>
            <Footer styles={{position: "fixed"}}/>
        </>
    );
};

export default Cart;