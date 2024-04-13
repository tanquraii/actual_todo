import React from 'react'
import { useState } from 'react'
const ToDoList = () => {
    const [tasks,setTasks] = useState([]);//array of tasks
    const [newTask,setNewTask] = useState("");//the new tasks will be added to the array
    function handleInputChange(event){
        setNewTask(event.target.value);
        console.log(newTask);
    }
    function addTask(){
        if (newTask.length>0){
            setTasks(t=>[...t,newTask])//the spread operator creates a new array that takes all elements of the old array and adds new element to the end
            setNewTask("");
        }
    }
    function deleteTask(index){
        tasks.splice(index,1);
        setTasks([...tasks]);

    }
  return (
    <div className='to-do-list'>
      <h1>To-Do-List</h1>
      <div>
        <input
            className='input'
            type="text"
            placeholder='Create a new task...'
            value={newTask}
            onChange={handleInputChange}/>
            <button
                className='add-button'
                onClick={addTask}>
                Add
            </button>
      </div>
        <ol>
            {tasks.map((task,index)=>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button
                        className='delete-button'
                        onClick={()=>deleteTask(index)}>
                        🗑
                    </button>
                </li>
            )} 
        </ol>
    </div>
  )
}

export default ToDoList
