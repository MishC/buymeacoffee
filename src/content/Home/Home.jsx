import React from "react";

import Header from "../Header/Header";
import StartMyPage from "../startMyPage/StartMyPage";
//import Overview from "../ImageList/ImageList.jsx";
import ImageList from "../ImageList/ImageList";
import Footer from "../Footer/Footer";
import Sticky from "../Sticky/Sticky";

const Home = () => {
  return (
    <div className="Home">
      <div className="App-header">
        <Header />
      </div>
      <StartMyPage />
      <ImageList />
      <Sticky />

      <footer>
        <Footer />
      </footer>
    </div>
  );
  