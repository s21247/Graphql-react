import { gql, useQuery } from "@apollo/client";
import { Category, Categories } from "../Models/Category.interface";

const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;
const GetCategories = (): Category[] | undefined => {
  const { data } = useQuery<Categories>(GET_CATEGORIES);
  return data?.categories;
};

export default GetCategories;
