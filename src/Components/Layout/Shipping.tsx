import React, {Dispatch, SetStateAction, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectShopCart} from "../Features/cart/cartSlice";
import {countTotalPrice} from "../Helpers/cartHelpers";
import {useNavigate} from "react-router-dom";
import {checkoutPage} from "../Routing/Routing";
import Subtotal from "./Subtotal";
import {addOrder} from "../Features/checkout/checkoutSlice";

interface props {
    display?: boolean;
    orderId: string
    shipping: { value: string; town: "California"; zip: ""; country: "Usa" };
    setShipping: Dispatch<SetStateAction<{ value: string; town: "California"; zip: ""; country: "Usa"; }>>
    express: string;
    standard: string
}
const Shipping = ({display=true,orderId,shipping,setShipping,express,standard} : props) => {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const shopPrice = useSelector(selectShopCart)
    const totalPrice = countTotalPrice(shopPrice)

    const handleOnClick = () => setIsOpen(val => !val)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const type = e.target.type
        const name = e.target.name
        const value = type === "checkbox"
            ? e.target.checked
            : e.target.value
        setShipping(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const name = e.target.name
        const value = e.target.value
        setShipping(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(JSON.stringify(shipping));
        dispatch(addOrder(orderId,shipping.country,shipping.town,shipping.zip,shipping.value,new Date().toDateString()))
    }
    const {country,...otherProps} = shipping

    const canSave = [...Object.values(otherProps)].every(Boolean)

    return (
        <>
        <form
            id={"shipping"}
            onSubmit={handleSubmit} >
        <div className="border border-gray-300 items-center w-full font-semibold">
            <Subtotal
                display={display}
                onClick={handleOnClick}
                open={isOpen}
                handleChange={handleChange}
                shipping={shipping}
                selectChange={selectChange}
                canSave={canSave} standard={standard}
                express={express} totalPrice={totalPrice}
                orderId={orderId}
            />
            <div className="flex flex-row w-full py-5 border-t-2 border-gray-300 items-center px-5">
                <p>Total</p>
                <p className="ml-auto">${totalPrice + parseInt(shipping.value)}.00</p>

            </div>
        </div>
        </form>
            {   display ? <button
                    onClick={() => navigate(checkoutPage)}
                    className="bg-black w-full items-center text-white py-4 mt-4 hover:bg-gray-800">
                    Proceed to checkout
                </button> : null
            }

    </>
    );
};

export default Shipping;