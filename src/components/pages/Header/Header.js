import React from "react";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <div>
      <nav class="navbar">
        <div class="container">
          <a class="navbar-brand" href="#">
            Authentication System
          </a>
          <div class=" navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/photos">
                  Country
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Product
                </a>
              </li>
              {user
                ? <button className="signout-btn" onClick={logout}>
                    SignOut
                  </button>
                : <Link to="/login">Login</Link>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
