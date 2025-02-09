import React from 'react'
import { acData } from '../data/ac';
const AC = () => {
    const fiveProducts=acData.slice(0,5);
  return (
    <>
    <div className="protitle">
    <h3>AC</h3>
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

export default AC
