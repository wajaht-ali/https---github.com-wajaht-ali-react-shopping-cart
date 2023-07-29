import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart} from 'react-icons/fi';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom'
const Header = () => {
  const {cartItems} = useSelector((state) => state.cart);
  return (
    <nav>
      <h2>Logo</h2>
      <div>
        <Link className='home2' to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingCart className='icon'/>
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  )
}

export default Header