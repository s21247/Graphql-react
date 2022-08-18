import React from 'react';
import {useSelector} from "react-redux";
import {selectFavoritesItems} from "./favoritesSlice";
import FavoriteItem from "./FavoriteItem";

const FavoriteList = () => {
    const favoriteItems = useSelector(selectFavoritesItems)
    return (
        <>
            <div className="my-10 flex flex-col ">
            {
                favoriteItems.map(item => {
                    return <>
                        <FavoriteItem
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            price={item.price}
                            name={item.name}
                            isFavorite={item.isFavorite}
                        />
                    </>
                })
            }
            </div>
        </>
    );
};

export default FavoriteList;