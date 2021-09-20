import React from 'react';
import { RiDeleteBin2Line, RiPencilLine } from 'react-icons/ri';
import { Box, Text, Image } from '@chakra-ui/react';
import png from '../notebook.png';

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
    <Box mt={6} h="25rem" overflowY="auto">
      {tasks.length > 0 ? (
        tasks.map((task, i) => {
          const { name, id, complete } = task;
          return (
            <Box mt={6} key={id} className="todo">
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
        <Box mt="1rem">
          <Text py={8}>Empty list!</Text>
          <Image src={png} w="8rem" m="auto" />
          <Text py={8}>Any plans for today?</Text>
        </Box>
      )}
    </Box>
  );
}

export default TaskList;
