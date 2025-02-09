import React from 'react'
import { furnitureData } from '../data/furniture';
const Furniture = () => {
    const fiveProducts=furnitureData.slice(0,5);
  return (
    <>
    <div className="protitle">
    <h3>Furniture</h3>
    </div>
      <div className="proSection">
       {
        fiveProducts.map((item)=>{
          return(
          <div className="imgBox">
            <img className='proImage' src={item.image} alt=""/>
          </div>
          )
        })
       }
      </div>
    </>
  )
}

export default Furniture
