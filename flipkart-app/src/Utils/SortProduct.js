



export const SortProduct = (sortbyPrice,data) => {
     if(sortbyPrice === "low-to-high"){
        return [...data].sort((a,b) => a.price - b.price )
     }
     if(sortbyPrice === "high-to-low"){
        return [...data].sort((a,b) => b.price - a.price)
     }
     return data
}
