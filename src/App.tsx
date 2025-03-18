import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import logo from "./assets/jirehlogo2.png";
import { Menu, X } from "lucide-react"; 

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <header>
        <div id="nameLogoContainer">
          <img id="logo" src={logo} alt="Jireh Law Logo" />
          <h1 className="nameText">Jireh Law Group PLLC</h1>
        </div>
        <nav>
          <div id="popupNav">
            <button onClick={()=> setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>         
            {isMenuOpen &&(
              <ul id="popupList">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            )}
          </div>
          <ul id="navBar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
