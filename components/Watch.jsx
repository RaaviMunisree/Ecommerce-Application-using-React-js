import React from 'react'
import { watchData } from '../data/watch';
const Watch = () => {
    const fiveProducts=watchData.slice(0,5);
  return (
    <>
    <div className="protitle">
    <h3>Watches</h3>
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

export default Watch
