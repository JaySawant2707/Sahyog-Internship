import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Router-Pages/About";
import Contacts from "./Router-Pages/Contacts";
import Home from "./Router-Pages/Home";

export default function App7_ReactRouter() {
  return (
    <Router>
      <div style={{ textAlign: "center", padding: 10 }}>
        <h2>React Router Basics</h2>
        <nav style={{ marginBottom: 10 }}>
          <Link to="/" style={{ margin: 10 }}>
            Home
          </Link>
          <Link to="/About" style={{ margin: 10 }}>
            About
          </Link>
          <Link to="/Contacts" style={{ margin: 10 }}>
            Contacts
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}
