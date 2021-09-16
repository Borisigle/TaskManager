import React from 'react';
import { RiDeleteBin2Line, RiPencilLine } from 'react-icons/ri';
import { Box } from '@chakra-ui/react';

function TaskList({ tasks, setTasks, setEdit, onOpen }) {
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = id => {
    setEdit(id);
    onOpen();
  };

  const completedTask = id => {
    setTasks(
      tasks.map(task =>
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
    <Box mt={10} h="25rem" overflowY="auto">
      {tasks.length > 0 ? (
        tasks.map((task, i) => {
          const { name, id, complete } = task;
          return (
            <Box mt={8} key={id} className="todo">
              <div
                className="sub-todo"
                onClick={() => completedTask(id)}
                style={{ color: complete ? '#b5b5b5' : 'black' }}
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
                  onClick={() => editTask({ name: task.name, id: task.id })}
                />
              </div>
            </Box>
          );
        })
      ) : (
        <p>Hi!, any plans for today??</p>
      )}
    </Box>
  );
}

export default TaskList;
