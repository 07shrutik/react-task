import React from 'react';
import './card.css';


function Card(props) {
  return (
    <div className="card">
      
        <div className="profile-photo">
          <img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg" alt="Profile-pic" />
        </div>
        <div className='info'>
            <p>{props.designation}</p>
        <h1>{props.name}</h1>
        </div>
        <div className='description'>
        <p>{props.description}</p>
        </div>
      </div>

  );
};

export default Card;