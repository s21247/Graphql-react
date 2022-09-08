import React, {Fragment} from 'react';
import {useSelector} from "react-redux";
import {selectShopCart} from "./cartSlice";
import CartPageItem from "./CartPageItem";

const CartPageList = () => {
    const itemsInCart = useSelector(selectShopCart)
    return (
        <>
            <div className="relative flex flex-col my-8">
                {
                    itemsInCart.map(item => {
                        return <Fragment key={item.id}>
                            <CartPageItem
                                id={item.id}
                                image={item.image}
                                price={item.price}
                                name={item.name}
                                quantity={item.quantity}
                            />
                        </Fragment>
                    })
                }
            </div>
        </>
    );
};

export default CartPageList;