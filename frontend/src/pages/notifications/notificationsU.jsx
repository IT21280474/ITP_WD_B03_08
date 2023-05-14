import { useEffect } from "react";
import { useNotificationsContext } from "../../hooks/uesNotificationsContext";
import { useState } from "react";
import { Form } from "react-bootstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

//components
import NotificationDetails from "../../components/NotificationDetailsUser";

export const NotificationUser = () => {
  const { notifications, dispatch } = useNotificationsContext();
  const [query, setQuery] = useState("");
  const [filteredNotifications, setFilteredNotifications] = useState([]);

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

  useEffect(() => {
    if (query) {
      const filtered = notifications.filter((notification) =>
        notification.headline.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredNotifications(filtered);
    } else {
      setFilteredNotifications(notifications);
    }
  }, [notifications, query]);

  const generateReport = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();
  
    // Add the company name
    const companyName = "INSTITUTE OF ROVISTA";
    doc.setFontSize(18);
    doc.text(companyName, 10, 10);
  
    // Add the current time
    const currentTime = new Date().toLocaleString();
    doc.setFontSize(12);
    doc.text(currentTime, 10, 20);
  
    // Convert the target element (notifications) to canvas
    html2canvas(document.querySelector(".notifications")).then((canvas) => {
      // Get the canvas data URL
      const dataURL = canvas.toDataURL("image/png");
  
      // Add an image to the PDF document
      doc.addImage(dataURL, "PNG", 10, 30, 190, 0);
  
      // Save the PDF document
      doc.save("report.pdf");
    });
  };
  
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
      <button onClick={generateReport}  >Generate Report</button>
      <div className="home">
        <div className="notifications">
          {filteredNotifications.map((notification) => (
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
