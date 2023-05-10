import React from 'react'
import { todos } from './Atoms'
import { useRecoilValue } from 'recoil'
import styles from './Tasks.module.css'
const Tasks = () => {
  let data=useRecoilValue(todos)
  // console.log(data)
  return (
    <div className={styles.main}>
      <h1>Tasks</h1>
      {
        data.map((item,index)=>(
          <p key={index}>{item}</p>
        ))
      }
    </div>
  )
}

export default Tasks
