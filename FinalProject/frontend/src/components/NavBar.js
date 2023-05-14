import { Link } from "react-router-dom"
import React from "react"
import { BsFillGearFill } from "react-icons/bs";
const NavBar = ()=>{
    return (
            <header>
                <div className="container">
                <p><h3>ROVISTER <br/></h3></p>
                <a href="/"><h3>Home</h3></a>
				<a href="/"><h3>Student</h3></a>
				<a href="/"><h3>Teacher</h3></a>
                <a href="/"><h3>Courses</h3></a>
                
				<a href="/listFeedback"><h3>Feedback</h3></a>
                <a href="/"><h3>Notification</h3></a> 
                
                        <Link to="/dashboard"><BsFillGearFill/>Dashboard Page</Link>
                        

                       
                  
                </div>
            </header>
    )
}
export default NavBar