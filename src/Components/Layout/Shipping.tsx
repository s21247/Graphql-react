import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectShopCart} from "../Features/cart/cartSlice";
import ChangeAddress from "./inputsShipping/ChangeAddress";
import {countTotalPrice} from "../Helpers/cartHelpers";
import RadioInput from "./inputsShipping/RadioInput";
import {useNavigate} from "react-router-dom";
import {checkoutPage} from "../Routing/Routing";
import Subtotal from "./Subtotal";

const Shipping = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    const express: string = "19"
    const standard: string = "10"
    const navigate = useNavigate()
    const [shipping,setShipping] = useState<{value: string,town: "California",zip:"",country: "Usa"}>({
        value: standard,
        town: "California",
        zip: "",
        country: "Usa"
    })

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
        //dispatch here
        console.log(JSON.stringify(shipping))
    }
    const {country,...otherProps} = shipping

    const canSave = [...Object.values(otherProps)].every(Boolean)

    return (
        <>
        <form onSubmit={handleSubmit} >
        <div className="border border-gray-300 items-center w-full font-semibold">
            <Subtotal
                display={true}
                onClick={handleOnClick}
                open={isOpen}
                handleChange={handleChange}
                shipping={shipping}
                selectChange={selectChange}
                canSave={canSave} standard={standard}
                express={express} totalPrice={totalPrice}
            />
            <div className="flex flex-row w-full py-5 border-t-2 border-gray-300 items-center px-5">
                <p>Total</p>
                <p className="ml-auto">${totalPrice + parseInt(shipping.value)}.00</p>

            </div>
        </div>
        </form>
    <button
        onClick={() => navigate(checkoutPage)}
        className="bg-black w-full items-center text-white py-4 mt-4 hover:bg-gray-800">
        Proceed to checkout
    </button>
    </>
    );
};

export default Shipping;