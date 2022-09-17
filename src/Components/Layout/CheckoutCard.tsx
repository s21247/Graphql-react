import React from 'react';


interface props {
    display: boolean
    children?: React.ReactNode
}
const CheckoutCard = ({display = false,children}: props) => {
    if(display) return <>{children}</>
    return (
        <div className="relative flex group py-2 py-2 px-3 my-2 text-xl text-white w-fit rounded-full bg-black">
            {children}
        </div>
    );
};

export default CheckoutCard;