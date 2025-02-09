import React from 'react'
import { mobileData } from '../data/mobiles'
const Mobiles = () => {
    const fiveProducts=mobileData.slice(0,5);
  return (
    <>
    <div className="protitle">
    <h2>Mobiles</h2>
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

export default Mobiles
