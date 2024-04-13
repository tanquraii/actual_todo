import React from 'react'
import { useState } from 'react'
const ToDoForm = () => {
  const [tasks,setTasks] = useState([]);
  const [newTask,setNewTask] = useState("");
  function handleChange(event){
    setNewTask(event.target.value);
  }
  function addTask(){
    if(newTask.length>0){
      setTasks(t=>[...tasks,newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index){
    tasks.splice(index,1);
    setTasks([...tasks]);
  }
 
  return (
    <div className='container'>
      <h1>T O D O </h1>
      <div className='form'>
        <input
          placeholder='Create a new todo...'
          type="text"
          onChange={handleChange}
          value = {newTask}/>
          <div className='button' onClick={addTask}>Add</div>
      </div>
      <ul className='items'>
          
          {tasks.map((task,index)=>
              <li className='task'>
                <div className = "delete"   onClick={()=>deleteTask(index)}></div>
                {task}
              </li>
            )}
      
      </ul>
  </div>
  )
}

export default ToDoForm
