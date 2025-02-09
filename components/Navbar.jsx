import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const {cartItem}=useCart()
  return (
   <div className='navbar-section'>
    <div className="navSection">
    <Link to='/' className="custom-link">
  <div className="title">
    <h2>E-Mart</h2>
  </div>
  </Link>
       <div className="search">
        <input type="text" placeholder='search...'/>
       </div>
       <div className="user"><div className="user-details">
            SignIn|SignUp
        </div></div>
        <Link to="/cart">
        <div className="cart">
            Cart&nbsp;
            <span>{cartItem.length}</span>
        </div>
        </Link>
     
      
    </div>
    <div className="subMenu">
      <ul>
        <Link to="/mobile"><li>Mobiles</li></Link>
        <Link to="/computer"><li>Computers</li></Link>
        <Link to="/watch"><li>Watches</li></Link>
        <Link to="/fridge"><li>Fridge</li></Link>

        <Link to="/men"><li>Men Fashion</li></Link>
        <Link to="/woman"><li>Women Dressing</li></Link>
        <Link to="/furniture"><li>Furniture </li></Link>
        <Link to="/ac"><li>AC</li></Link>
        <Link to="/kitchen"><li>Kitchen</li></Link>
       
      </ul>
    <Outlet/>
    </div>
   </div>
  )
}

export default Navbar
