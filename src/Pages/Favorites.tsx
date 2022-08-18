import React from "react";
import FavoriteList from "../Components/Features/favorites/FavoriteList";

const Favorites = () => {
  return (
    <>
      <div className="container my-14 mx-auto flex-row items-center flex-wrap ">
          <div className="flex h-24 border-y-2 border-gray-500 ">
              <h1 className="my-auto tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">Wishlist</h1>
          </div>
        <FavoriteList />
      </div>
    </>
  );
};

export default Favorites;
