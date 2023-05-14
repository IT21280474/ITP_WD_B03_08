import React from "react";
import { useState, useEffect } from "react";
// import table from react-bootstrap
import { Table, Button, Badge, Form } from "react-bootstrap";
import Swal from 'sweetalert2'

function Wishlist() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const handleDelete = (id) => {
    
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem("wishlistItems", JSON.stringify(updatedData));

    //check if item exist
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    const existingWishlistItem = wishlistItems.find((wishlistItem) =>     wishlistItem.id ===id);

    if(!existingWishlistItem){
      Swal.fire({
        title: 'Success',
        text: 'Records has been deleted',
        icon: 'success',
        showConfirmButton: false,
        timer:2000,
        timerProgressBar: true
      })
    }else{
      Swal.fire({
        title: 'Error',
        text: 'Something went wrong',
        icon: 'error',
        showConfirmButton: true
      })
    }

  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    setData(storedData);
  }, []);

  

  return (
    <>
      <Form.Control
        aria-label="Search"
        className="form-control-rounded form-control-prepended mb-5"
        placeholder="Search"
        type="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            
            <th>Title</th>
            <th>Duration</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) =>
              item.title?.toLowerCase().includes(query.toLowerCase())
            )
            .map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.duration}</td>
                <td>{item.price}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      
    </>
  );
}

export default Wishlist;