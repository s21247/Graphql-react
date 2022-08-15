import React from 'react';
import {useSelector} from "react-redux";
import {selectShopCart} from "./cartSlice";
const PriceCart = () => {
    const shopPrice = useSelector(selectShopCart)
    const totalPrice = shopPrice
        .map(item => item.price! * item.quantity!)
        .reduce((prev,current) => prev + current,0)

    return (
        <div className="absolute bottom-0 flex flex-col w-full text-white h-80 z-200 bg-gray-800">
            <div className="border-y-2 border-gray-500 mx-8 h-24 h-1/3">
                <div className="flex flex-row py-10">
                    <p>Subtotal</p>
                    <p className="ml-auto order-2 mr-8">${totalPrice}.00</p>
                </div>
            </div>
            <div className="flex flex-col w-full h-2/3 items-center pt-7">
                <button className="w-4/5 hover:bg-gray-600 py-5 mx-auto mb-6 bg-gray-900 text-white">View Cart</button>
                <button className="w-4/5 hover:bg-gray-600 py-5 mx-auto mb-6 bg-gray-900 text-white">Checkout</button>
            </div>
        </div>
    );
};

export default PriceCart;