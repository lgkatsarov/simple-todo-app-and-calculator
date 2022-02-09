import { useEffect, useState } from 'react';
import './TextBox.css';
import './TasksList';
import TasksList from './TasksList';
//import uniqid from 'uniqid';
import { postTask, getAllTasks, updateTask, getTask, deleteTask} from '../services/tasksService';

function TextBox() {
    let [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks().then(data => setTasks(data.results));
    },[]);

    const addBtnHandler = (e) => {
        const inputField = e.target.previousElementSibling;

        const newTask = {
            text: inputField.value,
            isDone: false
        }
        postTask(newTask).then(task => {
            Object.assign(newTask, {objectId: task.objectId});
            setTasks(oldTasks => [...oldTasks, newTask]);
        });

        inputField.value = '';
    }

    const deleteItemButtonHandler = (id) => {
        deleteTask(id).then(data => console.log(data));
        setTasks(oldTasks => oldTasks.filter(task => task.objectId != id));
    }

    const toggleButtonHandler = (id) => {
        getTask(id).then(data => {
            const updatedTask = {objectId: data.objectId, text: data.text, isDone: !data.isDone};
            updateTask(updatedTask).then(result => console.log(result));
        });

        setTasks(oldTasks => {
            return oldTasks.map(task => {
                if (task.objectId == id) {
                    return { ...task, isDone: !task.isDone }
                }
                return task;
            })
        });
    }

    return (
        <>
            <h5>Add your tasks here:</h5>
            <div className="input-box">
                <input type="text" className="text-field"></input>
                <button className="add-button" onClick={addBtnHandler}>ADD</button>
            </div>
            <TasksList tasksList={tasks} deleteItem={deleteItemButtonHandler} toggleItem={toggleButtonHandler} />
        </>
    )
}

export default TextBox;