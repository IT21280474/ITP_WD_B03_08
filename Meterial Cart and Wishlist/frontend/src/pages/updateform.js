import { useState, useEffect } from "react";

import { useCoursesContext } from "../hooks/useCoursesContext";
import { useParams } from "react-router-dom";

const UpdateForm = () => {
  const { dispatch } = useCoursesContext();
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [day, setDay] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { id } = useParams();

  const handleSubmit = async () => {
    try {
      await fetch(`/api/courses/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          duration: duration,
          day: day,
          price: price,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch("/api/courses/" + id);
        const json = await response.json();

        if (response.ok) {
          setTitle(json.title);
          setDuration(json.duration);
          setDay(json.day);
          setPrice(json.price);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourse();
  }, [id]);

  return (
    <form
      className="update"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h3>Add a New Course</h3>

      <label>Course Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Duration (months):</label>
      <input
        type="number"
        onChange={(e) => setDuration(e.target.value)}
        value={duration}
        className={emptyFields.includes("duration") ? "error" : ""}
      />

      <label>Day:</label>
      <input
        type="text"
        onChange={(e) => setDay(e.target.value)}
        value={day}
        className={emptyFields.includes("day") ? "error" : ""}
      />
      <label>Price ($):</label>
      <input
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        className={emptyFields.includes("price") ? "error" : ""}
      />

      <button type="submit">Update Course</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default UpdateForm;
