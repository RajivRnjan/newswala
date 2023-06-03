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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/general" element={<FetchData cat="general" />} />
          <Route path="/business" element={<FetchData cat="business" />} />
          <Route
            path="/entertainment"
            element={<FetchData cat="entertainment" />}
          />
          <Route path="/health" element={<FetchData cat="health" />} />
          <Route path="/science" element={<FetchData cat="science" />} />
          <Route path="/sport" element={<FetchData cat="sport" />} />
          <Route path="/technology" element={<FetchData cat="technology" />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
