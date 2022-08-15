import React from 'react';
import {useSelector} from "react-redux";
import {selectFavoritesItems} from "../Components/Features/favorites/favoritesSlice";

const Favorites = () => {
    const favorites = useSelector(selectFavoritesItems)
    console.log(favorites);
    return (
        <div>

        </div>
    );
};

export default Favorites;