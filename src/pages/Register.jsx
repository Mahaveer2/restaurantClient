import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import * as api from "../utils/api";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { errorAtom, messageAtom, userAtom } from "../state/store";

const Register = () => {
  const [err, setErr] = useRecoilState(errorAtom);
  const [msg, setMsg] = useRecoilState(messageAtom);
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useNavigate();

  const handleError = (msg) => {
    setErr({
      error: true,
      message: msg,
    });
    setTimeout(() => {
      setErr({
        error: false,
        message: "",
      });
    }, 2000);
  };
  async function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;
    const response = await api.signUpGoogle(accessToken).catch((err) => {
      setErr({
        error: true,
        message: "User already exists!",
      });
      setTimeout(() => {
        setErr({
          error: false,
          message: "",
        });
      }, 2000);
    });
    const token = response.data.token;
    const user = response.data.result;

    if (response?.data) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      setUser({
        ...user,
        isAuthenticated: true,
      });

      navigate("/");
      setMsg({ msg: true, message: "Created account succesfully!" });
      setTimeout(() => {
        setMsg({
          msg: false,
          message: "Created user successfully!",
        });
      }, 2000);
      setTimeout(() => setMsg({ msg: false, message: "" }), 2000);
    }
  }

  if (user.isAuthenticated) {
    navigate("/");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let data = {};
    const form = new FormData(e.target);
    form.append(
      "picture",
      "https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg"
    );
    var object = {};
    form.forEach((value, key) => {
      if (!Reflect.has(data, key)) {
        data[key] = value;
        return;
      }
      if (!Array.isArray(data[key])) {
        data[key] = [data[key]];
      }
      data[key].push(value);
    });

    if (data.name === "" || data.lastName === "") {
      handleError("Invalid fields");

      return false;
    } else if (data.confirmPassword != data.password) {
      handleError("Passwords not matching!");

      return false;
    } else if (data.password.length < 4) {
      handleError("Passwords too small!");

      return false;
    }
    const response = await api.signUp(data).catch((error) => {
      setErr({
        error: true,
        message: "User already signed up",
      });
      setTimeout(() => {
        setErr({
          error: false,
          message: "",
        });
      }, 2000);
    });

    if (response?.data) {
      const token = response.data.token;
      const user = response.data.result;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      setUser({
        ...user,
        isAuthenticated: true,
      });

      navigate("/");
      setMsg({ msg: true, message: "Created account succesfully!" });
      setTimeout(() => {
        setMsg({
          msg: false,
          message: "Created user successfully!",
        });
      }, 2000);
      setTimeout(() => setMsg({ msg: false, message: "" }), 2000);
    }
  }

  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  return (
    // <div>
    //   <h1>Sign up</h1>
    //   <form onSubmit={(e) => handleSubmit(e)}>
    //     <button onClick={login} className="login-google">
    //       Sign up with google
    //     </button>
    //     <div className="form-control">
    //       <input required name="email" type="email" placeholder="Email" />
    //     </div>
    //     <div className="form-control">
    //       <input
    //         required
    //         name="firstName"
    //         type="text"
    //         placeholder="First Name"
    //       />
    //     </div>
    //     <div className="form-control">
    //       <input required name="lastName" type="text" placeholder="Last Name" />
    //     </div>
    //     <div className="form-control">
    //       <input
    //         required
    //         name="password"
    //         type="password"
    //         placeholder="Password"
    //       />
    //     </div>
    //     <div className="form-control">
    //       <input
    //         name="confirmPassword"
    //         required
    //         type="password"
    //         placeholder="Confirm Password"
    //       />
    //     </div>
    //     <div className="form-control">
    //       <button type="submit">Login</button>
    //     </div>
    //   </form>
    // </div>
    <section id="contact" className="contact">
      <div className="mt-[120px]">
        <div className="row d-flex justify-content-center">
          <h2 className="text-3xl font-bold text-center">Register</h2>
        </div>
      </div>
      {/* End Page Header */}
      {/* End Page Header */}

      <div className="container mx-auto w-full">
        <div className="row justify-content-center ">
          <div className="col-lg-9">
            <button
              onClick={login}
              href="/"
              class="inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-black  no-underline align-middle bg-blue-100 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto  hover:text-black hover:border-blue-700  focus-within:border-blue-700"
            >
              Sign up with google
              <img
                src="https://freesvg.org/img/1534129544.png"
                className="w-5 ml-5"
                alt=""
              />
            </button>
            <form
              onSubmit={(e) => handleSubmit(e)}
              method="post"
              className="w-full mt-5"
            >
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <div class="flex gap-2 w-full">
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  required
                />

                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Password"
                required
              />

              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                required
              />

              <button className="btn w-full" type="submit">
                Create account
              </button>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>
  );
};

export default Register;
