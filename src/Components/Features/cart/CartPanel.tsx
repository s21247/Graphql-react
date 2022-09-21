import React from "react";
import PriceCart from "./PriceCart";
import { useSelector } from "react-redux";
import { ItemCart, selectShopCart } from "./cartSlice";
import {onClickItemIncrementValue, onClickItemDecrementValue, onClickItemRemove} from "../../Helpers/cartHelpers";

export interface CartPanelInterface  {
  onClose:  React.Dispatch<React.SetStateAction<Boolean>>
}
const CartPanel = ({onClose}: CartPanelInterface) => {
  const shopCart = useSelector(selectShopCart);
  return (
    <>
      <div className="overflow-auto h-4/6">
        {shopCart.map((item, index) => {
          return (
            <div key={item.id} className="">
              <p
                className={`${index === 0 ? "" : "border-t-2 border-gray-300 mx-3 md:mx-8"}`}
              />
              <div
                className={`relative flex text-white my-4 mx-3 md:mx-8 items-center z-100`}
              >
                <div className="absolute z-100 top-0 right-0 mr-8 md:mt-4">
                  <button
                    onClick={() => onClickItemRemove(item.id as ItemCart["id"])}
                    className="font-bold text-white"
                  >
                    <span
                      className="fill-current text-gray-500 hover:text-gray-500"
                      aria-hidden="true"
                    >
                      &#x2715;
                    </span>
                  </button>
                </div>
                <img className="w-14 h-20 md:w-24 md:h-28 " src={item.image} alt="icon" />
                <div className="w-full">
                  <div className="flex flex-col pl-6">
                    <h1>{item.name}</h1>
                    <div className="flex flex-row items-center">
                      <p>quantity:</p>
                      <button
                        disabled={item.quantity! <= 1}
                        onClick={() =>
                          onClickItemDecrementValue(item.id as ItemCart["id"])
                        }
                        className="h-0 w-0 ml-3 order-2 border-x-8 border-x-transparent border-b-[8px] border-b-gray-600 -rotate-90"
                      />
                      <p className="order-2">{item.quantity}</p>
                      <button
                          onClick={() => onClickItemIncrementValue(item.id as ItemCart["id"])}
                          className="h-0 w-0 border-x-8 border-x-transparent border-b-[8px] border-b-gray-600 rotate-90 order-2 mr-5" />
                      <p className="ml-auto order-2 mr-8">
                        ${item.price! * item.quantity!}.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <PriceCart onClose={onClose} />
    </>
  );
};

export default CartPanel;
