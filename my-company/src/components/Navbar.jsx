import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",             // makes links horizontal
        justifyContent: "space-around", // evenly spaces links
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#333",
        color: "#fff"
      }}
    >
      <Link to="/" style={{ color: "#fff" }}>Home</Link>
      <Link to="/about" style={{ color: "#fff" }}>About</Link>
      <Link to="/services" style={{ color: "#fff" }}>Services</Link>
      <Link to="/contact" style={{ color: "#fff" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
