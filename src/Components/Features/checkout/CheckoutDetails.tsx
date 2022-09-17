import React from 'react';

interface props {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    data: {
        orderNotes: string
    };
}
const CheckoutDetails = ({data,handleChange}: props) => {
    return (
        <div className="w-full mt-10 px-0 ">
            <h1 className="my-auto tracking-wide no-underline hover:no-underline font-semibold text-gray-800 text-2xl">Shipping details</h1>
            <div className="relative px-2 pt-6">
            <p>Order notes (optional)</p>
            <input className="border border-gray-300 w-full py-16"
                   type="text"
                   name={"orderNotes"}
                   id={"orderNotes"}
                   value={data.orderNotes}
                   placeholder={"Notes about your order, e.g special notes for delivery"}
                   onChange={handleChange}
            />
            </div>
        </div>
    );
};

export default CheckoutDetails;