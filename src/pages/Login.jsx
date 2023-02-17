
      /* <form onSubmit={e => handleSubmit(e)}>
      <button onClick={login} className="login-google">Sign in with google</button>
        <div className="form-control">
          <input name="email" type="email" placeholder="Email" />
        </div>
        <div className="form-control">
          <input className="form-control" name="password" type="password" placeholder="Password" />
        </div>
        <div className="form-control">
          <input className="form-control" name="password" type="password" placeholder="Password" />
        </div>
        <div className="form-control">
          <button type="submit">Login</button>
        </div>
      </form> */

      import React, { useEffect, useState } from "react";
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import * as api from "../utils/api";
import { useRecoilState } from "recoil";
import { errorAtom, messageAtom, userAtom } from "../state/store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [msg,setMsg] = useRecoilState(messageAtom);
  const [err,setErr] = useRecoilState(errorAtom);
  const [user,setUser] = useRecoilState(userAtom);

  useEffect(() => {
    if(user.isAuthenticated){
      navigate('/');
    }
  },[user])

  async function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;
    const response = await api.signInGoogle(accessToken);
    const token = response.data.token;
    const user = response.data.result;

    localStorage.setItem("user",JSON.stringify(user))
    localStorage.setItem("token",token)

    setUser({
      ...user,
      isAuthenticated:true,
    })

    navigate("/");
    setMsg({msg:true,message:"Login succesfull"})

    setTimeout(() => setMsg({msg:false,message:""}),2000)
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

    if (data.email === "") {
      handleError("Email is required!");

      return false;
    }

    const response = await api.signIn(data).catch((error) => {

      setErr({
        error: true,
        message: error.response.data.message,
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

  const login = useGoogleLogin({ onSuccess:handleGoogleLoginSuccess });

  return (
  <section id="contact" className="contact">
    <div className="page-header d-flex align-items-center">
  <div className="container position-relative">
    <div className="row d-flex justify-content-center">
      <div className="col-lg-4 text-center">
        <h2>Login</h2>
      </div>
    </div>
  </div>
</div>{/* End Page Header */}

  <div className="container">
    <div className="row justify-content-center ">
      <div className="col-lg-4">
      <button onClick={login} className="login-google btn btn-primary"> <i className="bi bi-google"></i> Sign in with google</button>
        <form onSubmit={e => handleSubmit(e)} method="post" role="form" className="php-email-form">
        <div className="form-group mt-3">
            <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
          </div> 
          <div className="form-group mt-3">
            <input type="password" className="form-control" name="password" id="password" placeholder="Password" required />
          </div>
          
          <div className="text-center mt-3"><button type="submit">Login</button></div>
        </form>
      </div>{/* End Contact Form */}
    </div>
  </div>
</section>

  );
};

export default Login;
