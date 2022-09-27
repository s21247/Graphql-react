import React from "react";
import { Products } from "../Models/Product.interface";
import StoreItem from "./StoreItem";
import {useOutlet} from "../Hooks/useOutlet";


const StoreItemList = ({ products }: Products) => {

  const {filteredResults} = useOutlet()
  let content = filteredResults.map((product) => (
            <div
                className="w-1/3 md:w-1/3 xl:w-1/4 p-6 flex flex-col"
                key={product.id}
            >
                <StoreItem
                    id={product.id}
                    description={product.description}
                    price={product.price}
                    name={product.name}
                    image={product.image}
                />
            </div>
        ))

  return (
    <>
      {
        filteredResults.length >= 1 ? content :
        products.map((product) => (
        <div
          className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
          key={product.id}
        >
          <StoreItem
            id={product.id}
            description={product.description}
            price={product.price}
            name={product.name}
            image={product.image}
          />
        </div>
      ))}
    </>
  );
};

export default StoreItemList;
