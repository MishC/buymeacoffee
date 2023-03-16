import React from "react";
import "./navigation.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import CoffeeIcon from "../../assets/SVGs/CoffeeIcon";
const Navigation = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="Navigation">
      <nav>
        <div>
          {" "}
          <a href="/">
            <CoffeeIcon />
          </a>
        </div>
        {user ? (
          <div>
            <button onClick={() => auth.signOut()}>Logout</button>
          </div>
        ) : (
          <div>
            <span className="roman">Already have an account? &nbsp;</span>

            <button>Login</button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
