
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
  <div className="mt-[170px]">
    <div className="row d-flex justify-content-center">
        <h2 className="text-3xl font-bold text-center">Login</h2>
    </div>
</div>{/* End Page Header */}

  <div className="container mx-auto w-full">
    <div className="row justify-content-center p-3">
      <button  onClick={login}  href="/" class="inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-black  no-underline align-middle bg-blue-100 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto  hover:text-black hover:border-blue-700  focus-within:border-blue-700">
Login with google
<img src="https://freesvg.org/img/1534129544.png" className="w-5 ml-5" alt="" />
</button>
        <form onSubmit={e => handleSubmit(e)} method="post" role="form" className="w-full mt-5">
            <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
            <input type="password" className="form-control" name="password" id="password" placeholder="Password" required />
          <button type="submit" className="w-full btn">Login</button>
        </form>
      </div>{/* End Contact Form */}
  </div>
</section>

  );
};

export default Login;
