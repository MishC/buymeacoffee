import React from "react";
import "./signUp.css";
import coffeeIcon from "../../assets/SVGs/coffeeIcon";
import Sticky from "../Sticky/sticky.jsx";

import {
  signInWithPopup,
  GoogleAuthProvider,
  //FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";

const signUp = () => {
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signUp">
      <nav>
        <div>
          {" "}
          <a href="https://www.buymeacoffee.com/"></a>
          <svg>
            {" "}
            <coffeeIcon />
          </svg>
        </div>
        <div>
          <span class="roman">Already have an account? &nbsp;</span>

          <button>Login</button>
        </div>
      </nav>
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
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M24 4.5585C23.1075 4.95 22.1565 5.2095 21.165 5.3355C22.185 4.7265 22.9635 3.7695 23.3295 2.616C22.3785 3.183 21.3285 3.5835 20.2095 3.807C19.3065 2.8455 18.0195 2.25 16.6155 2.25C13.8915 2.25 11.6985 4.461 11.6985 7.1715C11.6985 7.5615 11.7315 7.9365 11.8125 8.2935C7.722 8.094 4.1025 6.1335 1.671 3.147C1.2465 3.8835 0.9975 4.7265 0.9975 5.634C0.9975 7.338 1.875 8.8485 3.183 9.723C2.3925 9.708 1.617 9.4785 0.96 9.117C0.96 9.132 0.96 9.1515 0.96 9.171C0.96 11.562 2.6655 13.548 4.902 14.0055C4.5015 14.115 4.065 14.1675 3.612 14.1675C3.297 14.1675 2.979 14.1495 2.6805 14.0835C3.318 16.032 5.127 17.4645 7.278 17.511C5.604 18.8205 3.4785 19.6095 1.1775 19.6095C0.774 19.6095 0.387 19.5915 0 19.542C2.1795 20.9475 4.7625 21.75 7.548 21.75C16.602 21.75 21.552 14.25 21.552 7.749C21.552 7.5315 21.5445 7.3215 21.534 7.113C22.5105 6.42 23.331 5.5545 24 4.5585Z"
                  fill="#03A9F4"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  {" "}
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <span className="ml-5">Sign up with Twitter</span>
          </button>
          <button onClick={GoogleLogin}>
            <svg
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.7074 12.2531C22.7074 11.4389 22.6436 10.6203 22.5074 9.81934H11.582V14.4315H17.8385C17.5788 15.9191 16.7446 17.235 15.5232 18.0711V21.0638H19.2557C21.4476 18.9777 22.7074 15.8971 22.7074 12.2531Z"
                fill="#4285F4"
              ></path>
              <path
                d="M11.5851 23.9555C14.7091 23.9555 17.3436 22.8949 19.2631 21.0641L15.5305 18.0715C14.492 18.802 13.1514 19.2157 11.5894 19.2157C8.56757 19.2157 6.00542 17.1077 5.08611 14.2734H1.23438V17.3585C3.20068 21.403 7.20563 23.9555 11.5851 23.9555Z"
                fill="#34A853"
              ></path>
              <path
                d="M5.07965 14.2764C4.59446 12.7888 4.59446 11.1781 5.07965 9.69055V6.60547H1.23214C-0.410713 9.98981 -0.410713 13.9771 1.23214 17.3614L5.07965 14.2764Z"
                fill="#FBBC04"
              ></path>
              <path
                d="M11.5851 4.74065C13.2365 4.71424 14.8325 5.35678 16.0285 6.53624L19.3354 3.11669C17.2415 1.08344 14.4622 -0.0344006 11.5851 0.000807131C7.20564 0.000807131 3.20068 2.55337 1.23438 6.60225L5.08186 9.68733C5.99692 6.84871 8.56333 4.74065 11.5851 4.74065Z"
                fill="#EA4335"
              ></path>
            </svg>
            <span className="ml-5">Sign up with Google</span>
          </button>
          <button>
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 11.5C23 5.14872 17.8513 0 11.5 0C5.14872 0 0 5.14872 0 11.5C0 17.2399 4.20536 21.9976 9.70312 22.8603V14.8242H6.7832V11.5H9.70312V8.96641C9.70312 6.08422 11.42 4.49219 14.0468 4.49219C15.3047 4.49219 16.6211 4.7168 16.6211 4.7168V7.54688H15.171C13.7425 7.54688 13.2969 8.43341 13.2969 9.34375V11.5H16.4863L15.9765 14.8242H13.2969V22.8603C18.7946 21.9976 23 17.2399 23 11.5Z"
                fill="#1877F2"
              ></path>
              <path
                d="M15.9745 14.8242L16.4844 11.5H13.2949V9.34375C13.2949 8.43431 13.7405 7.54688 15.1691 7.54688H16.6191V4.7168C16.6191 4.7168 15.3032 4.49219 14.0449 4.49219C11.4181 4.49219 9.70117 6.08422 9.70117 8.96641V11.5H6.78125V14.8242H9.70117V22.8603C10.8918 23.0466 12.1042 23.0466 13.2949 22.8603V14.8242H15.9745Z"
                fill="white"
              ></path>
            </svg>
            <span className="ml-5">Sign up with Facebook</span>
          </button>
          <button>
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.68377 24C3.11185 23.9794 0.157227 16.6879 0.157227 12.9745C0.157227 6.90873 4.70762 5.58077 6.4613 5.58077C7.25162 5.58077 8.09551 5.89112 8.83984 6.16577C9.36034 6.35734 9.89865 6.55511 10.198 6.55511C10.3772 6.55511 10.7995 6.38688 11.1724 6.23927C11.9675 5.92272 12.957 5.5293 14.1091 5.5293C14.1112 5.5293 14.114 5.5293 14.116 5.5293C14.9763 5.5293 17.5849 5.71811 19.1532 8.0733L19.5206 8.62534L18.9919 9.0243C18.2366 9.5942 16.8585 10.6338 16.8585 12.6931C16.8585 15.132 18.4192 16.07 19.169 16.5211C19.5 16.7202 19.8426 16.9255 19.8426 17.3746C19.8426 17.6678 17.5025 23.9636 14.1043 23.9636C13.2728 23.9636 12.685 23.7137 12.1666 23.4933C11.642 23.2701 11.1895 23.0779 10.4417 23.0779C10.0627 23.0779 9.58341 23.2571 9.07599 23.4473C8.38257 23.7061 7.5977 24 6.70712 24H6.68377Z"
                fill="black"
              ></path>
              <path
                d="M14.4691 0C14.5576 3.19106 12.2754 5.40488 9.996 5.26603C9.62039 2.71945 12.2752 0 14.4691 0Z"
                fill="black"
              ></path>
            </svg>
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
export default signUp;
