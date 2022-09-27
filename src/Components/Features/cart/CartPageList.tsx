import React, {Fragment} from 'react';
import {useSelector} from "react-redux";
import {selectShopCart} from "./cartSlice";
import CartPageItem from "./CartPageItem";

interface props {
    display?: boolean
}
const CartPageList = ({display}: props) => {
    const itemsInCart = useSelector(selectShopCart)
    return (
        <>
            <div className="relative flex flex-col my-4 md:my-8 overflow-auto h-2/5">
                {
                    itemsInCart.map(item => {
                        return <Fragment key={item.id}>
                            <CartPageItem
                                id={item.id}
                                image={item.image}
                                price={item.price}
                                name={item.name}
                                quantity={item.quantity}
                                display={display}
                            />
                        </Fragment>
                    })
                }
            </div>
        </>
    );
};

export default CartPageList;