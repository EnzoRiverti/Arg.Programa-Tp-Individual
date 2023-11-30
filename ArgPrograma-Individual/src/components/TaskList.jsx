import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, handleCompleteTask, handleDeleteTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
