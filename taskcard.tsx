import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../store/taskActions';

interface TaskCardProps {
  task: {
    _id: string;
    title: string;
    description?: string;
    status: string;
    priority?: string;
  };
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task._id));
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      {task.description && <p>{task.description}</p>}
      <p>Status: {task.status}</p>
      {task.priority && <p>Priority: {task.priority}</p>}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => dispatch(updateTask(task._id, { status: 'In Progress' }))}>Move to In Progress</button>
    </div>
  );
};

export default TaskCard;