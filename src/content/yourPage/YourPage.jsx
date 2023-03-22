import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import { useNavigate } from "react-router-dom";
//import Loader from "react-loader-spinner";
import { BallTriangle } from "react-loader-spinner";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

export default function YourPage() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user & !loading) {
      navigate("/signup");
    }
  }, [user, navigate, loading]);
  if (loading) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }

  if (user) {
    return (
      <div className="yourPage">
        <Navigation method="Logout" />
        <h3>Complete your page</h3>
      </div>
    );
  }
}
