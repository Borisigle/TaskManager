import { v4 as uuidv4 } from 'uuid';

export const editTask = (id, taskValue, tasks, setTasks, setEdit, onClose) => {
  setTasks(
    tasks.map(task =>
      task.id === id
        ? {
            ...task,
            name: taskValue,
          }
        : task
    )
  );
  setEdit(false);
  onClose();
};

export const addTask = (task, tasks, setTask, setTasks, onClose) => {
  if (task.trim() === '') {
  }

  setTasks([...tasks, { name: task, id: uuidv4(), complete: false }]);
  //localStorage.setItem('data', JSON.stringify([...tasks, newTask]))
  setTask('');
  onClose();
};
