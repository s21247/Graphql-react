import React, {useCallback, useState} from 'react';
import {Product} from "../Models/Product.interface";
import {useDispatch, useSelector} from "react-redux";
import {cartItemAdded} from "../Features/cart/cartSlice";
import {favoritesItemAdded, favoritesItemRemoved, selectFavoritesItems} from "../Features/favorites/favoritesSlice";
import StarRating from "../Layout/StarRating";

interface Prop{
    openCart:  React.Dispatch<React.SetStateAction<Boolean>>;
    closeItemDetails: React.Dispatch<React.SetStateAction<Boolean>>;
}

type Props = Prop & Product
const StoreItemDetails = ({id,image,name,price,description,openCart, closeItemDetails}: Props) => {
    const dispatch = useDispatch()
    const [quantity,setQuantity] = useState<number>(1)
    const favoriteItems = useSelector(selectFavoritesItems)
    const checkIfItemIsInArray = useCallback(() => {
        return favoriteItems.find(item => item.id === id)
    },[favoriteItems, id])
    const isFavorite = checkIfItemIsInArray()
    const onClickAddFavoriteItem = () => {
        if(!checkIfItemIsInArray())
            dispatch(favoritesItemAdded(id,image,description,name,price,true))
        else
            dispatch(favoritesItemRemoved(id))
    }
    const onClickItemAdded = () => {
            dispatch(cartItemAdded(id,image,description,price,name,quantity))
    }
    const oldPrice = price ? price + 20 : null

    return (
        <>
            <div className="flex flex-col md:flex md:flex-row content-center justify-items-center w-full h-full overflow-auto">
        <div className="relative pt-6 md:w-6/12 max-w-lg items-center w-full">
            <h1 className="uppercase tracking-wide no-underline hover:no-underline ml-2 w-3/4 md:mx-auto font-bold text-gray-800 text-xl md:text-2xl">{name}</h1>
            <div className="flex md:mt-6 w-3/4 md:mx-auto ">
            <p className="hidden md:inline-block tracking-wide font-bold text-large text-gray-500 line-through">${oldPrice}.00</p>
            <p className="tracking-wide font-bold text-xl text-yellow-500 ml-2">${price}.00</p>
            </div>
            <div className="md:mt-96 flex flex-col w-full ">
            <p className="w-full md:w-3/4 px-2 md:px-0 text-xl md:mx-auto break-word pt-10">{description}</p>
                <StarRating/>
            <div className="flex flex-col mt-2">
                <div className="flex flex-row border-x border-gray-400  border-t border-gray-400 w-full md:w-3/4 mt-4 mx-auto items-center py-8">
                    <p className="pl-5">Color:</p>
                    <div className="flex md:mx-auto px-2 md:px-0 md:justify-between w-full md:w-3/5 items-center">
                    <img className="border border-gray-400 rounded-full w-16 h-16" src="https://savoy.nordicmade.com/wp-content/uploads/2020/10/swatch-chair-black.jpg" alt="black"/>
                    <img className="rounded-full w-16 h-16" src="https://savoy.nordicmade.com/wp-content/uploads/2020/10/swatch-chair-beige.jpg" alt="beige"/>
                    <img className="rounded-full w-16 h-16" src="https://savoy.nordicmade.com/wp-content/uploads/2020/10/swatch-chair-brown.jpg" alt="brown"/>
                    </div>
                </div>
                <div className="flex flex-row border border-gray-400 w-full md:w-3/4 mx-auto py-3 items-center">
                    <p className="pl-5">Quantity:</p>
                    <button disabled={quantity <= 1} onClick={() => setQuantity(quantity-1)} className="h-0 w-0 ml-auto order-2 border-x-8 border-x-transparent border-b-[8px] border-b-gray-600 -rotate-90"/>
                    <p className="order-2 mx-5">{quantity}</p>
                    <button onClick={() => setQuantity(quantity+1)} className="h-0 w-0 border-x-8 border-x-transparent border-b-[8px] border-b-gray-600 rotate-90 order-2 mr-5"/>
                </div>
            <button className="w-3/4 hover:bg-buttonHover rounded-sm py-5 mx-auto bg-panelButton text-white mt-5 md:mt-0"
                    onClick={() => {
                        openCart(value => !value);
                        closeItemDetails(value => !value);
                        onClickItemAdded();
                    }}
            >
                Add to cart
            </button>
                <div className="flex flex-row items-center w-3/4 mx-auto mt-4">
                    <a
                        href="https://facebook.com">
                        <svg
                            viewBox="0 0 512 512"
                            className="h-8 w-8 fill-current text-gray-500 hover:text-black"
                        >
                            <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/>
                        </svg>
                    </a>
                    <a
                        className=""
                        href="https://twitter.com">
                        <svg
                            viewBox="0 0 512 512"
                            className="h-8 w-8 fill-current text-gray-500 hover:text-black"
                        >
                            <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"/>
                        </svg>
                    </a>
            <button className="inline-block no-underline hover:text-black border-l border-gray-300 " onClick={() => {
                onClickAddFavoriteItem();

            }}>
            <svg
                className={`h-7 w-7 fill-current text-gray-500 hover:text-red-400 mx-20 mr-16 ${isFavorite ? 'text-red-400' : null}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
            </svg>
            </button>
                </div>

            </div>
            </div>
        </div>
            <div className="w-full mx-auto order-first md:order-1">
                <img className="w-full h-full"
                    src={image} alt="product"/>
            </div>
            </div>
        </>
    );
};

export default StoreItemDetails;