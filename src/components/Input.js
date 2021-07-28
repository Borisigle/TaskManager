import React, { useState } from "react"; 
import { v4 as uuidv4 } from "uuid";

function Input({ tasks, setTasks, setAddTask, edit}) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {name:task, id:uuidv4(), complete: false}
    setTasks([...tasks, newTask]);
    localStorage.setItem('data', JSON.stringify([...tasks, newTask]))
    setTask("");
    setAddTask(false);
    
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <input value={task} type="text" onChange={handleChange} />
      {edit ? <button>Edit</button> : <button>Add Task</button>}
    </form>
  );
}

export default Input;
