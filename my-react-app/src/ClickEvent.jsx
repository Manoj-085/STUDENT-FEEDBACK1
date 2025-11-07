import React, { useState } from 'react';
import './ClickEvent.css';

function ClickEvent() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Button was clicked!');
  };

  return (
    <div className="click-event-container">
      <button className="click-button" onClick={handleClick}>
        Click Me
      </button>
      <p className="click-message">{message}</p>
    </div>
  );
}

export default ClickEvent;
