



export const SortProduct = (filterState,data) => {
     if(filterState.Sortby === "low-to-high"){
        return [...data].sort((a,b) => a.price - b.price )
     }
     if(filterState.Sortby === "high-to-low"){
        return [...data].sort((a,b) => b.price - a.price)
     }
     return data;
}
