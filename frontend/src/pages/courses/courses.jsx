import React, { useEffect } from "react";
import { useCoursesContext } from "../../hooks/useCoursesContext";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import jsPDF from "jspdf";

// Components
import CourseDetails from "../../components/CourseDetailsUser";

export const Courses = () => {
  const { courses, dispatch } = useCoursesContext();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_COURSES", payload: json });
      }
    };
    fetchCourses();
  }, [dispatch]);

  const generateReport = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();
  
    // Add the company name
    const companyName = "INSTITUTE OF ROVISTA";
    doc.setFontSize(18);
    doc.text(companyName, 10, 10);
  
    // Add the current date and time
    const today = new Date();
    const date = today.toLocaleDateString();
    const time = today.toLocaleTimeString();
  
    doc.setFontSize(12);
    doc.text(`Report generated on: ${date} at ${time}`, 10, 20);
  
    // Generate the table data
    const tableData = courses
      .filter((course) =>
        course.title?.toLowerCase().includes(query.toLowerCase())
      )
      .map((course, index) => [
        index + 1,
        course.title,
        course.duration,
        course.level,
        course.price
      ]);
  
    // Add the table to the PDF
    doc.autoTable({
      head: [["No", "Title", "Duration", "Level", "Price"]],
      body: tableData,
      startY: 30
    });
  
    // Save the PDF
    doc.save("report.pdf");
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
      <Button onClick={generateReport}>Generate Report</Button>
      <div className="home">
        <div className="courses">
          {courses &&
            courses
              .filter((course) =>
                course.title?.toLowerCase().includes(query.toLowerCase())
              )
              .map((course) => (
                <CourseDetails key={course._id} course={course} />
              ))}
        </div>
      </div>
    </>
  );
};
