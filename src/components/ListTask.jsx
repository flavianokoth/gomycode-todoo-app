import React, { useState } from 'react';
import AddTask from './AddTask';
import Task from './Task';
import { Button } from '@/components/ui/button';

const ListTask = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (description) => {
    const newTask = { id: Date.now(), description, isDone: false };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task));
  };

  const editTask = (id, newDesc) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, description: newDesc } : task));
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'done' ? task.isDone :
    filter === 'not' ? !task.isDone :
    true
  );

  return (
    <div className="max-w-xl mx-auto p-4">
      <AddTask onAdd={addTask} />
      <div className="flex gap-2 mb-4">
        <Button variant={filter === 'all' ? 'default' : 'outline'} onClick={() => setFilter('all')}>All</Button>
        <Button variant={filter === 'done' ? 'default' : 'outline'} onClick={() => setFilter('done')}>Done</Button>
        <Button variant={filter === 'not' ? 'default' : 'outline'} onClick={() => setFilter('not')}>Not Done</Button>
      </div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} onToggle={toggleTask} onEdit={editTask} />
      ))}
    </div>
  );
};

export default ListTask;
