import React ,{useState} from 'react';

function Task2() {
    const [count, setcount] = useState(0)

    
    function handleInc(){
    
            return setcount(count+1)
    
    }
    function handleDec(){
    
            return setcount(count-1)
    
    }
    
    return(
        <>
     <button onClick={handleInc}>Increase</button>   
     <h1>{count}</h1>
     <button onClick={handleDec}>Decrease</button>   
     </>
    )
}

export default Task2;