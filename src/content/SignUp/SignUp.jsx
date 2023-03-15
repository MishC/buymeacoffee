import React, { useEffect, useState } from "react";
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
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  ////
  const EmailLogIn = async () => {
    //   if (isSignInWithEmailLink(auth, window.location.href)) {
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    // let email = window.localStorage.getItem('emailForSignIn');
    // if (!email) {
    //   User opened the link on a different device. To prevent session fixation
    //   attacks, ask the user to provide the associated email again. For example:
    //   email = window.prompt('Please provide your email for confirmation');
    // }
    // The client SDK will parse the code from the link for you.
    // signInWithEmailLink(auth, email, window.location.href)
    //   .then((result) => {
    //     Clear email from storage.
    //     window.localStorage.removeItem('emailForSignIn');
    //     You can access the new user via result.user
    //     Additional user info profile not available via:
    //     result.additionalUserInfo.profile == null
    //     You can check if the user is new or existing:
    //     if ( !result.additionalUserInfo.isNewUser) {}
    //   })
    //   .catch((error) => {
    //     Some error occurred, you can inspect the code: error.code
    //     console.log(error.ccode);
    // Common errors could be invalid email and invalid or expired OTPs.
    //  });

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (error.code === "auth/email-already-in-use") {
          alert("User already signed up with that email");
        }
        // ..
      });
  };
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            style={{ backgroundColor: "#fff" }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button type="submit" onClick={EmailLogIn}>
            Continue with email
          </button>
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

          {/* Is it a way to get Apple Developer Programme for free?
           Sign In with Apple can only be configured by members of the Apple Developer Program.
           https://firebase.google.com/docs/auth/web/apple?authuser=0&hl=en

          
          <button>
            <span dangerouslySetInnerHTML={{ __html: Icons.apple }} />
            <span className="ml-5">Sign up with Apple</span>
          </button> */}
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
