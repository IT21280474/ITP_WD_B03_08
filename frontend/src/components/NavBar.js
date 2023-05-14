import {Link} from 'react-router-dom'
import React from 'react'
import Search from '../Search'

const Navbar = () => {
  return (
    <header>
        <div className="container">
            <Link to="/">
                <h1>Notifications</h1>
            </Link>
            <Search />
        </div>
    </header>
  )
}

export default Navbar