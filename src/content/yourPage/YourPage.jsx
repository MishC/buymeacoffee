import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

import "./yourPage.css";

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
        <form className="d-flex flex-column">
          <label for="profile-photo">Profile Photo</label>
          <input type="file" id="profile-photo" name="profile-photo" />

          <label for="full-name">Full Name</label>
          <input type="text" id="full-name" name="full-name" />

          <label for="creating">What are you creating?</label>
          <input type="text" id="creating" name="creating" />

          <label for="about-me">About Me:</label>
          <textarea id="about-me" name="about-me"></textarea>

          <div>
            <label for="website">Website:</label>
            <input type="text" id="website" name="website" />
            <button>Add Website</button>
          </div>
        </form>
      </div>
    );
  }
}
