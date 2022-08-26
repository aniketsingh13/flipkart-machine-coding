

export const categoryIdealFilter = (ideal,data) => {
 if(ideal.length){
    return data.filter((item) => ideal.includes(item.ideal))
 }else{
    return data
 }
}

