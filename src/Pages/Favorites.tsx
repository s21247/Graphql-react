import React from "react";
import FavoriteList from "../Components/Features/favorites/FavoriteList";
import Footer from "../Components/Layout/Footer";

const Favorites = () => {
  return (
    <>
      <div className="container my-4 md:my-14 mx-auto flex-row items-center flex-wrap ">
          <div className="flex h-12 md:h-24 border-y-2 border-gray-500 ">
              <h1 className="my-auto tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">Wishlist</h1>
          </div>
        <FavoriteList />
      </div>
        <Footer styles={{position: "fixed"}}/>
    </>
  );
};

export default Favorites;
