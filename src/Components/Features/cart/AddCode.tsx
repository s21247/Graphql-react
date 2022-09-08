import React from 'react';

type props = {
    open: boolean
}
const AddCode = ({open}: props ) => {
    if(!open) return null
    return (
        <div className="relative w-full px-5">
            <input
                className="border border-gray-300 outline-0 w-full py-4 pl-3"
                placeholder={"Coupon Code"}
                type={"text"}
            />
            <button disabled={true} className="w-full bg-black text-white py-4 mt-4">
                Add Coupon
            </button>

        </div>
    );
};

export default AddCode;