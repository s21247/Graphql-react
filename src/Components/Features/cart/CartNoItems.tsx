import React from 'react';
import {useNavigate} from "react-router-dom";

interface props {
    open: boolean;
}
const CartNoItems = ({open}: props) => {
    const navigate = useNavigate();
    if(!open) return null

    const  routeChange = () => {
        navigate('/')
    }
    return (
        <div className="container mx-auto  text-2xl w-full">
            <div className="flex flex-col mx-auto w-full my-36">

            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor"
                 className="bi bi-cart-x-fill mx-auto" viewBox="0 0 16 16">
                <path
                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z"/>
            </svg>
            <p className="mx-auto mt-4">Your cart is currently empty.</p>
                <button className="mt-4 hover:bg-buttonHover py-2 px-2 mx-auto bg-panelButton text-white" onClick={routeChange}>Return to shop.</button>
            </div>

        </div>
    );
};

export default CartNoItems;