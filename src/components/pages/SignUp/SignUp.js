import React, { useState } from "react";
import "./SignUp.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  // const [agree, setAgree] = useState("");
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleEmailBlur = e => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = e => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordBlur = e => {
    setConfirmPassword(e.target.value);
  };
  if (user) {
    navigate("/login");
  }
  const handleCreateUser = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("**Your two password did not matched**");
      return;
    }
    if (password.length < 6) {
      setError("Password must be six characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="sign-up-container">
      <div className="sign-up-details">
        <h1 className="signup-title">Sign Up</h1>
        <p className="sign-up-subtitle">
          Create an Account, <span>its free</span>
        </p>
        <form className="input-container" onSubmit={handleCreateUser}>
          <label htmlFor="">Email</label> <br />
          <input
            onBlur={handleEmailBlur}
            type="email"
            name="email"
            id=""
            placeholder="Enter Your Email"
            required
          />
          <br />
          <label htmlFor="">Password</label> <br />
          <input
            onBlur={handlePasswordBlur}
            type="password"
            name="password"
            id=""
            placeholder="Enter Your Password"
            required
          />
          <br />
          <label htmlFor="">Confirm Password</label> <br />
          <input
            onBlur={handleConfirmPasswordBlur}
            type="password"
            name="confirm-password"
            id=""
            placeholder="Re-enter Your Password"
            required
          />
          <p className="error">{error}</p>
          <button className="sign-up-btn" type="submit">
            Sign Up
          </button>
        </form>

        <p className="login-account-container">
          Already have an Account? <Link to="/login">Login</Link>
        </p>
        <SocialLogin />
      </div>
    </div>
  );
};

export default SignUp;
