import React from "react";
import "./App.css";

import Header from "./content/Header/header.jsx";
import StartMyPage from "./content/startMyPage/startMyPage.jsx";
import Overview from "./content/Overview/overview.jsx";
import Footer from "./content/Footer/footer.jsx";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <StartMyPage />
        <Overview />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
