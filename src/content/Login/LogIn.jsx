import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <div className="login">
      <Navigation str="Don't have an account?" method="Sign up" />
      <main>
        <h2>Welcome back</h2>
        <form action=""></form>
      </main>
    </div>
  );
}

export default LogIn;
