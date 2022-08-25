import React from 'react'
import "./Product.css"
import Header from '../Component/Header/Header'
import Filter from '../Component/Filter/Filter';
import { ProductData } from '../data'
import { useFilter } from '../Context/FilterContext';
import { categoryFilter } from '../Utils/categoryFilter';
import { SortProduct } from '../Utils/SortProduct';

const Product = () => {
  const {filterState} = useFilter();

 const filterProduct = categoryFilter(filterState,ProductData);
 const sortData =   SortProduct(filterState,filterProduct)


  return (
    <div>
        <Header />
        <div  className='product_page'>
            <div className='aside_container'>
             <Filter />
            </div>
            <div className='center_container'>
                {ProductData.map((item) => (
                  <div key={item.id}>
                    <img src={item.image} alt={item.brand} width={200} height={200} />
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Product