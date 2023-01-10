import React, { useState } from "react";
import "./Login.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(
    auth
  );
  const location = useLocation();
  const navigate = useNavigate();
  const handleEmailBlur = e => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = e => {
    setPassword(e.target.value);
  };
  const from = location.state?.from?.pathname || '/home'
  const handleUserSignIn = event => {
    event.preventDefault();
    if (password == '') {
      setError("password field empty");
      return;
    }
    signInWithEmailAndPassword(email, password);
  };
  
  if(user){
    navigate(from, {replace : true})
  }
  return (
    <div className="login-container">
      <div className="login-description">
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">
          Welcome back! Login with
          <span>your credentials</span>
        </p>
        <form className="input-container" onSubmit={handleUserSignIn}>
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
          <p className="error">{error}</p>
          <button className="login-btn"> Login</button>
        </form>

        <p className="create-account-container">
          Don't have an Account?<Link to="/signup">Sign Up</Link>
        </p>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
