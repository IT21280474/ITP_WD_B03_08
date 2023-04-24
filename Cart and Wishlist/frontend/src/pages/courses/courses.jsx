import { useEffect } from "react";
import { useCoursesContext } from "../../hooks/useCoursesContext";
import { useState } from "react";
import { Form } from "react-bootstrap";

//components
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
  });

  return (
    <>
      <Form.Control
        aria-label="Search"
        className="form-control-rounded form-control-prepended mb-5"
        placeholder="Search"
        type="search"
        onChange={(e) => setQuery(e.target.value)}
      />
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
