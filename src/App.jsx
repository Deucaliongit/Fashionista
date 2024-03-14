import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BannerPromo from "./components/BannerPromo";

function App() {
  return (
    <>
      <Router>
        <BannerPromo />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <SideBar />
        <Footer />
      </Router>
    </>
  );
}

export default App;
