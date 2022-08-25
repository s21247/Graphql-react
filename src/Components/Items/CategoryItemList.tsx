import React from 'react';
import GetCategoriesWithProducts from "../Hooks/GetCategoriesWithProducts";
import {useParams} from "react-router-dom";
import StoreItem from "./StoreItem";
import {Product} from "../Models/Product.interface";

const CategoryItemList = () => {
    const data = GetCategoriesWithProducts();
    const {name} = useParams();
    const find = data?.categories.find(category => category.name === name)
    console.log(find?.products)

    return (
        <>
            {find?.products?.map((product : Product) => (
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

export default CategoryItemList;