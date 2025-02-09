import React from 'react'
import { computerData } from '../data/computers';
const Computers = () => {
    const fiveProducts=computerData.slice(0,5);
  return (
    <>
    <div className="protitle">
    <h3>Computers</h3>
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

export default Computers
