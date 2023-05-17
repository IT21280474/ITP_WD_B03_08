import axios from 'axios';
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";
import  { useState ,useEffect} from 'react'
import { BsArrowLeftShort,BsCashCoin,BsFillWalletFill,BsFillPersonLinesFill,BsFillPersonBadgeFill ,BsDiagram2,BsSearch} from "react-icons/bs";
import { AiOutlineLaptop, } from "react-icons/ai";
import { Link } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'



const Dashboard=()=>{
    const [open,setOpen] = useState(true);
    
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [APIData, setAPIData] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);


    useEffect(() => {

        
        axios.get(`api/students/`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])


    const getData = () => {
        axios.get(`api/students/`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    // email, firstName, lastName,NIC,userName,address,dob,mobile
   

   
    
    const exportFeedbacks = () => {
        console.log("Export PDF")


        const unit = "pt";
        const size = "A3";
        const orientation = "portrait";
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        const title = "Feedback List Report ";
        const headers = [["Course", "Student", "Ratings", "Feedback","Response"]];

        const fed = APIData.map(data => [
                
                data.course,
                data.student,
                data.rating,
                data.feedback,
                data.response
                
            ]
        
        );

        

        let content = {
            startY: 50,
            head: headers,
            body: fed
        };
        doc.setFontSize(20);
        doc.text(title, marginLeft, 40);
        require('jspdf-autotable');
        doc.autoTable(content);
        doc.save("Feedback-Report.pdf")
    }
    const exportTeachers = () => {
        console.log("Export PDF")


        const unit = "pt";
        const size = "A3";
        const orientation = "portrait";
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        
        const title = "Teacher List Report ";
        const headers = [["Email", "Teacher userName", "Department", "gender","password", ]];
        const fed = APIData.map(
            data => [
                data.email,
                data.Username,
                data.department,
                data.gender,
                data.password
                // {formatDistanceToNow(new Date(student.createdAt), { addSuffix: true })}
            ]
        );

        let content = {
            startY: 50,
            head: headers,
            body: fed
        };
        doc.setFontSize(20);
        doc.text(title, marginLeft, 40);
        require('jspdf-autotable');
        doc.autoTable(content);
        doc.save("Teachers-Report.pdf")
    }
    const exportStudents = () => {
        console.log("Export PDF")


        const unit = "pt";
        const size = "A3";
        const orientation = "portrait";
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        
        const title = "Student List Report ";
        const headers = [["Email", "Student FirstName", "Student LastName", "NIC","userName","address","dob","mobile" ,""]];
       
        const fed = APIData.map(
            data => [
                data.email,
                data.firstName,
                data.lastName,
                data.NIC,
                data.userName,
                data.address,
                data.dob,
                data.mobile,
                // {formatDistanceToNow(new Date(student.createdAt), { addSuffix: true })}
            ]
        );

        let content = {
            startY: 50,
            head: headers,
            body: fed
        };
        doc.setFontSize(20);
        doc.text(title, marginLeft, 40);
        require('jspdf-autotable');
        doc.autoTable(content);
        doc.save("Students-Report.pdf")
    }
    return(
        <div className='flex'>
            <div className={`bg-slide-color h-screen overflow-y-auto p-5 pt-8 ${open ? "w-72":"w-20" } duration-300 relative`}>

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

            
            <br/>  <br/> 
            <ul>
                <li>
                    
                            <Link className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md  ${!open && "hidden"} `} to = "/myStudent"><h3>Student</h3></Link>
                        
                </li> <br/> 
                <li>
                    
                            <Link className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md  ${!open && "hidden"} `} to = "/myTeacher"><h3>Teacher</h3></Link>
                        
                </li> <br/> 
                <li>
                    
                            <Link className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md  ${!open && "hidden"} `} to = "/courses"><h3>Courses</h3></Link>
                        
                </li> <br/> 
                <li >
                    
                            <Link className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${!open && "hidden"} `} to = "/transactions"><h3>Transactions</h3></Link>
                        
                </li> <br/> 
                <li >
                    
                            <Link className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${!open && "hidden"} `} to = "/adFeedback"><h3>Feedback</h3></Link>
                        
                </li>
                <br/><br/> 
                <li >
                    
                            <Link className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${!open && "hidden"} text-white text-lg block float-left cursor-pointer`} to = "/"><h3>Logout</h3></Link>
                        
                </li>
               
            </ul>
            
            

            
            
            </div>
            <div >
            <div>
            <div className="flex flex-col px-5 pt-2">
            
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="items-center overflow-hidden">
                <div className="grid grid-cols-1 gap-4 content-start">
                    <table className="">

                        <tr>
                            <th className="shadow-md">
                                <h1>Student List ----------- </h1>
                            </th>
                            <td className="flex justify-end gap-2">
                            <div class="w-500 h-500 bg-gray-200">
                                <div className="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => exportStudents()}>Generate Report Students</button>
                                </div></div>
                            </td>
                        </tr>
                        <tr>
                            <th className="shadow-md">
                                <h1>Teacher List ----------- </h1>
                            </th>
                            <td className="flex justify-end gap-2">
                                <div className="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => exportTeachers()}>Generate Report Teachers</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className="shadow-md">
                                <h1>Feedback List ---------</h1>
                            </th>
                            <td className="flex justify-end gap-2">
                                <div className="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => exportFeedbacks()}>Generate Report Feedbacks</button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

        
            </div>
        </div></div>

        
    )
};
export default Dashboard;