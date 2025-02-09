import React from 'react'
import { speakerData } from '../data/speaker';
const Speakers = () => {
    const fiveProducts=speakerData.slice(0,5);
  return (
    <>
    <div className="protitle">
    <h3>Speakers</h3>
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

export default Speakers
