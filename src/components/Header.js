import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
// import './App.css'
const Header = () => {
  return (
    <div className={styles.main}>
      <ul>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/about" >About</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">SignUp</NavLink></li>
      </ul>
    </div>
  )
}

export default Header
