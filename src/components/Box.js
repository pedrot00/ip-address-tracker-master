import './Box.css';
import React from 'react';

function Box({ id, title, info }) {
  return (
    <div className='boxContainer' id={id}>
      <div className='titleLabel'><p>{title}</p></div>
      <div className='info'><h3>{info}</h3></div>
    </div>
  );
}

export default Box;
