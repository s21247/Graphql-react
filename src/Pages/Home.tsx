import React from "react";
import MainImage from "../Components/layout/MainImage";
import StoreNavbar from "../Components/layout/StoreNavbar";
import GetProducts from "../Components/Hooks/GetProducts";
import StoreItemList from "../Components/items/StoreItemList";
import GetCategories from "../Components/Hooks/GetCategories";

const Home = () => {
  const getProducts = GetProducts();
  const getCategories = GetCategories();

    return (
    <>
      <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">

        <MainImage />
      </div>
      <section className="bg-white py-8">
        <div
          className="container mx-auto flex items-center flex-wrap p
        t-4 pb-12"
        >
          <StoreNavbar categories={getCategories || []}/>
          <StoreItemList products={getProducts || []} />
        </div>
      </section>
    </>
  );
};

export default Home;
