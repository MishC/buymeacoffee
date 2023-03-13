import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import "./SignUp.css";
import Navigation from "../Navigation/Navigation.jsx";
import Sticky from "../Sticky/Sticky.jsx";
import * as Icons from "../../assets/SVGs/AllIconsSVG";

import { auth } from "../../utils/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  updateProfile,
} from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  /////
  const googleProvider = new GoogleAuthProvider();
  ///////
  const GoogleLogIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      navigate("/yourpage");
    } catch (error) {
      console.log(error);
    }
  };
  ///////

  const fbProvider = new FacebookAuthProvider();
  const FbLogIn = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      const credantial = await FacebookAuthProvider.credentialFromResult(
        result
      );
      const token = credantial.accessToken;
      let photoUrl = result.user.photoURL + "?height=500&access_token=" + token;
      await updateProfile(auth.currentUser, { photoURL: photoUrl });
      navigate("/yourpage");
    } catch (error) {
      console.log(error);
    }
  };
  ////////////////////////////

  const Twitterprovider = new TwitterAuthProvider();
  const TwitterLogIn = async () => {
    try {
      const result = await signInWithPopup(auth, Twitterprovider);

      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // const secret = credential.secret;

      // The signed-in user info.
      const user = result.user;
      let photoUrl = user.photoURL + "?height=500&access_token=" + token;

      await updateProfile(auth.currentUser, { photoURL: photoUrl });
      navigate("/yourpage");
    } catch (error) {
      // IdP data available using getAdditionalUserInfo(result)
      // ...

      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = TwitterAuthProvider.credentialFromError(error);
      // ...
    }
  };
  // ///////////////////
  useEffect(() => {
    if (user) {
      navigate("/yourpage");
    } else {
      console.log("login");
    }
  }, [user, navigate]);

  /////////

  return (
    <div className="signUp">
      <Navigation />
      <main>
        <h3>Sign Up</h3>
        <form>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            style={{ backgroundColor: "#fff" }}
            required
          />
          <button type="submit">Continue with email</button>
        </form>
        <div className="breakFlow">
          <hr />
          <span className="mx-4">or signup with</span>
          <hr />
        </div>
        <div class="signUpButtons">
          <button onClick={TwitterLogIn}>
            <span dangerouslySetInnerHTML={{ __html: Icons.twitter }} />
            <span className="ml-5">Sign up with Twitter</span>
          </button>
          <button onClick={GoogleLogIn}>
            <span dangerouslySetInnerHTML={{ __html: Icons.google }} />
            <span className="ml-5">Sign up with Google</span>
          </button>
          <button onClick={FbLogIn}>
            {" "}
            <span dangerouslySetInnerHTML={{ __html: Icons.facebook }} />
            <span className="ml-5">Sign up with Facebook</span>
          </button>
          <button>
            <span dangerouslySetInnerHTML={{ __html: Icons.apple }} />
            <span className="ml-5">Sign up with Apple</span>
          </button>
        </div>
        <div className="endNotes roman">
          By signing up, you agree to our terms and privacy policy. You must be
          at least 18 years old to start a page.
        </div>
      </main>
      <Sticky />
    </div>
  );
};
export default SignUp;
