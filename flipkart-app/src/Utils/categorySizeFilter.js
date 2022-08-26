




export const categorySizeFilter = (size,data) => {
  if(size.length){
  return   data.filter((item) => size.includes(item.size))
  }else{
    return data
  }
}
