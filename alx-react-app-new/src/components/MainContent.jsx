import React from 'react';

const mainContentStyle = {
  backgroundColor: '#f5f5f5',
  padding: '2rem',
  borderRadius: '8px',
  textAlign: 'center',
  margin: '2rem auto',
  maxWidth: '800px'
};

const MainContent = () => {
  return (
    <main style={mainContentStyle}>
      <h1>Main Content</h1>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
};

export default MainContent;
