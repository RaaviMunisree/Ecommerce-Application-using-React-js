import React from 'react'
import { useCart } from './context/CartContext'
import Navbar from './components/Navbar'
const UserCart = () => {
   const {cartItem,addToCart,removeFromCart}=useCart()
   console.log(cartItem);
   console.log(addToCart)
  return (
    <>
    <Navbar />
    <div>
        <h2 className="y-cart">Your Cart</h2>
        {cartItem.length===0?
        (<p className="empty">Your cart is empty</p>):
        (<div>
            {cartItem.map((item)=>{
                return(
                    <div className="cart-section">
                        <div className="cart-img">
                            <img src={item.image} alt=""/>
                        </div>
                        <div className="cart-details">
                            <h3>{item.product}</h3>
                            <h2>{item.price}</h2>
                            <h3>{item.model}</h3>

                        </div>
                        <button className='removeBtn' onClick={()=>removeFromCart(item)}>removeFromCart</button>
                      
                    </div>
                )

        })}</div>)

        }

    </div>


    </>
  )
}

export default UserCart
