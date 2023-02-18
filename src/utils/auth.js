import { API } from "./api";

export async function getCustomer(){
  let url = `${import.meta.env.VITE_SERVER_DOMAIN}/orders/get-subscriptions`;
  const user = JSON.parse(localStorage.getItem('user'));
  const response = await API.post(url,{email:user.email});
  const data = response.data;
  return data;
};