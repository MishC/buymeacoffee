import React from "react";
import Navbar from "../Navigation/navigation";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

export default function yourPage() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  console.log(user);
  if (loading) return <h1>Loading</h1>;
  if (!user) navigate("/signup");
  if (user) {
    return (
      <div>
        <Navbar />
        <h1>Complete your page</h1>
      </div>
    );
  }
}
