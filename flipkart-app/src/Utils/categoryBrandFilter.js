

export const categoryBrandFilter = (brand,data) => {
     if(brand.length){
        return data.filter((item) => brand.includes(item.brand))
     }else{
        return data
     }
    
}