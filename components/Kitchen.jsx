import React from 'react'
import { kitchenData } from '../data/kitchen';
const Kitchen = () => {
    const fiveProducts=kitchenData.slice(0,5);
  return (
    <>
    <div className="protitle">
    <h3>Kitchen</h3>
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

export default Kitchen
