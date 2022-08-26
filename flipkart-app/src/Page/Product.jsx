import React from 'react'
import "./Product.css"
import Header from '../Component/Header/Header'
import Filter from '../Component/Filter/Filter';
import { ProductData } from '../data'
import { useFilter } from '../Context/FilterContext';
import { SortProduct } from '../Utils/SortProduct';
import { categoryBrandFilter } from '../Utils/categoryBrandFilter';
import { categoryIdealFilter } from '../Utils/categoryIdealFilter';
import { categorySizeFilter } from '../Utils/categorySizeFilter';
import ProdCard from '../Component/ProdCard/ProdCard';



const Product = () => {
  const {filterState} = useFilter();
   const {brand,ideal,size} = filterState;
 const filterBrand =  categoryBrandFilter(brand,ProductData);
 const filterIdeal =  categoryIdealFilter(ideal,filterBrand);
 const filterSize = categorySizeFilter(size,filterIdeal)
 const sortData =   SortProduct(filterState,filterSize)


  return (
    <div>
        <Header />
        <div  className='product_page'>
            <div className='aside_container'>
             <Filter />
            </div>
            <div className='center_container flex '>
          { sortData.length ?   sortData.map(product =>  (<ProdCard key={product._id} Product={product}  />))  : <div>data not found</div> }
            </div>
        </div>
    </div>
  )
}

export default Product