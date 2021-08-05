import React from "react";
import { RiDeleteBin2Line, RiPencilLine } from "react-icons/ri";
import { Box } from "@chakra-ui/react"

function TaskList({ tasks, setTasks, setEdit, onOpen }) {
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const editTask = (id) => {
    setEdit(id);
    onOpen();
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
    <Box mt={10}>
      {tasks.length > 0 ? (
        tasks.map((task, i) => {
          const { name, id, complete } = task;
          return (
            <Box mt={8} key={id} className="todo">
              <div
                className="sub-todo"
                onClick={() => completedTask(id)}
                style={{ textDecoration: complete ? "line-through" : "" }}
              >
                <h4 style={{ fontWeight: '500' }}>{name}</h4>
              </div>
              <div className="sub-todo">
                <RiDeleteBin2Line
                  className="icons"
                  size="1.3rem"
                  onClick={() => deleteTask(id)}
                />
                <RiPencilLine
                  className="icons"
                  size="1.3rem"
                  onClick={() => editTask({ name : task.name , id : task.id})}
                />
              </div>
            </Box>
          );
        })
      ) : (
        <p>No task to show</p>
      )}
    </Box>
  );
}

export default TaskList;