import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { watchData } from '../data/watch'

const WatchPage = () => {
const [selectedProduct,setSelectedProduct]=useState([]);
const companyHandler =(mango)=>{
   if(selectedProduct.includes(mango)){
    setSelectedProduct(selectedProduct.filter((item)=>item!==mango))
   }
   else{
    setSelectedProduct([...selectedProduct,mango])
   }
}
const filteredProduct=selectedProduct.length===0?
watchData:watchData.filter((orange)=>selectedProduct.includes(orange.brand))

return (
<>
<Navbar />
<div className="fullpage">
<div className="pro-selected">
    {
        watchData.map((item)=>{
            return(
                
                <div className="pro-input">
            <label>
               <input type="checkbox"
               checked={selectedProduct.includes(item.brand)}
               onChange={()=>companyHandler(item.brand)}
             />
               {item.brand}
               </label>
          
       </div>
                
            )
        })
    }
</div>
<div className='pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div >

            
                
                <Link to={`/watch/${item.id}`}>
                <div className="pageImg">
                    <img src={item.image} alt="" />
                    </div>
                    </Link>
                    

         
                <div className="proModel">
                    {item.brand}, {item.model}
                </div>
            </div>

        )
    })}

 </div>
</div>
</>
  )
}

export default WatchPage