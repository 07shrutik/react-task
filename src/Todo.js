import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './App.css'



function App(){
  const [Input, setInput] = useState([])
  const [pending, setpending] = useState(0)
 
  let res 
  function handleChange(e){
    return(
      res=e.target.value
    )
  }

  
  function handleSubmit(){
    setpending(pending+1)
      return setInput([...Input,res])
  
  }
  
  
  function handleDelete(arg){
    const res=Input.filter((num)=>num!==arg)
    setpending(pending-1)
      return  setInput(res)
  
  }
  const handleComplete = (id) => { 
    setInput(Input => Input.map(num => {
      if (num === id) {
        return (
          <span style={{textDecoration:"line-through"}}>
            {num}  
          </span>
        )
      }
       else {
        return num;
      }
    }));
    setpending(pending-1)
  };

  return(
  <div className='container'>
      <div className='box'>
        <h1 >Pending Tasks - {(pending)}</h1>
          <div className='box-inside'>
            {Input.map((num)=>(
              <p key={num}>{num}
                <span>
                  <button className='btn-cmplte' onClick={() => handleComplete(num)}>Complete</button>
                  <button className='btn-delete' onClick={() => handleDelete(num)}><FontAwesomeIcon icon={faTrash}/></button> 
                </span>
              </p>))}
          </div>
        <input onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
      </div>
  </div>
)
}


export default App;

