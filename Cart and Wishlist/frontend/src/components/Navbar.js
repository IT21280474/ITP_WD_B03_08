import {Link} from 'react-router-dom'
import React from 'react'
import {ShoppingCart}  from "phosphor-react"


const Navbar = () => {
  return (
    <header>
        <div className="container">
        <h1>Online Learning Management System</h1>
            <Link to="/">
                Home
            </Link>
            <Link to="/courses">
                Courses
            </Link>
            <Link to="/wishlist">
                Wishlist
            </Link>
            <Link to="/cart">
                <ShoppingCart size={32}/>
            </Link>


        </div>
    </header>
  )
}

export default Navbar
