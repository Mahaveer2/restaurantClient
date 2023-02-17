import React, { useEffect } from 'react'
import { useSearchParams } from "react-router-dom";

const Checkout = () => {  
  const [user,setUser] = useRecoilState(userAtom);

  const handleSubmit = async (email) => {
    const session_id = searchParams.get("session_id");
    const product_id = searchParams.get("productId");
    const response = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/orders/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        session_id:session_id,
        email:email,
        productId:product_id
      })
    });
    const data = await response.json();
    console.log(data)
  };

  useEffect(() => {
    if(user){
      handleSubmit(user.email);
    }
  },[])
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <section className='hero mt-4 flex justify-content-center'>
      <h1>Horray you have subscribed to our website!</h1>
      <p>Created your subscriptions securely! </p>
    </section>
  )
}

export default Checkout