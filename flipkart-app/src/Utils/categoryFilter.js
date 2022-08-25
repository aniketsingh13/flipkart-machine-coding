

export const categoryFilter = (filterState,data) => {
   let newFilter = []
   if(filterState.men === true){
    newFilter=[
        ...newFilter,...data.filter((item) => item.ideal === 'men')
    ]
   };
   if(filterState.women === true){
    newFilter=[
        ...newFilter,...data.filter((item) => item.ideal === 'women')
    ]
   };
   if(filterState.small === true){
    newFilter=[
        ...newFilter,...data.filter((item) => item.size === 'women')
    ]
   };
   if(filterState.medium === true){
    newFilter=[
        ...newFilter,...data.filter((item) => item.size === 'medium')
    ]
   };
   if(filterState.large === true){
    newFilter=[
        ...newFilter,...data.filter((item) => item.size === 'large')
    ]
   };
   if(filterState.Xlarge=== true){
    newFilter=[
        ...newFilter,...data.filter((item) => item.size === 'Xlarge')
    ]
   };
   if(filterState.Puma=== true){
    newFilter=[
        ...newFilter,...data.filter((item) => item.brand=== 'Puma')
    ]
   };
   if(filterState.Addidas === true){
    newFilter=[
        ...newFilter,...data.filter((item) => item.brand=== 'Addidas')
    ]
   };
   if(filterState.HRX === true){
    newFilter=[
        ...newFilter,...data.filter((item) => item.brand=== 'HRX')
    ]
   };
   if(newFilter.length === 0){
    return data;
   }
   return newFilter;
}