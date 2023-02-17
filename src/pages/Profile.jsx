import React from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../state/store";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useNavigate();
  if (!user.isAuthenticated) {
    navigate("/");
  }
  return (
    <div className="hero flex justify-content-center">
      <h1 className="text-center">Profile</h1><br></br>
      <div className="container d-flex justify-content-center align-items-center ">
        <div className="">
          <div className="user text-center">
            <div className="profile">
              <img
                src={user.profilePic}
                className="rounded-circle"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="mt-5 text-center">
            <h4 className="mb-0">{user.firstName} {user.lastName}</h4>
            <span className="text-muted d-block mb-2">{user.email}</span>
            <button className="btn btn-primary btn-sm follow">Edit</button>
            <div className="d-flex justify-content-between align-items-center mt-4 px-4">
              <div className="stats">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
