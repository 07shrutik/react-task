import React, { Fragment ,useState} from 'react';
import './App.css'
import Task2 from './Task2';
import Task3 from './Task3';

function App(){
  const [Input, setInput] = useState([])

  let res
  
  function handleChange(e,){
    return(
      res=e.target.value
    )
  }
  
  function handleSubmit(){
  
      return setInput([...Input,res])
  
  }
  return(
    <Fragment>
      <h1>Task-1</h1>
     <input onChange={handleChange}/>
     <button onClick={handleSubmit}>Submit</button>
        {Input.map((num)=>(<p>{num}</p>))}
      <br />
      <h1>Task-2</h1>
      <br />
      <Task2 />
      <br />
      <h1>Task-3</h1>
      
      <Task3 />
    </Fragment>
  )
}


export default App;
