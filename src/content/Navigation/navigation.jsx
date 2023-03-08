import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

export default function Navigation() {
  const [user, loading] = useAuthState(auth);
  return (
    <nav>
      <div>
        {" "}
        <a href="https://www.buymeacoffee.com/"></a>
        <svg> {/* <coffeeIcon /> */}</svg>
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
}
