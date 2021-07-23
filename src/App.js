import "./App.css";
import { useState} from "react";
import TaskList from "./components/TaskList";
import Input from "./components/Input";
import EditInput from "./components/EditInput";

function App() {
  const [tasks, setTasks] = useState("");
  const [addTask, setAddTask] = useState(false);
  const [edit, setEdit] = useState(false)

  const toggleAddTask = () => {
    setAddTask(true);
  };

  return (
    <div className="App">
      <div>
        <h1>My Tasks</h1>
        {addTask ? (
          <Input
            tasks={tasks}
            setTasks={setTasks}
            addTask={addTask}
            setAddTask={setAddTask}
          />
        ) : (
          <button onClick={() => toggleAddTask()}>+</button>
        )}
      </div>
      {edit ? <EditInput /> : ''}
      <TaskList tasks={tasks} setTasks={setTasks} edit={edit} setEdit={setEdit} setAddTask={setAddTask} />
    </div>
  );
}

export default App;
