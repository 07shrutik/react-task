import React, {useState} from 'react'
import logo from './logo.svg'
import img1 from './img1.jpeg' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,faBars} from '@fortawesome/free-solid-svg-icons';
import './Header.css'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div>
        <header className='header'>
            <img src={logo} alt="logo"/>
            <ul className={isMenuOpen ? "list-responsive" : "lists"}>
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
                <li>AboutUs</li>
            </ul>
              <ul className="lists-2">
                <li>Login</li>
                <li>SignUp</li>
              </ul>
        {/* <button className='contact'>Contact-Us</button> */}
        <button className="menu-toggle" onClick={handleClick}>
          {isMenuOpen ? <FontAwesomeIcon icon={faXmark} />: <FontAwesomeIcon icon={faBars} />}
        </button>
        </header>
        <div className='container'>
          <h1>Messi the God of football</h1>
          <img src={img1} alt="messi"/>
          
        </div>
    </div>
  )
}
export default Header
