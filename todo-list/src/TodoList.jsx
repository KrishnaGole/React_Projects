import {React, useState} from "react";
function TodoList(){
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if(task){
            setTasks([...tasks, task]);
            setTask("");
        }
    }

    const deleteTask = (index) => {
        const updateTasks = [...tasks];
        updateTasks.splice(index, 1);
        setTasks(updateTasks);

    }
    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <input 
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks.map((item, index) => (
                    <li>
                       {item}
                       <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList;