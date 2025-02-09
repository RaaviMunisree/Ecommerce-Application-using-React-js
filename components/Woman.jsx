import React from 'react'
import { womanData } from '../data/woman';
const Woman = () => {
    const fiveProducts=womanData.slice(0,5);
  return (
    <>
    <div className="protitle">
    <h3>Woman</h3>
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

export default Woman
