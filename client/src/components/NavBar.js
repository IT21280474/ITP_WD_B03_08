import { Link } from "react-router-dom"
import React from "react"
import { BsFillGearFill } from "react-icons/bs";
const NavBar = ()=>{
    return (
            <header>
                <div className="container">
                <p><h1>ROVISTER <br/></h1><h2>LERANING MANAGEMENT SYSTEM</h2></p>
                <a href="/"><h1>Home</h1></a>
				<a href="/"><h1>My work</h1></a>
				<a href="/"><h1>Blog</h1></a>
				<a href="/"><h1>About me</h1></a>
                <a href="/"><h1>Sign Up</h1></a>
                        <Link to="/dashboard"><BsFillGearFill/>Dashboard Page</Link>
                        

                       
                  
                </div>
            </header>
    )
}
export default NavBar