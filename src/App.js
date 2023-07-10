import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Destination from "./Components/Destination";
import AboutUs from "./Components/AboutUs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar";

function App(){
  return(
  <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Destination />} />
      <Route path="/" element={<AboutUs />} />
    </Routes>
    </BrowserRouter>
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p>© 2023 Travel with us. All rights reserved.</p>
      </div>
    </footer>
  </>
  );
}
export default App;


