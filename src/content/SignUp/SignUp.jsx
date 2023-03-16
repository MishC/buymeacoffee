import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import "./SignUp.css";
import SignUpButtons from "./SignUpButtons";
import Navigation from "../Navigation/Navigation.jsx";
import Sticky from "../Sticky/Sticky.jsx";
import * as Icons from "../../assets/SVGs/AllIconsSVG";

import { auth } from "../../utils/firebase";

import {
  GoogleSignUp,
  TwitterSignUp,
  FacebookSignUp,
  EmailSignUp,
} from "../functions/SignUpFunc";

const SignUp = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const ref = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inUse, setInUse] = useState("");

  ////////////////////////////////////////////////////////////////////////////////////////

  const handleGoogleSignUp = (e) => {
    e.preventDefault();
    GoogleSignUp(navigate);
  };

  ////////////////////////////////////////////////////////////////////////////////////////
  const handleFacebookSignUp = (e) => {
    e.preventDefault();
    FacebookSignUp(navigate);
  };
  ////////////////////////////////////////////////////////////////////////////////////////
  const handleTwitterSignUp = (e) => {
    e.preventDefault();
    TwitterSignUp(navigate);
  };
  //console.log(handleTwitterSignUp.name);
  const handleEmailSignUp = (e) => {
    e.preventDefault();
    EmailSignUp(email, password, setInUse, navigate);
  };
  ////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (user) {
      navigate("/yourpage");
    } else {
      console.log("login");
    }
  }, [user, navigate]);

  ////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="signUp">
      <Navigation method="Login" str="Already have an account?" />
      <main>
        <h3>Sign Up</h3>
        <form action="submit" onSubmit={handleEmailSignUp}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            ref={ref}
            required
          />
          {inUse.length > 1 ? (
            <div
              style={{
                color: "#EE5252",
                fontSize: "14px",
                fontFamily: "Avenir - Roman",
              }}
            >
              {inUse}
            </div>
          ) : (
            <></>
          )}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            style={{ backgroundColor: "#fff" }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          />
          <button type="submit">Continue with email</button>
        </form>
        <div className="breakFlow">
          <hr />
          <span className="mx-4">or signup with</span>
          <hr />
        </div>
        <div className="signUpButtons">
          <SignUpButtons provider={handleTwitterSignUp} icon={Icons.twitter} />
          <SignUpButtons provider={handleGoogleSignUp} icon={Icons.google} />
          <SignUpButtons
            provider={handleFacebookSignUp}
            icon={Icons.facebook}
          />

          {/* Is it a way to get Apple Developer Programme for free?
           Sign In with Apple can only be configured by members of the Apple Developer Program.
           https://firebase.google.com/docs/auth/web/apple?authuser=0&hl=en
           <button>
            <span dangerouslySetInnerHTML={{ __html: Icons.apple }} />
            <span className="ml-5">Sign up with Apple</span>
          </button> */}
        </div>
        <div className="endNotes roman">
          By signing up, you agree to our <b>Terms</b> and <b>Privacy Policy</b>
          . Creators or content that violate our terms <b>will </b>be
          unpublished.
        </div>
      </main>
      <Sticky />
    </div>
  );
};
export default SignUp;
