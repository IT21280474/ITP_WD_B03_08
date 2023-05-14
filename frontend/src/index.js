import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { CoursesContextProvider } from "./context/CourseContext";
import { NotificationsContextProvider } from "./context/NotificationContext";

import "bootstrap/dist/css/bootstrap.min.css";

import { MeterialsContextProvider } from "./context/MeterialContext";


ReactDOM.render(
  <React.StrictMode>
    <CoursesContextProvider>
      <MeterialsContextProvider>
      <NotificationsContextProvider>
      <App />
    </NotificationsContextProvider>
      </MeterialsContextProvider>
    </CoursesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
