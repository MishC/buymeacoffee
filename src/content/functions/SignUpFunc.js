import { auth } from "../../utils/firebase";

import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
////////////////////////////////////////////////////////////////////////////////
const googleProvider = new GoogleAuthProvider();
export const GoogleSignUp = async (navigate) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    //console.log(result.user);
    navigate("/yourpage");
  } catch (error) {
    console.log(error);
  }
};

////////////////////////////////////////////////////////////////////////////////
const Twitterprovider = new TwitterAuthProvider();
export const TwitterSignUp = async (navigate) => {
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

    await updateProfile(auth.currentUser, {
      photoURL: photoUrl,
    });
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
////////////////////////////////////////////////////////////////////////////////
const fbProvider = new FacebookAuthProvider();

export const FacebookSignUp = async (navigate) => {
  try {
    const result = await signInWithPopup(auth, fbProvider);
    const credantial = await FacebookAuthProvider.credentialFromResult(result);
    const token = credantial.accessToken;
    let photoUrl = result.user.photoURL + "?height=500&access_token=" + token;
    await updateProfile(auth.currentUser, {
      photoURL: photoUrl,
    });
    navigate("/yourpage");
  } catch (error) {
    console.log(error);
  }
};
////////////////////////////////////////////////////////////////////////////////////////

export const EmailSignUp = async (email, password, setError, navigate) => {
  try {
    setError(null);

    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      setError("Could not complete Sign up");
    }
    await res.user.updateProfile();

    // Signed in
    //const user = userCredential.user;
    await navigate("/yourpage");

    // ...
  } catch (error) {
    //const errorCode = error.code;
    //const errorMessage = error.message;
    if (error.code === "auth/email-already-in-use") {
      setError(
        "An account with this email already exists. Please try to log in"
      );
    } else if (error.code === "auth/invalid-password") {
      setError(
        "Invalid password. It must be a string with at least six characters."
      );
    } else if (error.code === "auth / user - not - found") {
      setError("Invalid username or password.");
    } else {
      setError(error.code);
    }
    // ..
  }
};
