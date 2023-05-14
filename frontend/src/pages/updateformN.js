import { useState, useEffect } from "react";

import { useNotificationsContext } from "../hooks/uesNotificationsContext";
import { useParams } from "react-router-dom";

const UpdateFormN = () => {
  const { dispatch } = useNotificationsContext();
  const [headline, setHeadline] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { id } = useParams();

  const handleSubmit = async () => {
    try {
      await fetch(`/api/notifications/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          headline: headline,
          details: details,
          
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const response = await fetch("/api/notifications/" + id);
        const json = await response.json();

        if (response.ok) {
          setHeadline(json.headline);
          setDetails(json.details);
        
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotification();
  }, [id]);

  return (
    <form
      className="update"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h3>Add a New Notification</h3>

      <label>Notification Headline:</label>
      <input
        type="text"
        onChange={(e) => setHeadline(e.target.value)}
        value={headline}
        className={emptyFields.includes("headline") ? "error" : ""}
      />

      <label>Details :</label>
      <input
        type="text"
        onChange={(e) => setDetails(e.target.value)}
        value={details}
        className={emptyFields.includes("details") ? "error" : ""}
      />

      

      <button type="submit">Add Notification</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default UpdateFormN;