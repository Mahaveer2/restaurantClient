import React from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../state/store";
import { NavLink, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useNavigate();

  if (!user.isAuthenticated) {
    navigate("/login");
  }

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="profile">
          <img src={user.profilePic} alt="" />
          <div>
            <h3>
              {user.firstName} {user.lastName}
            </h3>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="links">
        <NavLink to="/profile">
            {({ isActive }) => (
                <span href="/" className={
                  isActive ? "active" : ""
                }>Profile</span>
            )}
          </NavLink>
          <NavLink to="/profile">
            {({ isActive }) => (
                <span href="/" className={
                  isActive ? "active" : ""
                }>Home</span>
            )}
          </NavLink>
          <NavLink to="/profile">
            {({ isActive }) => (
                <span href="/" className={
                  isActive ? "active" : ""
                }>Subscriptions</span>
            )}
          </NavLink>
        </div>
      </div>
      <main>
        <h2>FLEXBOX</h2>
      </main>
    </div>
  );
};

export default Dashboard;
