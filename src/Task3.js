  import React,{useState} from 'react'
  
  function Task3() {
    const [Name, setName] = useState("Amit")
    
    const handleChange=()=>{
    
        setName(Name==="Amit" ? "Rajan" : "Amit")
    
    }
    return (
      <div>
        <h1>My name is {Name}</h1>
        <button onClick={handleChange}>Change-Name</button>
      </div>
    )
  }
  
  export default Task3
  