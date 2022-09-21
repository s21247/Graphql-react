import React from 'react';


interface props {
    display: boolean
    children?: React.ReactNode
}
const CheckoutCard = ({display = false,children}: props) => {
    if(display) return <>{children}</>
    return (
        <div className="relative flex group py-1 md:py-2 px-3 my-2 text-xl text-gray-300 w-fit rounded-full bg-panelBackground">
            {children}
        </div>
    );
};

export default CheckoutCard;