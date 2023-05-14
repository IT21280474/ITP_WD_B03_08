import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages and Components
import Home from "./pages/Home";
import Meterial from "./pages/Meterial";
import Navbar from "./components/Navbar";
import { Courses } from "./pages/courses/courses";
import { Meterialuser } from "./pages/meterials/meterialsU";
import { NotificationUser } from "./pages/notifications/notificationsU"
import UpdateForm from "./pages/updateform";
import UpdateForm1 from "./pages/updateform1";
import Wishlist from "./pages/wishlist/wishlist";
import Cart from "./pages/cart/cart";
import UpdateFormN from "./pages/updateformN";
import Notification from "./pages/Notification";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
           <Route path="/meterial" element={<Meterial/>} />
           <Route path="/meterialsU" element={<Meterialuser/>} />
           <Route path="/notificationsU" element={<NotificationUser/>} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/updateCourse/:id" element={<UpdateForm />} />
            <Route path="/updateMeterial/:id" element={<UpdateForm1 />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/Notification" element={<Notification />} />

          
           
            <Route path="/updateNotification/:id" element={<UpdateFormN />} />
           
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
