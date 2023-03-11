import React from "react";

import Header from "../Header/header.jsx";
import StartMyPage from "../startMyPage/StartMyPage.jsx";
//import Overview from "../ImageList/ImageList.jsx";
import ImageList from "../ImageList/ImageList";
import Footer from "../Footer/footer.jsx";
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
