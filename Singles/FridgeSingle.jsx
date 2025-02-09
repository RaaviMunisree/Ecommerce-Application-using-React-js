import React from 'react'
import { useParams } from 'react-router-dom'
import { fridgeData } from '../data/fridge';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

const FridgeSingle = () => {
    const {id} =useParams();
    const {cartItem,addToCart}=useCart()
    console.log(cartItem)
 
    const product=fridgeData.find((item)=>item.id===id)
  return (
   <>
   <Navbar />
   <div className="ind-section">
        <div className="ind-image">
            <img src={product.image} alt="" />
        </div>
        <div className="ind-details space">
            <div className="ind-company">
            <h2>{product.brand}</h2>
            </div>
        <div className="ind-model space">
            <h2>{product.model}</h2>
        </div>
        <div className="ind-price space">
            <p>
                {product.price}
            </p>
        </div>
        <div className="ind-desc space">
            <p>
                {product.description}
            </p>
        </div>
        <button  className='addToCart' onClick={()=>addToCart(product)}>Add to cart</button>
        </div>
    </div>
   </>
  )
}

export default FridgeSingle
