import React ,{useState} from 'react'
import Login from './components/Login';
import SignUp from './components/SignUp';
import './Form.css';

function Form() {
    const [isSignUp, setisSignUp] = useState(false)

  return (
    <div className='container'>  
      {isSignUp && <SignUp />}
      <Login isSignUp={isSignUp}/>

        <button type='submit' style={{width:'240px', height:"25px", backgroundColor:"rgb(85, 16, 214)",color:"white", borderRadius:"5px"}}>
          {isSignUp ? "Register" : "Login"}
          </button>

        <div className='lower'>
          <p>{!isSignUp ? "Don't have an account?":"Already have an account?"}</p>
          <button onClick={()=>setisSignUp(!isSignUp)}>{isSignUp ? "Login" : "SignUp"}</button>
        </div>

    </div>
  )
}

export default Form
