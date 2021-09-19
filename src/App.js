import './App.css';
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useDisclosure, Box, Flex } from '@chakra-ui/react';
import AddTaskModal from './components/AddTaskModal';
import Header from './components/Header';

export default function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('data')) || []
  );
  const [edit, setEdit] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState(true);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Flex
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      bg="#f0efea"
    >
      <Box
        className="App"
        w="100%"
        maxW="350px"
        maxH="650px"
        boxShadow="rgba(17, 12, 46, 0.10) 0px 48px 100px 0px"
        position="relative"
        px={10}
        h="85%"
        bg="white"
        borderRadius="xl"
      >
        <Header />
        <AddTaskModal
          tasks={tasks}
          setTasks={setTasks}
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          edit={edit}
          setEdit={setEdit}
        />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          edit={edit}
          setEdit={setEdit}
          onOpen={onOpen}
        />
        <Box
          position="absolute"
          top="100%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <AiFillPlusCircle className="add-icon" onClick={onOpen} />
        </Box>
      </Box>
    </Flex>
  );
}
