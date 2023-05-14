import { useState, useEffect } from "react";
import { useNotificationsContext } from "../hooks/uesNotificationsContext"
import { useParams, useNavigate } from "react-router-dom";

const UpdateForm = () => {
  const { dispatch } = useNotificationsContext();
  const [Headline, setHeadline] = useState("");
  const [Details, setDetails] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate(); // Add the missing useNavigate hook

  const handleSubmit = async () => {
    try {
      await fetch(`/api/notifications/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Headline: Headline,
          Details: Details,
        }),
      });
      navigate('/'); // Navigate back to the home page after successful update
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchnotification = async () => {
      try {
        const response = await fetch("/api/notifications/" + id);
        const json = await response.json();

        if (response.ok) {
          setHeadline(json.Headline);
          setDetails(json.Details);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchnotification();
  }, [id]);

  return (
    <form
      className="update"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h3>Update the notification</h3>

      <label>Headline:</label>
      <input
        type="text"
        onChange={(e) => setHeadline(e.target.value)}
        value={Headline}
        className={emptyFields.includes("Headline") ? "error" : ""}
      />

      <label>Details:</label>
      <input
        type="text"
        onChange={(e) => setDetails(e.target.value)}
        value={Details}
        className={emptyFields.includes("Details") ? "error" : ""}
      />

      <button type="submit">Update</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default UpdateForm;
