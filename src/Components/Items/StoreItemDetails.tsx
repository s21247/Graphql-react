import React from 'react';
import {Product} from "../Models/Product.interface";

interface Prop{
    openCart:  React.Dispatch<React.SetStateAction<Boolean>>;
    closeItemDetails: React.Dispatch<React.SetStateAction<Boolean>>;
}

type Props = Prop & Product
const StoreItemDetails = ({image,name,price,description,openCart, closeItemDetails}: Props) => {
    return (
        <>
            <div className="pt-6 flex flex-row content-center justify-items-center">
        <div className="relative basis-2/5 max-w-lg">
            <h1 className="uppercase tracking-wide no-underline hover:no-underline w-3/4 mx-auto font-bold text-gray-800 text-xl">{name}</h1>
            <p className="pt-6 tracking-wide font-bold text-xl text-yellow-500 w-3/4 mx-auto">${price}.00</p>
            <p className="w-3/4 mx-auto break-word pt-10 mt-20">{description}</p>
            <div className="flex flex-col mt-2">
                <div className="flex flex-row border border-gray-400 w-3/4 mx-auto mt-4 items-center">
                    <p className="pl-5">Quantity:</p>
                    <button className="h-0 w-0 ml-auto order-2 border-x-8 border-x-transparent border-b-[8px] border-b-gray-600 -rotate-90"></button>
                    <p className="order-2 mx-5">1</p>
                    <button className="h-0 w-0 border-x-8 border-x-transparent border-b-[8px] border-b-gray-600 rotate-90 order-2 mr-5"></button>
                </div>
            <button onClick={() => {openCart(value => !value); closeItemDetails(value => !value)}}
                    className="w-3/4 hover:bg-gray-600 rounded-sm py-5 mx-auto bg-gray-900 text-white">Add to cart</button>
            <button className="inline-block no-underline hover:text-black mt-4">

            <svg
                className="h-6 w-6 fill-current text-gray-500 hover:text-black mx-20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
            </svg>
            </button>
            </div>
        </div>
            <div className="basis-3/5 mx-auto">
                <img className="mb-6 m-auto"
                    src={image} alt="product"/>
            </div>
            </div>
        </>
    );
};

export default StoreItemDetails;