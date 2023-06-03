import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FetchData from "./components/FetchData";
// import FetchData from "./pages/FetchData";
import Footer from "./components/Footer";
import "./index.css"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/newswala" element={<Home />} />
          <Route exact path="/newswala/" element={<Home />} />
          <Route exact path="/newswala/home" element={<Home />} />
          <Route path="/newswala/general" element={<FetchData cat="general" />} />
          <Route path="/newswala/business" element={<FetchData cat="business" />} />
          <Route
            path="/newswala/entertainment"
            element={<FetchData cat="entertainment" />}
          />
          <Route path="/newswala/health" element={<FetchData cat="health" />} />
          <Route path="/newswala/science" element={<FetchData cat="science" />} />
          <Route path="/newswala/sport" element={<FetchData cat="sport" />} />
          <Route path="/newswala/technology" element={<FetchData cat="technology" />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
