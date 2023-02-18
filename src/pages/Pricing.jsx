import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { errorAtom, messageAtom, subscriptionState, userAtom } from "../state/store";
import { API } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from 'react-query';
import { getCustomer } from "../utils/auth.js";

const Pricing = () => {

  const navigate =useNavigate();
  const [loading,setLoading] = useState(false);
  const queryClient = useQueryClient();
  
  async function handlePricing(){
    const res = await API.get("/orders/products");
    const data = res.data;
    return data;
  }

  const {data ,isLoading } = useQuery("pricing",handlePricing)
  const {data:subscription,status} = useQuery('subscription',getCustomer);

  const handleSubmit = async (priceId) => {
    if(subscription.isSubscribed){
      return false;
    }
    if(!user.isAuthenticated){
      navigate("/login");
      return false;
    }
    const response = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/orders/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({  priceId ,name:user.firstName,email:user.email,productId:priceId})
    });
    const data = await response.json();
    window.location.href = data.session.url;
  };


  return (
    <div>
      <div className="container-fluid hero">
        <div className="container p-5">
          <div className="row" >
            {isLoading && status == "loading" ? <p>Loading...</p> : <></>}
            {data?.map(product => (
              <div key={product._id} className="col-lg-4 col-md-12 mb-4">
              <div className="card card2 h-100">
                <div className="card-body module">                  
                  <h5 className="card-title">{product.name}</h5>
                  <small className="text-muted">Small Business</small>
                  <br />
                  <br />
                  <span className="h2">${product.amount}</span>/month
                  <br />
                  <br />
                  <div className="d-grid my-3">
                    {subscription?.product[0]?.id == product.id  ?  <span className="subscribed">Subscribed</span> : <>
                    {subscription?.isSubscribed ? <>Disabled</> : <button 
                     onClick={() => handleSubmit(product.id)}
                     className="btn btn-outline-success btn-block">
                      Select
                    </button>}
                    </>} 
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
    </div>
  );
};

export default Pricing;
