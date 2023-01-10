import React from "react";
import "./SocialLogin.css";
import { useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="error-title">
          {error.message}
        </p>
      </div>
    );
  }
  if (user) {
    navigate("/home");
  }
  return (
    <div className="social-login-container">
      {errorElement}
      <div>
        <button onClick={() => signInWithGoogle()} className="social-btn">
          <i class="fa-brands fa-google" /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
