import { FaTimes } from 'react-icons/fa'
const Task = ({task,deleteTask, onToggleReminder}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' :''}`} onDoubleClick= {() => onToggleReminder(task.id)}>
            <h3>{task.text} <FaTimes style={{color:'red',cursor:'pointer'}} onClick={() => deleteTask(task.id)}/></h3>
            <p>{task.day}</p>

        </div>
    )
}

export default Task
