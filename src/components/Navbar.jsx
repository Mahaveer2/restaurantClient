import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import {userAtom} from "../state/store";

const Navbar = () => {
  const [user,setUser] = useRecoilState(userAtom);
  const [nav,setNav] = useState(false);
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  
    setUser({
      isAuthenticated:false,
    })
    window.location.href ="/";
  }
  return (
    <>
    <header id="header" className={`header d-flex align-items-center fixed-top ${nav && "mobile-nav-active"}`}>
    <div className="container-fluid d-flex align-items-center justify-content-between">
      <Link to="/" className="logo d-flex align-items-center  me-auto me-lg-0">
        <i className="bi bi-camera" />
        <h1>Cousine Roo</h1>
      </Link>
      <nav id="navbar" className="navbar active">
        <ul>
        <NavLink to="/">
            {({ isActive }) => (
                <span href="/" className={
                  isActive ? "active" : ""
                }>Home</span>
            )}
          </NavLink>
          <NavLink to="/gallery">
            {({ isActive }) => (
                <span href="/" className={
                  isActive ? "active" : ""
                }>Gallery</span>
            )}
          </NavLink>
          <NavLink to="/pricing">
            {({ isActive }) => (
                <span href="/" className={
                  isActive ? "active" : ""
                }>Pricing</span>
            )}
          </NavLink>
          
          {user.isAuthenticated ? <>
            <NavLink to="/profile">
            {({ isActive }) => (
                <span href="/" className={
                  isActive ? "active" : ""
                }>Profile</span>
            )}
          </NavLink>
          <NavLink to="/dashboard">
            {({ isActive }) => (
                <span href="/" className={
                  isActive ? "active" : ""
                }>Dashboard</span>
            )}
          </NavLink>
                <li><a onClick={() => logout()} href="#" >Logout</a></li>
          </> : <>
          <NavLink to="/login">
            {({ isActive }) => (
                <span href="/" className={
                  isActive ? "active" : ""
                }>Login</span>
            )}
          </NavLink>
          <NavLink to="/register">
            {({ isActive }) => (
                <span href="/" className={
                  isActive ? "active" : ""
                }>Register</span>
            )}
          </NavLink></>}
        </ul>
      </nav>{/* .navbar */}
      <div className="header-social-links">
        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
      </div>
      <i onClick={() => setNav(nav => nav = !nav)} className="mobile-nav-toggle mobile-nav-show bi bi-list" />
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
    </div>
  </header>{/* End Header */}
  {/* ======= Hero Section ======= */}
  </>
  )
}

export default Navbar