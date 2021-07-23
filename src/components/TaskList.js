import React from "react";

function TaskList({tasks, setTasks, setEdit, setAddTask}) {

 

  const deleteTask = (id) => {
   const filteredTasks = tasks.filter( task => task.id !== id )
   setTasks(filteredTasks)
  }

  const editTask = (id) => {
    setEdit(true)
    setAddTask(false)
  }

  return (
    <div className='contenedor'>
      {tasks ? (
        tasks.map((task) => {
          const { name, id } = task;
          return (
            <div key={id} className='todo'>
              <div className='sub-todo'>
                <input type="checkbox" />
                <h4>{name}</h4>
              </div>
              <div className='sub-todo'>
                <button onClick={() => deleteTask(id)}>X</button>
                <button onClick={() => editTask(id)}>Edit</button>
              </div>
            </div>
          );
        })
      ) : (
          <p>No task to show</p>
      )}
    </div>
  );
}

export default TaskList;
