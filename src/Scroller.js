import React from 'react';
import './Scroller.css'
import mentor from './mentor.jpg'
// import logo from './logo.svg'

const mentors = [
  { name: 'Mentor 1', image: mentor, bio: 'Bio of mentor 1' },
  { name: 'Mentor 2', image: mentor, bio: 'Bio of mentor 2' },
  { name: 'Mentor 3', image: mentor, bio: 'Bio of mentor 3' },
  { name: 'Mentor 4', image: mentor, bio: 'Bio of mentor 4' },
  { name: 'Mentor 5', image: mentor, bio: 'Bio of mentor 5' },
  { name: 'Mentor 5', image: mentor, bio: 'Bio of mentor 5' },
  { name: 'Mentor 5', image: mentor, bio: 'Bio of mentor 5' },
  { name: 'Mentor 5', image: mentor, bio: 'Bio of mentor 5' },
  { name: 'Mentor 5', image: mentor, bio: 'Bio of mentor 5' },
  
];

const Scroller = () => {
  return (
    
    <div className='horizontal-scroller'>
      {mentors.map((mentor) => (
        <div key={mentor.name} className='main'>
          <img src={mentor.image} alt={mentor.name} />
          <h2>{mentor.name}</h2>
          <p>product manager in google india</p>
          <span>6 years</span>
        </div>
      ))}
    </div>
    
    
  );
};

export default Scroller;