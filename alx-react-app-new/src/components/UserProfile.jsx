// alx-react-app-new/src/components/UserProfile.jsx
import React from 'react';

function UserProfile(props) {
  return (
    <div style={{
      border: '1px solid gray',
      padding: '10px',
      margin: '10px',
      borderRadius: '8px',
      background: '#f7f7f7'
    }}>
      <h2 style={{ color: 'blue', fontSize: '1.5em', marginBottom: '0.5em' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{props.age}</span></p>
      <p style={{ fontStyle: 'italic', color: '#555' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;