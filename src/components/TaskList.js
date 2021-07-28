import React from "react";
import { BiTrash, BiEdit } from "react-icons/bi";

function TaskList({ tasks, setTasks, setEdit, setAddTask }) {
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const editTask = (id) => {
    setEdit(true);
    setAddTask(false);
  };

  const completedTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              complete: !task.complete,
            }
          : task
      )
    );
  };

  return (
    <div className="contenedor">
      {tasks.length > 0 ? (
        tasks.map((task, i) => {
          const { name, id, complete } = task;
          return (
            <div key={id} className="todo">
              <div
                className="sub-todo"
                onClick={() => completedTask(id)}
                style={{ textDecoration: complete ? "line-through" : "" }}
              >
                <h4>{name}</h4>
              </div>
              <div className="sub-todo">
                <BiTrash
                  className="icons"
                  size="1.5rem"
                  onClick={() => deleteTask(id)}
                />
                <BiEdit
                  className="icons"
                  size="1.5rem"
                  onClick={() => editTask(task.id)}
                />
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
