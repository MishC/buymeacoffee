import React from "react";
const SignUpButtons = ({ provider, icon }) => {
  return (
    <button onClick={provider}>
      <span dangerouslySetInnerHTML={{ __html: icon }} />
      <span className="ml-5">Sign up with Twitter</span>
    </button>
  );
};
export default SignUpButtons;
