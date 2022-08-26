import React, { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "./FilterReducer";


const FilterContext = createContext();

const FilterContextProvider = ({children}) => {
    const [filterState,filterDispatch] = useReducer(FilterReducer,{
        Sortby: "",
        brand: [],
        ideal: [],
        size: [],
        searchQuery: ""
    })
    return (
        <FilterContext.Provider value={{filterState,filterDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter= () => useContext(FilterContext)

export {useFilter,FilterContextProvider}