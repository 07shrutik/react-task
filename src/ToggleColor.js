import React from 'react'
import { useRecoilState } from 'recoil'
import {colors} from './components/Atoms'
import styles from './ToggleColor.module.css'

const ToggleColor = () => {
    const [rang,setrang]=useRecoilState(colors)
    function handleColor(){

        return setrang((prevrang)=>prevrang==="blue" ? "red" :"blue")
      }
  return (
    <div className={styles.main}>
      <h1 style={{color:rang}}>Hi , i change the color on click the button</h1>
      <button onClick={handleColor}>change color</button>
    </div>
  )
}

export default ToggleColor
