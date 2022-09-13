import React from 'react';
import AddCode from "./AddCode";

interface CodeInterface {
    onClose :  React.Dispatch<React.SetStateAction<boolean>>
    open: boolean;
}
const AddCoupon = ({open,onClose}: CodeInterface) => {
    return (
        <div className={`relative border border-gray-300 w-full ${open ? 'pb-6' : null}`}>
            <button className="py-5 w-full" onClick={() => onClose(val => !val)}>
                <div className="flex w-full items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="ml-5 bi bi-ticket-perforated-fill my-auto -rotate-45" viewBox="0 0 16 16">
                        <path
                            d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5Zm4-1v1h1v-1H4Zm1 3v-1H4v1h1Zm7 0v-1h-1v1h1Zm-1-2h1v-1h-1v1Zm-6 3H4v1h1v-1Zm7 1v-1h-1v1h1Zm-7 1H4v1h1v-1Zm7 1v-1h-1v1h1Zm-8 1v1h1v-1H4Zm7 1h1v-1h-1v1Z"/>
                    </svg>
                    <p className="ml-3 font-semibold mx-auto">Add coupon</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-chevron-down my-auto mr-5" viewBox="0 0 16 16">
                        <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </button>
            <AddCode
                open={open}
            />
        </div>
    );
};

export default AddCoupon;