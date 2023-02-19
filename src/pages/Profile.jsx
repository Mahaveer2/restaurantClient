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
    <div className="flex flex-col mt-[100px] justify-center items-center">
      <h1 className="text-center text-2xl font-bold">Profile</h1><br></br>
      <div className="flex justify-center items-center">
      <div className="flex justify-center flex-col items-center">
            <div className="profile">
              <img
                src={user.profilePic}
                className="rounded-full w-[100px] h-[100px]"
              />
            </div>
          <div className="mt-5 text-center flex flex-col">
            <h4 className="mb-0">{user.firstName} {user.lastName}</h4>
            <span className="text-muted d-block mb-2">{user.email}</span>
            <button className="btn btn-primary btn-sm follow">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
