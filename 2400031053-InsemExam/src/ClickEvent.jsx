import React, { useState } from 'react';
import './ClickEvent.css';  // Import CSS from same folder

const ClickEvent = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Button clicked! 🎉');
  };

  return (
    <div className="container">
      <button className="click-button" onClick={handleClick}>
        Click Me
      </button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ClickEvent;