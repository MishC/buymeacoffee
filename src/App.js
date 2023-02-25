import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./content/Home/Home";
import SignUp from "./content/SignUp/signUp";
function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
