import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  errorAtom,
  messageAtom,
  subscriptionState,
  userAtom,
} from "../state/store";
import { API } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { getCustomer } from "../utils/auth.js";

const Pricing = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  async function handlePricing() {
    const res = await API.get("/orders/products");
    const data = res.data;
    return data;
  }

  const { data, isLoading } = useQuery("pricing", handlePricing);
  const { data: subscription, status } = useQuery("subscription", getCustomer);

  const handleSubmit = async (priceId) => {
    if (subscription.isSubscribed) {
      return false;
    }
    if (!user.isAuthenticated) {
      navigate("/login");
      return false;
    }
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_DOMAIN}/orders/create-order`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          name: user.firstName,
          email: user.email,
          productId: priceId,
        }),
      }
    );
    const data = await response.json();
    window.location.href = data.session.url;
  };

  return (
    <div>
      <div className="container mx-auto mt-[100px]">
      <h1 className="text-center text-2xl font-bold mb-10">Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-5 w-full">
          {isLoading && status == "loading" ? <p>Loading...</p> : <></>}
          {data?.map((product) => (
            <div key={product._id} className="w-full">
              <div className="card card2 w-full">
                <div className="card-body module w-full">
                  <h5 className="card-title">{product.name}</h5>
                  <small className="text-muted">Small Business</small>
                  <br />
                  <br />
                  <span className="h2">${product.amount}</span>/month
                  <br />
                  <br />
                  <div className="w-full mb-5">
                    {subscription?.product[0]?.id == product.id ? (
                      <span className="subscribed">Subscribed</span>
                    ) : (
                      <>
                        {subscription?.isSubscribed ? (
                          <>Disabled</>
                        ) : (
                          <button
                            onClick={() => handleSubmit(product.id)}
                            className="btn btn-outline-success btn-block"
                          >
                            Select
                          </button>
                        )}
                      </>
                    )}
                  </div>
                  <ul>
                    <p>{product.description}</p>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
