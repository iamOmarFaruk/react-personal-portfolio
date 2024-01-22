import './parallax.scss';
import React from 'react';

function Parallax({ type }) {
  let headingText = '';
  let bgColor = '';

  if (type === 'services') {
    headingText = 'What We do !';
    bgColor = {
      background: 'linear-gradient(180deg, #111132, #0c0c1d)',
    };
  } else if (type === 'portfolio') {
    headingText = 'What We Did ?';
    bgColor = {
      background: 'linear-gradient(180deg, #111132, #505064)',
    };
  }

  return (
    <div className='parallax' style={bgColor}>
      <h1>{headingText}</h1>
      <div className='mountains'></div>
      <div className='planets'></div>
      <div className='stars'></div>
    </div>
  );
}

export default Parallax;