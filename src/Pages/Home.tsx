import React from "react";
import MainImage from "../Components/Layout/MainImage";
import StoreNavbar from "../Components/Layout/StoreNavbar";
import GetCategories from "../Components/Hooks/GetCategories";
import { Outlet } from "react-router-dom";

const Home = () => {
  const getCategories = GetCategories();

  return (
    <>
      <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <MainImage />
      </div>
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <StoreNavbar categories={getCategories || []} />
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Home;
