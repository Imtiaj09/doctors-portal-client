import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const form = location.state?.form?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(form, { replace: true });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
        CONTINUE WITH GOOGLE
      </button>
    </div>
  );
};

export default SocialLogin;
