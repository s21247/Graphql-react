import React from "react";
import RadioInput from "./inputsShipping/RadioInput";
import ChangeAddress from "./inputsShipping/ChangeAddress";
import {useSelector} from "react-redux";
import {selectCheckoutOrder} from "../Features/checkout/checkoutSlice";


interface props {
  open: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  shipping: { value: string; town: "California"; zip: ""; country: "Usa" };
  selectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  canSave: Boolean;
  standard: string;
  express: string;
  totalPrice: number;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  display: boolean;
  orderId:string | undefined
}
const Subtotal = ({
  open,
  handleChange,
  shipping,
  selectChange,
  canSave,
  standard,
  express,
  totalPrice,
  onClick,
  display,
    orderId
}: props) => {
    const order = useSelector(selectCheckoutOrder)
    const findOrder = order.find(item => item.id === orderId)

  const content = (
    <>
      <p className="pt-5">
        Shipping to <span className="font-bold">{shipping.town}</span>
      </p>
      <button
        type={"button"}
        className="flex flex-row w-full py-5"
        onClick={() => onClick((val) => !val)}
      >
        <svg className="svg-icon" viewBox="0 0 20 20" width="20" height="20">
          <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589" />
        </svg>
        <p className="pl-2">Change address</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-chevron-down my-auto pl-2"
          viewBox="0 0 16 16"
        >
          <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
      <ChangeAddress
        open={open}
        handleChange={handleChange}
        shipping={shipping}
        selectChange={selectChange}
        canSave={canSave}
        onClick={onClick}
      />
    </>
  );
  return (
    <>
      <div className={`flex flex-row w-full py-5`}>
        <h1 className="ml-5">Subtotal</h1>
        <p className="ml-auto mr-5">${totalPrice}.00</p>
      </div>
      <div
        className={`border-t-2 border-gray-300 items-center w-full flex-col px-5  ${
          display ? "pt-5" : "py-5"
        } `}
      >
        <p>Shipping</p>

        <RadioInput
          handleChange={handleChange}
          name={"value"}
          value={standard}
          id={"Standard"}
          checkVal={findOrder ? findOrder.value : shipping.value}
          inputName={"standard"}
        />
        <RadioInput
          name={"value"}
          handleChange={handleChange}
          id={"Express"}
          checkVal={findOrder ? findOrder.value : shipping.value}
          value={express}
          inputName={"express"}
        />
        {display ? content : null}
      </div>
    </>
  );
};

export default Subtotal;
