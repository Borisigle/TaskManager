import './App.css';
import { useState } from 'react';
import TaskList from './components/TaskList';
import { AiFillPlusCircle } from 'react-icons/ai';
import moment from 'moment';
import { useDisclosure, Box } from '@chakra-ui/react';
import AddTaskModal from './components/AddTaskModal';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="App">
      <div>
        <div className="contenedor-header">
          <div className="contenedor-fecha">
            <div className="capitalize-day">{moment().format('DD')}</div>
            <div className="mm-yy">
              <div style={{ fontWeight: '600' }}>
                {moment().format('MMM').toUpperCase()}
              </div>
              <div style={{ fontWeight: '400' }}>{moment().format('YYYY')}</div>
            </div>
          </div>
          <div className="day">{moment().format('dddd').toUpperCase()}</div>
        </div>
        <Box
          position="absolute"
          top="87%"
          left="50%"
          transform="translateX(-50%)"
        >
          <AiFillPlusCircle className="add-icon" onClick={onOpen} />
        </Box>
      </div>
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
    </div>
  );
}
