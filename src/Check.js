import React,{useState} from 'react'
import './Form.css'
function Check() {
  const [Input, setInput] = useState("")
    let res=[]
    let result=[]
    function handleChange(e) {
        res=e.target.value
        setInput(res)
        result=res.split(/\s/)
        console.log(result.length)
        if(result.length>100){
            setInput("")
            return alert("You have reached Maximum-limit of words")
        }
    }
  return (
    <div>
      <input type="text" placeholder='write upto 100 words' value={Input} onChange={handleChange}/>
      
    </div>
  )
}

export default Check

