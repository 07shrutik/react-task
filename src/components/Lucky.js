import React from 'react'
import styles from './Lucky.module.css'
const Lucky = () => {
    let count=0
    let luckyNumber=7;
    var res
    function handleChange(e){
         res=e.target.value
    }
    
    function handleClick(){
        count++
        res=JSON.parse(res)
            if(res===luckyNumber){
                alert("congratulations you guessed the Lucky number in "+count+" attempts")
            }else if(res>luckyNumber){
                alert("You have guessed the Bigger Number than lucky number")
            }else{
                alert("You have guessed the Smaller Number than lucky number")
            }
    // console.log(typeof(res),res)
    }
  return (
    <div className={styles.main}>
      <h1>can you guess lucky number</h1>
      <input type="text" onChange={handleChange}/>
      <button onClick={handleClick}>Match Number</button>
    </div>
  )
}

export default Lucky
