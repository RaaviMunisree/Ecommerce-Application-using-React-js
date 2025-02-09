import React from 'react'
import { menData } from '../data/men';
const Men = () => {
    const fiveProducts=menData.slice(0,5);
  return (
    <>
    <div className="protitle">
    <h3>Men</h3>
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

export default Men
