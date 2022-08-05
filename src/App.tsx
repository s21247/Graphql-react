import React from "react";
import Navbar from "./Components/Layout/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import Routing from "./Components/Routing/Routing";

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Routing/>
        </Router>
    </>
  );
}

export default App;
