import React, { useState } from 'react'
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpeg';
import img5 from './images/img5.jpeg';
import img6 from './images/img6.jpeg';
import img7 from './images/img7.jpeg';
import Task3 from './Task3';
import './App.css'


function App() {

  let Images=[img1,img2,img3,img4,img5,img6,img7]
  const [Count ,setCount] =useState(0)
  
//  let res
  function handleChange() {
    if((Images.length-1)===Count){
        return setCount(0)
    }else{
      return setCount(Count+1)
    }
  
  }
  return (
    <>
      <Task3 handleChange={handleChange}
              BtnName="Change Image"
              image={Images[Count]}/>
    </>
    )
}

export default App
