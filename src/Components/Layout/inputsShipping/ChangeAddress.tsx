import React from "react";
import SelectCountry from "./SelectCountry";


type props = {
  open: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  shipping: { value: string; town: "California"; zip: ""; country: "Usa" };
  selectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  canSave: Boolean;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;

};
const ChangeAddress = ({
  open,
  handleChange,
  shipping,
  selectChange,
  canSave,
    onClick
}: props) => {

    if (!open) return null;
    return (
    <div className="flex flex-col w-full items-center mb-4">
      <SelectCountry selectChange={selectChange} shipping={shipping} />
      <input
        className="border border-gray-300 outline-0 w-full py-4 pl-3"
        placeholder={"Town / City"}
        type={"text"}
        id={"town"}
        name={"town"}
        onChange={handleChange}
        value={shipping.town}
        pattern="([A-Z])[\w+.]{1,}"
      />
      <input
        className="border border-gray-300 outline-0 w-full py-4 pl-3 mt-2"
        placeholder={"Zip code"}
        id={"zip"}
        name={"zip"}
        type={"text"}
        value={shipping.zip}
        onChange={handleChange}
        pattern="[0-9]{5}|[0-9]{2}-[0-9]{3}"
        maxLength={5|6}
      />
      <button
          form={"shipping"}
        disabled={!canSave}
        // onClick={() => onClick(val => !val)}
        className="py-4 w-full bg-black text-white mt-2 hover:bg-gray-800"
      >
        Save Changes
      </button>
    </div>
  );
};

export default ChangeAddress;
