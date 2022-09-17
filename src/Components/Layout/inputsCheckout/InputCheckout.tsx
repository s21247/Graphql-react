import React from "react";
import {useSelector} from "react-redux";
import {selectCheckoutOrder} from "../../Features/checkout/checkoutSlice";
import SelectCountry from "../inputsShipping/SelectCountry";

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
  };
  orderId: string;
  selectChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
    shipping: {value: string,town: "California",zip:"",country: "Usa"}

}
const InputCheckout = ({data, handleChange,orderId,selectChange,shipping }: props) => {
    const order = useSelector(selectCheckoutOrder)
    const findOrder = order.find(item => item.id === orderId)
  return (
    <div className="w-full flex flex-col items-center px-2 pt-6">
      <div className="w-full flex py-2">
        <label htmlFor="firstName">FirstName *</label>
        <label className={"mx-auto pl-5"} htmlFor="lastName">
          LastName *
        </label>
      </div>
      <div className="w-full flex ">
        <input
          className="border border-gray-300 w-1/2 mr-3 py-2"
          type={"text"}
          id={"firstName"}
          name={"firstName"}
          value={data.firstName}
          onChange={handleChange}
          required={true}
          pattern="([A-Z])[\w+.]{1,}"
        />
        <input
          className="border border-gray-300 w-1/2 ml-3"
          type={"text"}
          id={"lastName"}
          name={"lastName"}
          value={data.lastName}
          onChange={handleChange}
          required={true}
          pattern="([A-Z])[\w+.]{1,}"
        />
      </div>
      <label className="w-full mr-auto pb-2 pt-6" htmlFor="country">
        Country *
      </label>
      <SelectCountry selectChange={selectChange} country={findOrder ? findOrder.country! : data.country} shipping={shipping}/>
      <label className="w-full mr-auto pb-2 pt-6" htmlFor="streetAddress">
        Street address *
      </label>
      <input
        className="border border-gray-300 mr-3 w-full py-2"
        type={"text"}
        id={"streetAddress"}
        name={"streetAddress"}
        value={data.streetAddress}
        onChange={handleChange}
        required={true}
        pattern="[\w\d\s.#]{2,}"
      />
      <label className="w-full mr-auto pb-2 pt-6" htmlFor="town">
        Town *
      </label>
      <input
        className="border border-gray-300 mr-3 w-full py-2"
        type={"text"}
        id={"town"}
        name={"town"}
        value={findOrder ? findOrder.town : data.town}
        onChange={handleChange}
        required={true}
        pattern="([A-Z])[\w\s.]{1,}"

      />
      <label className="w-full mr-auto pb-2 pt-6" htmlFor="zip">
        ZIP Code *
      </label>
      <input
        className="border border-gray-300 mr-3 w-full py-2"
        type={"text"}
        id={"zip"}
        name={"zip"}
        value={findOrder ? findOrder.zip : data.zip}
        onChange={handleChange}
        pattern="[0-9]{5}|[0-9]{2}-[0-9]{3}"
        maxLength={5|6}
        required={true}

      />
      <label className="w-full mr-auto pb-2 pt-6" htmlFor="phone">
        Phone *
      </label>
      <input
        className="border border-gray-300 w-full mr-3 py-2"
        type={"text"}
        id={"phone"}
        name={"phone"}
        value={data.phone}
        onChange={handleChange}
        required={true}
        placeholder={"123-123-123"}
        pattern={"[0-9]{3}-[0-9]{3}-[0-9]{3}"}
      />
      <label className="w-full mr-auto pb-2 pt-6" htmlFor="email">
        Email *
      </label>
      <input
        className="border border-gray-300 w-full mr-3 py-2"
        type={"email"}
        id={"email"}
        name={"email"}
        value={data.email}
        onChange={handleChange}
        required={true}
      />
    </div>
  );
};

export default InputCheckout;
