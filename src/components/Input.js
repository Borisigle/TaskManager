import React, { useState, useEffect} from "react"; 
import { v4 as uuidv4 } from "uuid";

function Input({ tasks, setTasks, setAddTask, edit, editTask}) {
  const [task, setTask] = useState("");


  useEffect(() => {
    setTask(edit.name)
  }, [edit])

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
      {edit ? <button onClick={ () => editTask(edit.id, task)}>Edit</button> : <button>Add Task</button>}
    </form>
  );
}

export default Input;
