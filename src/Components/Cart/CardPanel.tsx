import React from "react";
import { Product } from "../Models/Product.interface";
import PriceCart from "./PriceCart";

const CardPanel = ({ price, name, image }: Product) => {
  return (
    <>
      <div className="relative flex text-white my-8 mx-8 items-center z-100">
          <div className="absolute z-100 top-0 right-0 mr-8 mt-4">
              <button className="font-bold text-white">
                  <span className="fill-current text-gray-500 hover:text-gray-500" aria-hidden="true">&#x2715;</span>
              </button>
          </div>
        <img className="w-24 h-28 " src={image} alt="icon" />
        <div className="w-full">
          <div className="flex flex-col pl-6">
            <h1>{name}</h1>
            <div className="flex flex-row items-center">
                <p>quantity:</p>
                <button className="h-0 w-0 ml-3 order-2 border-x-8 border-x-transparent border-b-[8px] border-b-gray-600 -rotate-90"></button>
                <p className="order-2">1</p>
                <button className="h-0 w-0 border-x-8 border-x-transparent border-b-[8px] border-b-gray-600 rotate-90 order-2 mr-5"></button>
                <p className="ml-auto order-2 mr-8">${price}.00</p>
            </div>
          {/*
          <div className="flex flex-row border border-gray-400 w-3/4 mx-auto mt-4 items-center">
                    <p className="pl-5">Quantity:</p>
                    <button className="h-0 w-0 ml-auto order-2 border-x-8 border-x-transparent border-b-[8px] border-b-gray-600 -rotate-90"></button>
                    <p className="order-2 mx-5">1</p>
                    <button className="h-0 w-0 border-x-8 border-x-transparent border-b-[8px] border-b-gray-600 rotate-90 order-2 mr-5"></button>
                </div>
                */}
          </div>
        </div>
      </div>
        <PriceCart/>
    </>
  );
};

export default CardPanel;
