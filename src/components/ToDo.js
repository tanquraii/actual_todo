import React from 'react'
import backgroundImage from './images/bg-desktop-dark.jpg';
import ToDoForm from './ToDoForm';
const ToDo = () => {
  return (
    <div className='body'>
      <img src = {backgroundImage}/>
      <ToDoForm/>
    </div>
  )
}

export default ToDo
