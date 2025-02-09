import React from 'react'
import { tvData } from '../data/tv';
const TV = () => {
    const fiveProducts=tvData.slice(0,5);
  return (
    <>
    <div className="protitle">
    <h3>Telivision</h3>
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

export default TV
