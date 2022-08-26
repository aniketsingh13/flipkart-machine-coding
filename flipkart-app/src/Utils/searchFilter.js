

export const searchFilter = (searchQuery,data) => {
  return data.filter(({brand}) => (
    searchQuery ? brand.toLowerCase().includes(searchQuery.toLowerCase().trim()) : true
  ) )
}
