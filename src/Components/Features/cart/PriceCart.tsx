import React from "react";
import { useSelector } from "react-redux";
import { selectShopCart } from "./cartSlice";
import { useNavigate } from "react-router-dom";
import { cartPage, checkoutPage } from "../../Routing/Routing";
import { CartPanelInterface } from "./CartPanel";
import { countTotalPrice } from "../../Helpers/cartHelpers";
const PriceCart = ({ onClose }: CartPanelInterface) => {
  const shopPrice = useSelector(selectShopCart);
  const totalPrice = countTotalPrice(shopPrice);
  const navigate = useNavigate();

  const routeChange = (path: string) => {
    navigate(path);
  };

  return (
    <div className="absolute bottom-0 flex flex-col w-full text-white md:h-80 z-200 bg-panelBackground">
      <div className="border-y-2 border-gray-300 mx-3 md:mx-8 md:h-24 md:h-1/3">
        <div className="flex flex-row py-3 md:py-10 ">
          <p>Subtotal</p>
          <p className="ml-auto order-2 mr-8">${totalPrice}.00</p>
        </div>
      </div>
      <div className="flex flex-col w-full h-2/3 items-center pt-3 md:pt-7 my-auto ">
        <button
          className="w-4/5 hover:bg-buttonHover py-2 md:py-5 mb-2 md:mb-6 mx-auto bg-panelBackground border border-gray-300 text-white"
          onClick={() => {
            routeChange(cartPage);
            onClose((value) => !value);
          }}
        >
          View Cart
        </button>
        <button
          className="w-4/5 hover:bg-buttonHover py-2 md:py-5 mb-3 md:mb-6 mx-auto bg-panelButton text-white"
          onClick={() => {
            onClose((value) => !value);
            routeChange(checkoutPage);
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default PriceCart;
