import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Favorites from "../../Pages/Favorites";
import StoreItemList from "../Items/StoreItemList";
import GetProducts from "../Hooks/GetProducts";
import CategoryItemList from "../Items/CategoryItemList";
const Routing = () => {
    const favoritesPage: string = '/favorites'
    const aboutPage: string = '/about'
    const getProducts = GetProducts();


    return (
        <Routes>
            <Route path={"/"} element={<Home/>}>
                <Route path={"/"} element={<StoreItemList products={getProducts || []}/>}/>
                <Route path={"product-category/:name"} element={<CategoryItemList/>}/>
            </Route>
            <Route path={favoritesPage} element={<Favorites/>}/>
            <Route path={aboutPage} element={<About/>}/>
        </Routes>
    );
};

export default Routing;