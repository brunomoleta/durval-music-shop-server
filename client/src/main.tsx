import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import {
  UserProvider,
  ProductProvider,
  CartProvider,
  AddressProvider,
  PaymentProvider,
  AnuncioProvider,
} from "./providers/UserContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AnuncioProvider>
          <AddressProvider>
            <PaymentProvider>
              <ProductProvider>
                <CartProvider>
                  <App />
                </CartProvider>
              </ProductProvider>
            </PaymentProvider>
          </AddressProvider>
        </AnuncioProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
