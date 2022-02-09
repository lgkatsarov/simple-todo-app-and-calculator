import './TasksList.css'

function TasksList({
    tasksList,
    deleteItem,
    toggleItem
}){
    return(
        <ul className="task-list">
            {tasksList.length != 0
            ? tasksList.map(task =>
            <li key={task.objectId} className={task.isDone ? 'task-done':''}>{task.text}
            <button className='btn del-btn' onClick={() => deleteItem(task.objectId)}>Delete</button>
            <button className='btn done-btn' onClick={(e) => toggleItem(task.objectId, e)}>{task.isDone ? 'Undone' : 'Mark as done'}</button>
            </li>)
            : <li key="no-tasks">No Tasks Yet</li>}
        </ul>
    )
}

export default TasksList;