import React, { useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { errorAtom, messageAtom, userAtom } from "../state/store";

const Checkout = () => {  
  const [user,setUser] = useRecoilState(userAtom);

  const handleSubmit = async () => {
    const session_id = searchParams.get("session_id");
    const product_id = searchParams.get("productId");
    const response = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/orders/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        session_id:session_id,
        email:user.email,
        productId:product_id
      })
    });
    const data = await response.json();
    console.log(data)
  };

  useEffect(() => {
    handleSubmit();
  },[])

  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <section className='hero mt-4 flex justify-content-center'>
      <h1>Horray you haveasdas subscribed to our website!</h1>
      <p>Created your subscriptions securely! </p>
    </section>
  )
}

export default Checkout