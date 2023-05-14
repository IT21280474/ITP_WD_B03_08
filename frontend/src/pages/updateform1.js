import { useState, useEffect } from "react";

import { useMeterialsContext } from "../hooks/useMeterialsContext";
import { useParams } from "react-router-dom";

const UpdateForm1 = () => {
  const { dispatch } = useMeterialsContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { id } = useParams();

  const handleSubmit = async () => {
    try {
      await fetch(`/api/meterials/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
          
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMeterial = async () => {
      try {
        const response = await fetch("/api/meterials/" + id);
        const json = await response.json();

        if (response.ok) {
          setTitle(json.title);
          setContent(json.content);
        
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeterial();
  }, [id]);

  return (
    <form
      className="update"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h3>Add a New Meterial</h3>

      <label>Meterial Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Content :</label>
      <input
        type="text"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        className={emptyFields.includes("content") ? "error" : ""}
      />

      

      <button type="submit">Update Meterial</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default UpdateForm1;
