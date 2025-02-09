import React from 'react'
import { booksData } from '../data/books';
const Books = () => {
    const fiveProducts=booksData.slice(0,5);
  return (
    <>
    <div className="protitle">
    <h3>Books</h3>
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

export default Books
