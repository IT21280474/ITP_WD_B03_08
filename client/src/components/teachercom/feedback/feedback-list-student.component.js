// import React from 'react';
import { Table, Button, Input } from 'semantic-ui-react'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";


export default function FeedbackListStudent() {
    
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [APIData, setAPIData] = useState([]);
    const [students, setFeedbacks] = useState([]);

    // const userID = "Tom"


    useEffect(() => {

        
        axios.get(`api/teachers/`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])


    const getData = () => {
        axios.get(`api/teachers/`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`api/teachers/${id}`).then(response => {
            console.log(response.status)
            // this.refreshTable();

            if (response.status == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Successful',
                    text: "Teacher has been deleted!!",
                    background: '#fff',
                    confirmButtonColor: '#0a5bf2',
                    iconColor: '#60e004'
                })

                getData();
            }

            else {
                Swal.fire({
                    icon: 'Unsuccess',
                    title: 'Unsuccessfull',
                    text: "Employee has not been deleted!!",
                    background: '#fff',
                    confirmButtonColor: '#eb220c',
                    iconColor: '#60e004'
                })
            }


        })
    }

    const setData = (data) => {

        let { _id, email, Username, department,gender,password } = data;

        localStorage.setItem('ID', _id);
        localStorage.setItem('email', email);
        localStorage.setItem('Username', Username);
        localStorage.setItem('department', department);
        localStorage.setItem('gender', gender);
        localStorage.setItem('password', password);
       

        console.log("List data is" + localStorage.setItem('Student', students));
        // console.log("List data is" + localStorage.setItem('Feedbak', feedback));
    }


    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((data) => {
                return Object.values(data).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(APIData)
        }
    }

    const exportStudents = () => {
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

    return (
        <div><h1 className='text-5xl  text-indigo-900 mr-10 py-3'>Teacher Dashboard</h1>
            <div className="flex flex-col px-5 pt-2">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div class="grid grid-cols-1 gap-4 content-start">
                                <table className=''>

                                    <tr>
                                        <th className='drop-shadow-md'><h1>Teachers List</h1></th>
                                        <td className='flex justify-end gap-2'>
                                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                    <Link className='font-semibold text-white no-underline' to={"/addTeacher"}>
                                                        Add Teachers
                                                    </Link></button>
                                                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => exportStudents()}>Generate Report</button>
                                            </div>
                                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end">
                                                <input
                                                    className="form-control rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                                    type="text"
                                                    required
                                                    

                                                    icon='search'
                                                    placeholder='Filter By Teachers'
                                                    onChange={(e) => searchItems(e.target.value)}
                                                />


                                            </div>

                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div className='relative grid content-start grid-cols-1 gap-4 overflow-x-auto shadow-md sm:rounded-lg'>
                                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>




                                    <thead className='p-5 text-xs text-gray-700 uppercase border bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                        <tr>
 {/* email, firstName, lastName,NIC,userName,address,dob mobile                              */}
            <th className="p-2 border-black tbhead ">Email</th>

                                            <th className="p-2 tbhead">Username</th>
                                            <th className="p-2 tbhead">password</th>
                                            <th className="p-2 tbhead">department</th>
                                           
                                            <th className="p-2 tbhead">gender</th>
                                            
                                            
                                            <th className="p-2 text-center tbhead">Update</th>
                                            <th className="p-2 text-center tbhead">Delete</th>
                                        </tr>
                                    </thead>


                                    <tbody>
                                        
                                           { APIData.map((data) => {
                                                           {/* // Username, email, password, department,gender */}

                                                return (
                                                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                                        <td className='px-6 py-4'>{data.email}</td>
                                                        <td className='px-6 py-4'>{data.Username}</td>
                                                        <td className='px-6 py-4'>{data.password}</td>
                                                        <td className='px-6 py-4'>{data.department}</td>
                                                        <td className='px-6 py-4'>{data.gender}</td>
                                                        
                                                        <td className='px-6 py-4'>
                                                            <div class="flex justify-center">
                                                                <div class="">

                                                                    <Link to='/updateTeacher'><button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => setData(data)}>
                                                                        <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                                                                            <div class="">
                                                                                <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                                                </svg>
                                                                            </div>
                                                                            <div class="">
                                                                                Update
                                                                            </div>
                                                                        </div>
                                                                    </button></Link>
                                                                </div></div></td>



                                                        <td className='px-6 py-4'>
                                                            <div class="flex justify-center">
                                                                <div class="">

                                                                    <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-red-500 rounded-md hover:bg-red-200' onClick={() => onDelete(data._id)}>
                                                                        <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                                                                            <div class="">
                                                                                <svg class="h-5 w-5 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                                </svg>
                                                                            </div>
                                                                            <div class="">
                                                                                Delete
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                </div></div></td>


                                                    </tr>
                                                )
                                                
                                            }
                                        )}
                                    </tbody>


                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}