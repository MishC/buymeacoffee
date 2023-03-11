import React from "react";

import Header from "../Header/Header.jsx";
import StartMyPage from "../startMyPage/StartMyPage";
//import Overview from "../ImageList/ImageList.jsx";
import ImageList from "../ImageList/ImageList";
import Footer from "../Footer/Footer.jsx";
import Sticky from "../Sticky/Sticky.jsx";

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
};
export default Home;
