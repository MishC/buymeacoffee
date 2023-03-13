import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import CoffeeIcon from "../../assets/SVGs/CoffeeIcon";
const Navigation = () => {
  const [user] = useAuthState(auth);
  return (
    <nav>
      <div>
        {" "}
        <a href="https://www.buymeacoffee.com/">
          <CoffeeIcon />
        </a>
      </div>
      {user ? (
        <div>
          <button onClick={() => auth.signOut()}>Logout</button>
        </div>
      ) : (
        <div>
          <span class="roman">Already have an account? &nbsp;</span>

          <button>Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
