import React from 'react';
import {ItemCart} from "./cartSlice";
import {onClickItemIncrementValue, onClickItemDecrementValue, onClickItemRemove} from "../../Helpers/cartHelpers";
import CheckoutCard from "../../Layout/CheckoutCard";

interface props {
    display?: boolean
}
const CartPageItem = ({id,image,price,quantity,name,display=true}: ItemCart & props) => {
    return (
        <div className={`relative flex w-full flex-row text-lg items-center border-b-2 border-gray-300 ${display ? 'h-48' : null}`}>
            <img className="w-28 h-42 my-auto" src={image} alt={"icon"}/>
            <div className="flex flex-col mx-5 w-full">
                <div className="flex flex-row items-center w-full">
                    <p>{name}</p>
                    {
                        display ?
                    <button className="text-white ml-auto font-bold" onClick={() => onClickItemRemove(id)}>
                 <span
                     className="fill-current text-gray-500 hover:text-gray-500"
                     aria-hidden="true"
                 >
                      &#x2715;
                    </span>
                    </button> : null
                    }

                </div>
                <div className="flex flex-row items-center w-full">
                    <CheckoutCard display={display}>
                    <p>{display ? "Qty:" : "quantity:"}</p>
                    {
                        display ? <button
                            disabled={quantity! <= 1}
                            className="h-0 w-0 order-2 border-x-8 border-x-transparent border-b-[8px] border-b-gray-900 -rotate-90 ml-3"
                            onClick={() => onClickItemDecrementValue(id)}
                        /> : null
                    }
                    <p className={`order-2 ${display ? '' : 'pl-2'}`}>{quantity}</p>
                    </CheckoutCard>
                    {
                        display ? <button className="h-0 w-0 border-x-8 border-x-transparent border-b-[8px] border-b-gray-600 rotate-90 order-2"
                                          onClick={() => onClickItemIncrementValue(id)}
                        /> : null
                    }
                    <p className="order-3 ml-auto">${price! * quantity!}.00</p>
                </div>
            </div>

        </div>
    );
};

export default CartPageItem;