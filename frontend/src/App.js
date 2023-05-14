import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from "./Search"

//pages and Components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import UpdateForm from './pages/updateform';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route path="/update/:id" element={<UpdateForm />} />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
