import React from 'react';

const TaskItem = ({ task, handleCompleteTask, handleDeleteTask }) => {
  const { id, name, completed } = task;

  const completeTask = () => {
    handleCompleteTask(id);
  };

  const deleteTask = () => {
    handleDeleteTask(id);
  };

  return (
    <div>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {name}
      </span>
      <button onClick={completeTask}>Completar</button>
      <button onClick={deleteTask}>Eliminar</button>
    </div>
  );
};

export default TaskItem;
