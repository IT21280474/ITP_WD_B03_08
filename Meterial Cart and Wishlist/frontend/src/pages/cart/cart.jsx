import React, { useState, useEffect } from "react";
import { Table, Button, Badge, Form } from "react-bootstrap";
import jsPDF from "jspdf";
import 'jspdf-autotable';


function Cart() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem("cartItems", JSON.stringify(updatedData));
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cartItems")) || [];
    setData(storedData);
  }, []);

  const getTotal = () => {
    return data.reduce((total, item) => total + item.price, 0);
    
  };

  //Generate Report
  const generatePDF = () => {
    const doc = new jsPDF();
    const companyName = 'INSTITUTE OF ROVISTA';
    const today = new Date();
    const date = today.toLocaleDateString();
    const time = today.toLocaleTimeString();

    doc.text(`${companyName}\nGenerated on: ${date} at ${time}`, 14, 20);

    const tableData = data.map((item, index) => [
      index + 1,
      item.title,
      item.duration,
      item.level,
      item.price
      
    ]);

    doc.autoTable({
      startY: 40,
      head: [['No', 'Title', 'Duration', 'Level', 'Price']],
      body: tableData
    });

    doc.save('report.pdf');
  };

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
            {/* <th>ID</th> */}
            <th>Title</th>
            <th>Duration (months)</th>
            <th>Level</th>
            <th>Price ($)</th>
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
                <td>
                  <Badge bg="secondary">{item.level}</Badge>
                </td>
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
      <h2>Total: $ {getTotal().toFixed(2)}</h2>
      <br />
      <button className="checkout-button">CHECKOUT</button>
      <button className="btn btn-primary" onClick={() => generatePDF()}>
        Generate Report
      </button>
    </>
  );
}

export default Cart;
