// alx-react-app-new/src/components/MainContent.jsx
import React from 'react';

function MainContent({ children }) {
  return (
    <main style={{
      backgroundColor: '#e3f2fd',
      minHeight: '300px',
      padding: '30px',
      margin: '20px auto',
      borderRadius: '10px',
      maxWidth: '800px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      {children}
    </main>
  );
}

export default MainContent;