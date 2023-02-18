import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import "./index.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PHISABLE_KEY);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId="1027455706325-agos9khupo9abrvujtptnq9fvu3fe2qp.apps.googleusercontent.com">
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  </RecoilRoot>
);
