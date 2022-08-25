import React, { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "./FilterReducer";


const FilterContext = createContext();

const FilterContextProvider = ({children}) => {
    const [filterState,filterDispatch] = useReducer(FilterReducer,{
        Sortby: "",
        men: false,
        women: false,
        Puma: false,
        Addidas: false,
        HRX : false,
        Xlarge: false,
        large : false,
        medium: false,
        small : false
    })
    return (
        <FilterContext.Provider value={{filterState,filterDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter= () => useContext(FilterContext)

export {useFilter,FilterContextProvider}