// src/components/Counter.jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // initialize state

  // Inline styles for the container and buttons
  const containerStyle = {
    textAlign: 'center',
    marginTop: '2rem',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const buttonStyle = {
    margin: '0 0.5rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <p>Current Count: {count}</p>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button style={buttonStyle} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
