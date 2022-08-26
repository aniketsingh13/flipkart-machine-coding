import React from 'react'
import "./ProdCard.css"

const ProdCard = ({Product}) => {
    const {image,ideal,brand,size,price}= Product
  return (
    <div className='prodCard_container m-s'>
     <img className='ml-s' src={image} alt={brand} height={200}  width={240}/>
     <div className='ml-s mt-s font-l'>{brand}</div>
     <div className='ml-s mt-s font-l' style={{color: "red"}}> {ideal}</div>
     <div className='ml-s mt-s font-l' style={{color: "red"}}>{size}</div>
     <div className='ml-s mt-s font-l' > Rs : {price}</div>
    </div>
  )
}

export default ProdCard