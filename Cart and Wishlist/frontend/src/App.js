import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages and Components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Courses } from "./pages/courses/courses";
import UpdateForm from "./pages/updateform";
import Cart from "./pages/cart/cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/updateCourse/:id" element={<UpdateForm />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
