import React from 'react';
import {Product} from "../Models/Product.interface";

interface Props {
    searchInput: string;
    open: boolean
    onClose: React.Dispatch<React.SetStateAction<Boolean>>;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
    setFilteredResults: React.Dispatch<React.SetStateAction<Product[]>>
}

const FilterSearch = ({open,searchInput, onClose, setSearchInput,setFilteredResults}: Props) => {
    if(!open) return null

    const handleSearchInput = () => {
        setSearchInput('');
        setFilteredResults([])
    }
    return (
        <div className="relative flex cursor-pointer group py-2 py-2 my-2 text-xl w-fit rounded-full border border-gray-500 hover:border-black"
        onClick={() => {
            onClose((value) => !value)
            handleSearchInput()
        }}>
            <div className="ml-2 font-bold">
                <span className="fill-current text-gray-500 group-hover:text-black" aria-hidden="true">&#x2715;</span>
            </div>
            <div className="px-3">
            <h1 className="group-hover:line-through ">Search results for "{searchInput}"</h1>
            </div>
        </div>
    );
};

export default FilterSearch;