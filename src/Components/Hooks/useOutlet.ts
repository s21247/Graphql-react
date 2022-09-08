import {useOutletContext} from "react-router-dom";
import {Product} from "../Models/Product.interface";

export type ContextType = {
    filteredResults: Product[] | [];
}
export function useOutlet(){
    return useOutletContext<ContextType>()
}