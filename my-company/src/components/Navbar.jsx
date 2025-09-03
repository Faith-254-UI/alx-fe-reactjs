import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333' }}>
      <Link to="/" style={{ color: '#fff', marginRight: '15px' }}>Home</Link>
      <Link to="/about" style={{ color: '#fff', marginRight: '15px' }}>About</Link>
      <Link to="/services" style={{ color: '#fff', marginRight: '15px' }}>Services</Link>
      <Link to="/contact" style={{ color: '#fff' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
