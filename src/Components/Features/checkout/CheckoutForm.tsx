import React  from "react";
import InputCheckout from "../../Layout/inputsCheckout/InputCheckout";
import CheckoutDetails from "./CheckoutDetails";
import shipping from "../../Layout/Shipping";

interface props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  data: {
    firstName: string;
    lastName: string;
    streetAddress: string;
    country: string;
    town: string;
    zip: string;
    phone: string;
    email: string;
    orderNotes: string
  };
  handleSubmit: React.FormEventHandler<HTMLFormElement>
  orderId: string;
  selectChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  shipping: {value: string,town: "California",zip:"",country: "Usa"}
}

const CheckoutForm = ({handleChange,data, handleSubmit,orderId, selectChange,shipping}: props) => {
  return (
    <>
      <form id={"form"} className="relative w-full" onSubmit={handleSubmit}>
        <div className="w-full flex flex-col items-center px-2 pt-6">
          <InputCheckout data={data} handleChange={handleChange} orderId={orderId} selectChange={selectChange} shipping={shipping}/>
        </div>
        <CheckoutDetails data={data} handleChange={handleChange}/>
      </form>
    </>
  );
};

export default CheckoutForm;
