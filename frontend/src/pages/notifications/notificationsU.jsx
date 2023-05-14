import { useEffect } from "react";
import { useNotificationsContext } from "../../hooks/uesNotificationsContext";
import { useState } from "react";
import { Form} from "react-bootstrap";

//components
import NotificationDetails from "../../components/NotificationDetailsUser";

export const NotificationUser = () => {
  const { notifications, dispatch } = useNotificationsContext();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchNotifications = async () => {
      const response = await fetch("/api/notifications");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_NOTIFICATIONS", payload: json });
      }
    };
    fetchNotifications();
  }, [dispatch]);

 
  

  return (
    
    <>
      <Form.Control
        aria-label="Search"
        className="form-control-rounded form-control-prepended mb-5"
        placeholder="Search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="home">
        <div className="notifications">
          {notifications &&
            notifications
              
              .map((notification) => (
                <NotificationDetails
                  key={notification._id}
                  notification={notification}
                />
              ))}
        </div>
      </div>
    </>
  );
};
