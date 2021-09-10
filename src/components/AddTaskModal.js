import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import { editTask, addTask } from './TaskFunctions';

function AddTaskModal({
  tasks,
  setTasks,
  onOpen,
  onClose,
  isOpen,
  edit,
  setEdit,
}) {
  const [task, setTask] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setTask(e.target.value);
  };

  useEffect(() => {
    setTask(edit.name);
  }, [edit]);

  const size = useBreakpointValue({ base: 'xs', md: 'sm' });

  const handleClick = e => {
    onClose();
    if (edit) {
      setEdit(false);
    }
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={size}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{edit ? 'Edit task' : 'Add task'} </ModalHeader>
        <ModalCloseButton />
        <ModalBody py={4}>
          <Input
            variant="flushed"
            value={task}
            type="text"
            onChange={handleChange}
            placeholder="Insert task"
            maxlength="25"
          />
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={
              edit
                ? () =>
                    editTask(edit.id, task, tasks, setTasks, setEdit, onClose)
                : () => addTask(task, tasks, setTask, setTasks, onClose)
            }
            colorScheme="blue"
            mr={3}
          >
            {edit ? 'Edit' : 'Add'}
          </Button>
          <Button onClick={handleClick}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddTaskModal;
