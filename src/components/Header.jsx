import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi';
// import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
      <h2>Logo</h2>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingCart className='icon'/>
          <p>{0}</p>
        </Link>
      </div>
    </nav>
  )
}

export default Header