import "./App.css";
import Banner from "./components/pages/Banner/Banner";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/SignUp";
import Home from "./components/pages/Home/Home";
import Photos from "./components/pages/Photos/Photos";
import CountryDetail from "./components/CountryDetail/CountryDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/home" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/photo/:countryId" element={<CountryDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
