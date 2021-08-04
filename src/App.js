import "./App.css";
import { useState } from "react";
import TaskList from "./components/TaskList";
import Input from "./components/Input";
import { BiPlusCircle } from "react-icons/bi";
import moment from "moment";

function App() {
  const [tasks, setTasks] = useState([]);
  const [addTask, setAddTask] = useState(false);
  const [edit, setEdit] = useState(false);

  const toggleAddTask = () => {
    setAddTask(true);
  };

  return (
    <div className="App">
      <div>
        <div className="contenedor-header">
          <div className="contenedor-fecha">
            <div className="capitalize-day">{moment().format("DD")}</div>
            <div className="mm-yy">
              <div style={{fontWeight: '600'}}>{moment().format("MMM").toUpperCase()}</div>
              <div style={{fontWeight: '200'}}>{moment().format("YYYY")}</div>
            </div>
          </div>
          <div className="day">{moment().format("dddd").toUpperCase()}</div>
        </div>
        {addTask || edit ? (
          <Input
            tasks={tasks}
            setTasks={setTasks}
            addTask={addTask}
            setAddTask={setAddTask}
            edit={edit}
          />
        ) : (
          <BiPlusCircle size="2rem" onClick={() => toggleAddTask()} />
        )}
      </div>
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        edit={edit}
        setEdit={setEdit}
        setAddTask={setAddTask}
      />
    </div>
  );
}

export default App;
