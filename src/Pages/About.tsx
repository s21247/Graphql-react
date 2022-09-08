import React from 'react';
import AboutDescription from "../Components/Layout/AboutDescription";
import Footer from "../Components/Layout/Footer";

const About = () => {
    return (
        <>
            <AboutDescription />
            <Footer styles={{position: "fixed"}}/>
        </>
    );
};

export default About;