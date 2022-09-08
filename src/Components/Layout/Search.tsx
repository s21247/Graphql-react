import React from "react";
import GetProducts from "../Hooks/GetProducts";
import { Product } from "../Models/Product.interface";

interface Props {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<Boolean>>;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setFilteredResults: React.Dispatch<React.SetStateAction<Product[]>>;
  setFilterSearchOpen: React.Dispatch<React.SetStateAction<Boolean>>
}

const Search = ({
  open,
  onClose,
  searchInput,
  setSearchInput,
  setFilteredResults,
    setFilterSearchOpen
}: Props) => {
  const getProducts = GetProducts();
  let content;
    if (!open) return null
    if(searchInput.length > 1){
        content = <p className="text-gray-500 pl-1">Press <span className="underline">Enter</span> to search</p>
    }

  const searchItems = () => {
      if (searchInput !== "") {
      const filteredData = getProducts?.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
          setFilteredResults(filteredData!);
      }
  };
    const onKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && e.currentTarget.value.length > 1) {
            e.preventDefault()
            searchItems()
            e.currentTarget.value = ''
            setFilterSearchOpen(curr => !curr)
            onClose((value) => !value)
        }
    }
  return (
    <div className="relative w-full my-2 text-xl">
      <input
        className="pl-1 w-full border-none outline-0"
        placeholder={"Search.."}
        type={"text"}
        onChange={(e) => setSearchInput(e.currentTarget.value)}
        onKeyDown={(e) => onKeyEnter(e)}
      />
      <button
        className="absolute font-bold right-7"
        onClick={() =>{
            onClose((value) => !value)}
        }
      >
        <span
          className="fill-current text-gray-500 hover:text-black"
          aria-hidden="true"
        >
          &#x2715;
        </span>
      </button>
        {
            content ? content : null
        }
    </div>
  );
};

export default Search;
