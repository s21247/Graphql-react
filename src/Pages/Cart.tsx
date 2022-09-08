import React from 'react';
import Footer from "../Components/Layout/Footer";
import CartPageList from "../Components/Features/cart/CartPageList";
import CartTotals from "../Components/Features/cart/CartTotals";

const Cart = () => {
    return (
        <>
            <div className="container my-36  flex mx-auto items-stretch w-full">
                <div className="flex-col w-3/5 relative mr-5">
                    <h1 className="my-auto tracking-wide no-underline hover:no-underline font-semibold text-gray-800 text-2xl">Shopping Cart</h1>
                    <CartPageList/>
                </div>
                <div className="flex-col w-2/5 relative mb-10">
                    <h1 className="my-auto tracking-wide no-underline hover:no-underline font-semibold text-gray-800 text-2xl ">Cart Totals</h1>
                    <CartTotals/>
                </div>
            </div>
            <Footer styles={{position: "fixed"}}/>
        </>
    );
};

export default Cart;