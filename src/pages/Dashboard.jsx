import React from "react";
import { getCustomer } from "../utils/auth.js";
import { useRecoilState } from "recoil";
import { userAtom } from "../state/store";
import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import { useQuery } from "react-query";

const Dashboard = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useNavigate();

  if (!user.isAuthenticated) {
    navigate("/login");
  }

  const { data: subscription, isLoading:subLoad } = useQuery("subscription", getCustomer);
  return (
    <div className="mt-[-15.5px] flex gap-10 ">
      <Sidebar />
      <div className="container mx-auto mt-12 p-3">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Package
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {subscription?.product[0]?.name ? subscription?.product[0]?.name : "No subscription"}
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Usage
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              5 images
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Orders
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">20k</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
