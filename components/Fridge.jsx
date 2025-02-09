import React from 'react'
import { fridgeData } from '../data/fridge';
const Fridge = () => {
    const fiveProducts=fridgeData.slice(0,5);
  return (
    <>
    <div className="protitle">
    <h3>Fridge</h3>
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

export default Fridge
