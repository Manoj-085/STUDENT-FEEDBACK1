import React, { useState } from 'react';

function ClickEvent() {
  const [message, setMessage] = useState('');

  function handleClick() {
    setMessage('Button was clicked!');
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>{message}</p>
    </div>
  );
}

export default ClickEvent;
