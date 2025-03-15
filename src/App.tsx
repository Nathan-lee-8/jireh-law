import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import logo from "./assets/jirehlogo2.png";

function App() {
  return (
    <Router>
      <header>
        <div id="nameLogoContainer">
          <img id="logo" src={logo} alt="Jireh Law Logo" />
          <h1 className="nameText">Jireh Law Group PLLC</h1>
        </div>
        <nav>
          <ul id="navBar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
