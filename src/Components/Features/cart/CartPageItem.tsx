import React from 'react';
import {ItemCart} from "./cartSlice";

const CartPageItem = ({id,image,price,quantity,name}: ItemCart) => {
    return (
        <div className="relative flex w-full h-48 flex-row text-lg items-center border-b-2 border-gray-300">
            <img className="w-28 h-42 my-auto" src={image} alt={"icon"}/>
            <div className="flex flex-col mx-5 w-full">
                <div className="flex flex-row items-center w-full">
                    <p>{name}</p>
                    <button className="text-white ml-auto font-bold">
                 <span
                     className="fill-current text-gray-500 hover:text-gray-500"
                     aria-hidden="true"
                 >
                      &#x2715;
                    </span>
                    </button>

                </div>
                <div className="flex flex-row items-center w-full">
                    <p className="">Qty:</p>
                    <button className="h-0 w-0 order-2 border-x-8 border-x-transparent border-b-[8px] border-b-gray-900 -rotate-90 ml-3"/>
                    <p className="order-2">{quantity}</p>
                    <button className="h-0 w-0 border-x-8 border-x-transparent border-b-[8px] border-b-gray-600 rotate-90 order-2"/>
                    <p className="order-3 ml-auto">${price! * quantity!}.00</p>
                </div>
            </div>

        </div>
    );
};

export default CartPageItem;