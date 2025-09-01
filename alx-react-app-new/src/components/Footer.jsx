// alx-react-app-new/src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: '#fff',
      textAlign: 'center',
      padding: '15px 0',
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%'
    }}>
      <p>&copy; {new Date().getFullYear()} My Favorite Cities. All rights reserved.</p>
    </footer>
  );
}

export default Footer;