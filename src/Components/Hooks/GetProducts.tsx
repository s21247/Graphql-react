import { useQuery, gql } from "@apollo/client";
import { Product, Products } from "../Models/Product";

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
const GetProducts = (): Product[] | undefined => {
  const { data } = useQuery<Products>(GET_PRODUCTS);
  return data?.products;
};

export default GetProducts;
