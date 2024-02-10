// ColorChanger.js
import React, { useState } from 'react';

const ColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className='bg' style={{ backgroundColor, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Background Color Changer</h1>
        <p>Click the button to change background colour</p>
        <div style={{margin:'70px'}}>
          <button onClick={() => changeColor('red')}>Red</button>
          <button onClick={() => changeColor('green')}>Green</button>
          <button onClick={() => changeColor('blue')}>Blue</button>
          <button onClick={() => changeColor('yellow')}>Yellow</button>
          <button onClick={() => changeColor('pink')}>Pink</button>
          <button onClick={() => changeColor('grey')}>Grey</button>
        </div>
      </div>
    </div>
  );
};

export default ColorChanger;
