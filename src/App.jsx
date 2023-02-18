import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, NavLink, Link, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import * as api from "./utils/api";
import Register from "./pages/Register";
import Loader from "./components/Loader";
import { useRecoilState } from "recoil";
import RequireAuth from "./components/RequireAuth";
import {
  errorAtom,
  loadingAtom,
  messageAtom,
  subscriptionState,
  userAtom,
} from "./state/store";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Pricing from "./pages/Pricing";
import Checkout from "./pages/Checkout";
import { loadStripe } from "@stripe/stripe-js";
import Create from "./pages/Create";
import Gallery from "./pages/Gallery";
import Dashboard from "./pages/Dashboard";
import { useQuery } from "react-query";
import { getCustomer } from "./utils/auth.js";

function App() {
  const [user, setUser] = useRecoilState(userAtom);
  const [error, setError] = useRecoilState(errorAtom);
  const [message, setMessage] = useRecoilState(messageAtom);
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const stripe = loadStripe(import.meta.env.VITE_STRIPE_PHISABLE_KEY);
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser({
      isAuthenticated: false,
    });
  };

  

  const {data:subscription ,isLoading } = useQuery("subscription",getCustomer)

  useEffect(() => {
    setLoading({ loading: true });
    const user = JSON.parse(localStorage.getItem("user"));
    if (localStorage.getItem("token")) {
      setUser({
        isAuthenticated: true,
        ...user,
      });
    }
    setTimeout(() => {
      setLoading({ loading: false });
    }, 1300);
  }, [useRecoilState]);
  return (
    <BrowserRouter>
      {loading.loading && (
        <div id="preloader">
          <div className="line" />
        </div>
      )}

      {error.error && (
        <>
          <div className="error active">{error.message}</div>
        </>
      )}

      <Navbar />
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<RequireAuth Component={Create}/>}/>
        </Routes>
      </main>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Cuisine Roo</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            <a href="/">Cusine Roo</a>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </BrowserRouter>
  );
}

export default App;
