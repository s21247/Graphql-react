import React from "react";
import Navbar from "./Components/Navbar";
import MainImage from "./Components/MainImage";
import AboutDescription from "./Components/AboutDescription";
import StoreNavbar from "./Components/StoreNavbar";
import StoreItemList from "./Components/StoreItemList";
function App() {
  return (
    <>
      <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <Navbar />
        <MainImage />
      </div>
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <StoreNavbar />
          <StoreItemList />
        </div>
      </section>

      <AboutDescription />
    </>
  );
}

export default App;
