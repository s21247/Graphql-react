import React from 'react';
import Footer from "../Components/Layout/Footer";
import CartPageList from "../Components/Features/cart/CartPageList";
import CartTotals from "../Components/Features/cart/CartTotals";
import {useNavigate} from "react-router-dom";
import Shipping from "../Components/Layout/Shipping";

const Cart = () => {
    const navigate = useNavigate()
    const routeChange = (path: string) => {
        navigate(path)
    }
    return (
        <>
            <div className="container my-36  flex mx-auto items-stretch w-full">
                <div className="flex-col w-3/5 relative mr-5">
                    <h1 className="my-auto tracking-wide no-underline hover:no-underline font-semibold text-gray-800 text-2xl">Shopping Cart</h1>
                    <CartPageList/>
                    <div className="w-full flex  items-stretch ">
                        <button className="w-1/2 py-4 mr-6 border border-gray-300 hover:border-black" onClick={() => routeChange("/")}>Continue shopping</button>
                        <button className="w-1/2 ml-6 border border-gray-300 hover:border-black" onClick={() => routeChange("/checkout")}>Proceed to checkout</button>
                    </div>
                </div>
                <div className="flex-col w-2/5 relative mb-10">
                    <h1 className="my-auto tracking-wide no-underline hover:no-underline font-semibold text-gray-800 text-2xl ">Cart Totals</h1>
                    <CartTotals/>
                    <Shipping/>
                </div>
            </div>
            <Footer styles={{position: "fixed"}}/>
        </>
    );
};

export default Cart;