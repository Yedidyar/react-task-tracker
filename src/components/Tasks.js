import Task from "./Task";
const Tasks = ({ tasks, deleteTask, onToggleReminder }) => {
  return (
    <>
      {tasks.length > 0
        ? tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              deleteTask={deleteTask}
              onToggleReminder={onToggleReminder}
            />
          ))
        : "No Tasks To Show"}
    </>
  );
};

export default Tasks;
