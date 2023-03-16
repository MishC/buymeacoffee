import React from "react";
import Navigation from "../Navigation/Navigation";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

export default function YourPage() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  console.log(user);
  if (loading) return <h1>Loading</h1>;
  if (!user) navigate("/signup");
  if (user) {
    return (
      <div className="yourPage">
        <Navigation />
        <h3>Complete your page</h3>
      </div>
    );
  }
}
