import React from "react";
import { useQuery, gql } from "@apollo/client";
import {Products, ProductsData} from "../models/Products";



const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      description
      price
      image
    }
  }
`;
const GetProducts = ():Products[] | undefined => {
  const { data } = useQuery<ProductsData>(GET_PRODUCTS);
  return data?.products

};

export default GetProducts;
