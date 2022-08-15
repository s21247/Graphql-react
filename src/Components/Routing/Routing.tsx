import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Favorites from "../../Pages/Favorites";
const Routing = () => {
    const favoritesPage: string = '/favorites'
    const aboutPage: string = '/about'
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={favoritesPage} element={<Favorites/>}/>
            <Route path={aboutPage} element={<About/>}/>
        </Routes>
    );
};

export default Routing;