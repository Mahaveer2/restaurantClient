import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { errorAtom, messageAtom, subscriptionState, userAtom } from "../state/store";
import { API } from "../utils/api";
const Pricing = () => {
  const [user,setUser] = useRecoilState(userAtom);
  const [products,setProducts] = useState([]);

  useEffect(() => {
    API.get("/orders/products").then(products => setProducts(products.data))
  },[products]);

  const handleSubmit = async (priceId) => {
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

  const [subscription,setSubscription ] = useRecoilState(subscriptionState);

  return (
    <div>
      <div className="container-fluid hero">
        <div className="container p-5">
          <div className="row" >
            {products.map(product => (
              <div key={product._id} className="col-lg-4 col-md-12 mb-4">
              <div className="card card2 h-100">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <small className="text-muted">Small Business</small>
                  <br />
                  <br />
                  <span className="h2">${product.amount}</span>/month
                  <br />
                  <br />
                  <div className="d-grid my-3">
                    {subscription?.package?.id == product.id  ?  "Subscribed" : <>
                    {subscription.subscribed ? <>Disabled</> : <button 
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
