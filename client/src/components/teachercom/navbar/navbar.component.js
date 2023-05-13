import { Component } from "react";

class navbar extends Component {
 
  render() {

    return (
      <div>
        <div>
          <nav className="flex flex-col w-full px-6 py-4 bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
           
                <div className="mb-2 sm:mb-0">
                  <a href="/" className="text-xl no-underline duration-300 text-grey-darkest hover:text-blue-dark hover:font-bold">Home</a>
                </div>
                <div className='text-lg font-light hover:text-blue-dark'>
                 
                    <>
                      <div>
                       
                        
                        <a href="/myTeacher" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Student List</a>
                        
                      

                      </div>
                    </>
                

                </div>
                <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
                  
                </div>
             
          </nav>
        </div >
      </div >
    );
  }
}

export default navbar;