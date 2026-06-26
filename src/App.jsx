import React, { useEffect, useState } from 'react'
import Taskform from './Taskform'
import Tasklist from './Tasklist'
import ProgressTracker from './ProgressTracker'

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
     localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtasks = [...tasks];
    newtasks[index] = updatedTask;
    setTasks(newtasks);
  }

  const deleteTask = (index) => {
     setTasks(tasks.filter((_ , i) => i!= index))
  }

  const clearTasks = () => {
    setTasks([]);
  }
  
  return (
    <div>
      <h1>Win The Day</h1>
      <h4><i>The Friendly Task Manager</i></h4>
      <Taskform addTask={addTask}/>
      <Tasklist tasks = {tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <ProgressTracker tasks = {tasks}/>

      {tasks.length>0 &&
      (<button onClick= {clearTasks} className='clear-btn'> Clear All Tasks</button>)}

    </div>
  )
}
