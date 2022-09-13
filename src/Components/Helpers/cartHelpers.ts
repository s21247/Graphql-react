import {
    cartItemDecrementQuantity,
    cartItemIncrementQuantity,
    cartItemRemoved,
    ItemCart
} from "../Features/cart/cartSlice";
import {store} from "../App/store";


export const onClickItemRemove = (id: ItemCart["id"]) => {
    if (id)
        store.dispatch(cartItemRemoved(id));
};
export const onClickItemDecrementValue = (id: ItemCart["id"]) => {
    if(id)
        store.dispatch(cartItemDecrementQuantity(id));
};
export const onClickItemIncrementValue = (id: ItemCart["id"]) => {
    if (id)
        store.dispatch(cartItemIncrementQuantity(id))
}

export const countTotalPrice = (arr: ItemCart[]) => {
    return arr
        .map(item => item.price! * item.quantity!)
        .reduce((prev,current) => prev + current,0)
}