import React, {useState} from 'react';
import AddCoupon from "./AddCoupon";

const CartTotals = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false)

    const handleIsOpen = () => setIsOpen(val => !val)
    return (
        <div className="relative w-full flex flex-col text-lg my-8 w-full">
            <AddCoupon
                open={isOpen}
                onClose={handleIsOpen}
           />
        </div>
    );
};

export default CartTotals;