import { gql, useQuery } from "@apollo/client";
import { CategoriesWithProducts } from "../Models/Category.interface";

const GET_CATEGORIES_AND_PRODUCTS = gql`
  query {
    categories {
      name
      products {
        description
        name
        price
        image
        id
      }
    }
  }
`;

const GetCategoriesWithProducts = (): CategoriesWithProducts | undefined => {
  const { data } = useQuery<CategoriesWithProducts>(GET_CATEGORIES_AND_PRODUCTS);
  return data;
};

export default GetCategoriesWithProducts;
