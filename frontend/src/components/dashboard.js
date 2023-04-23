
    import  { useState } from 'react'
    import { BsArrowLeftShort ,BsSearch} from "react-icons/bs";
    import { AiOutlineLaptop, } from "react-icons/ai";
    import { Link ,Outlet} from 'react-router-dom';
    



    const Dashboard=()=>{
        const [open,setOpen] = useState(true);
        
        

        return(
            
                <div className={`bg-slide-color h-screen p-5 pt-8 ${open ? "w-72":"w-20" } duration-300 relative`}>

                <BsArrowLeftShort 
                    className={`bg-white text-slide-color text-3xl rounded-full absolute -right-3 top-9 border border-slide-color cursor-pointer 
                    ${!open && "rotate-180"}`} 
                    onClick={()=>setOpen(!open)} />  

                <AiOutlineLaptop 
                    className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 
                    ${open && "rotate-[360deg]"} `}/>

                <h1 
                    className={`text-white origin-left font-medium text-2xl duration-300 
                    ${!open && "scale-0"}`}>ROVISTER Dashboard</h1>

                <div 
                    className={`flex items-center rounded-md bg-light-white 
                    ${!open ? "px-2.5":"px-4"} mt-6 px-2 py-2`}>
                    
                    <BsSearch  
                        className={`text-white text-lg block float-left cursor-pointer 
                        ${open && "mr-2"}`}/>
                        
                        <input 
                        type={"search"} 
                        placeholder='Search' 
                        className={`text-base bg-transparent w-full text-white focus:outline-none 
                        ${!open && "hidden"}`}/>

                </div><br/>

                <div className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md  ${!open && "hidden"} `}>
                    <Link to = "/student"><button>Student</button></Link>
                </div>
                

                
                
                </div>
                

            
        )
    };
    export default Dashboard;