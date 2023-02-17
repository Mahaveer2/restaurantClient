import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, NavLink, Link, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import * as api from "./utils/api";
import Register from "./pages/Register";
import Loader from "./components/Loader";
import { useRecoilState } from "recoil";
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

  const [subscription, setSubscription] = useRecoilState(subscriptionState);

  const getCustomer = async () => {
    let url = `${
      import.meta.env.VITE_SERVER_DOMAIN
    }/orders/get-subscriptions`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    });
    const data = await response.json();
    if (data.isSubscribed) {
      setSubscription({
        subscribed: true,
        data:data.data[0],
        package:data.product[0]
      });
    }
  };

  useEffect(() => {
    setLoading({ loading: true });
    const user = JSON.parse(localStorage.getItem("user"));
    if (localStorage.getItem("token")) {
      setUser({
        isAuthenticated: true,
        ...user,
      });
      getCustomer();
    }

    setTimeout(() => {
      setLoading({ loading: false });
    },1300)
  }, []);
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
          <Route path="/create" element={<Create/>} />
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
