import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./content/Home/Home";
import SignUp from "./content/SignUp/SignUp";
import YourPage from "./content/yourPage/YourPage";
function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/yourpage" element={<YourPage />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
