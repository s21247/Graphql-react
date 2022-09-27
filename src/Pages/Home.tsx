import React,{ useState} from "react";
import MainImage from "../Components/Layout/MainImage";
import StoreNavbar from "../Components/Layout/StoreNavbar";
import GetCategories from "../Components/Hooks/GetCategories";
import {Outlet} from "react-router-dom";
import Footer from "../Components/Layout/Footer";
import {Product} from "../Components/Models/Product.interface";

const Home = () => {
  const getCategories = GetCategories();
  const [filteredResults, setFilteredResults] = useState<Product[]>([])
  const [searchInput,setSearchInput] = useState('');

  return (
    <>
      <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <MainImage />
      </div>
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <StoreNavbar
              setFilteredResults={setFilteredResults}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              categories={getCategories || []} />
          <Outlet context={{filteredResults}}/>
        </div>
      </section>
        <Footer styles={{position: "relative"}}/>
    </>
  );
};



export default Home;
