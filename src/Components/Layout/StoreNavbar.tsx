import React, { useState } from "react";
import { Category} from "../Models/Category.interface";
import Search from "./search/Search";
import {Product} from "../Models/Product.interface";
import FilterSearch from "./search/FilterSearch";

interface Props {
  categories: Category[];
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setFilteredResults: React.Dispatch<React.SetStateAction<Product[]>>


}
const StoreNavbar = ({ categories, searchInput,setFilteredResults,setSearchInput}: Props) => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [filterSearchOpen,setFilterSearchOpen] = useState<boolean>(false);

  const handleSearchFilterSearchClick = () => setFilterSearchOpen(value => !value);
  const handleSearchClick = () => setSearchOpen(value => !value);

  return (
    <>
      <nav id="store" className="w-full top-0 px-6 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-start mt-0 px-2 py-3">
          <a
            key={"all"}
            className="tracking-wide no-underline hover:no-underline text-xl text-gray-700 z-10 hover:text-yellow-500"
            href="/"
          >
            All
          </a>
          {categories.map((category) => (
            <a
              key={category.name}
              className="tracking-wide no-underline hover:no-underline mx-5 text-gray-800 text-xl z-1 hover:text-yellow-500"
              href={`/product-category/${category.name}`}
            >
              {category.name}
            </a>
          ))}

          <div className="flex items-center ml-auto" id="store-nav-content">
            <button
              onClick={() => handleSearchClick()}
              className="pl-3 inline-block no-underline tracking-wide no-underline hover:no-underline mx-5 text-gray-800 text-xl ml-5"
              key={"Search"}
            >
              <span className="hover:text-yellow-500">
                 Search
              </span>
              <svg
                className="fill-current hover:text-black inline-block ml-1 pb-1 rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
              </svg>
            </button>
          </div>
        </div>
        <Search
            open={searchOpen}
            onClose={handleSearchClick}
            setFilterSearchOpen={handleSearchFilterSearchClick}
            setSearchInput={setSearchInput}
            setFilteredResults={setFilteredResults}
            searchInput={searchInput}
        />
        <FilterSearch
          open={filterSearchOpen}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onClose={handleSearchFilterSearchClick}
          setFilteredResults={setFilteredResults}
        />
      </nav>
    </>
  );
};

export default StoreNavbar;
