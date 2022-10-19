import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  const navigate = useNavigate();
  return (
    <Router>
      {/* navbar */}
      <div className="bg-white">
        <div className='d-flex bg-success justify-content-between align-items-center p-3'>
          <div className='d-flex gap-3 text-white'>
            <h3 >Home</h3>
            <h3>About</h3>
            <h3>Contact</h3>

          </div>

          <div className='d-flex gap-3 '>
            <button className='btn btn-primary'>Login</button>
            <button className='btn btn-danger'>Sign up</button>
          </div>
        </div>
      </div>

      {/* routes  */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>

    </Router>
  );
}

export default App;
