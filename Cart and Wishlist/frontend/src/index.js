import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CoursesContextProvider } from "./context/CourseContext";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CoursesContextProvider>
      <App />
    </CoursesContextProvider>
  </React.StrictMode>
);
