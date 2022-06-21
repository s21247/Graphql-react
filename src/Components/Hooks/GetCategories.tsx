import React from 'react';
import {gql, useQuery} from "@apollo/client";
import {Categories, CategoriesData} from "../models/Categories";



const GET_CATEGORIES = gql`
    query {
        categories {
            name
        }
    }
`;
const GetCategories = ():Categories[] | undefined => {
    const {data} = useQuery<CategoriesData>(GET_CATEGORIES)
    return data?.categories
};

export default GetCategories;