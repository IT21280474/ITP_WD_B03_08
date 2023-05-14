import React from "react";
import { useNotificationsContext } from "../hooks/uesNotificationsContext";
import { useNavigate } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const NotificationDetails = ({ notification }) => {
  const { dispatch, searchQuery } = useNotificationsContext();
  const navigate = useNavigate();

  const handleClick = async () => {
    const response = await fetch("/api/notifications/" + notification._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_NOTIFICATION", payload: json });
    }
  };

  const handleClickUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="notification-details">
      <h4>{notification.Headline}</h4>
      <p>
        <strong>Details:</strong>
        {notification.Details}
      </p>
      <p>
        {formatDistanceToNow(new Date(notification.createdAt), {
          addSuffix: true,
        })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
      <button
        className="material-symbols-outlined"
        onClick={() => handleClickUpdate(notification._id)}
      >
        update
      </button>
    </div>
  );
};

export default NotificationDetails;


