import React from 'react'
import './card.css'
function User2(props) {
  return (
    <div>
       <div className="card">
      
      <div className="profile-photo">
        <img src="https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Profile-pic" />
      </div>
      <div className='info'>
          <p>{props.designation}</p>
      <h1>{props.name}</h1>
      </div>
      <div className='description'>
      <p>{props.description}</p>
      </div>
    </div>
    </div>
  )
}

export default User2
