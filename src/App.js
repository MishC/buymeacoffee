import React from "react";
import "./App.css";

import Header from "./content/Header/header.jsx";
import StartMyPage from "./content/startMyPage/startMyPage.jsx";
//import Overview from "./content/ImageList/ImageList.jsx";
import ImageList from "./content/ImageList/ImageList";
import Footer from "./content/Footer/footer.jsx";
import Sticky from "./content/Sticky/sticky.jsx";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <StartMyPage />
        <ImageList />
        <Sticky />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
