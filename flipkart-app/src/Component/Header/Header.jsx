import React from 'react';
import { useFilter } from '../../Context/FilterContext';
import "./Header.css"

const Header = () => {
  const {filterState,filterDispatch} = useFilter()
  const {searchQuery} = filterState
  return (
    <div className='header_container flex' >
        <h2 className='headedrName_conatianer f-m'>Flipkart</h2> 
        <input type="text" className='headerInput mt-m mr-l f-m'value={searchQuery} onChange={(e) => filterDispatch({type: "SEARCH",payload: e.target.value})} placeholder='search...' />    
    </div>
  )
}

export default Header