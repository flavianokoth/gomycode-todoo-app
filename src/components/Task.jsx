import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Card } from '@/components/ui/card';

const Task = ({ task, onToggle, onEdit }) => (
  <Card className="flex justify-between items-center p-4 mb-2">
    <input
      type="text"
      value={task.description}
      onChange={(e) => onEdit(task.id, e.target.value)}
      className="bg-transparent border-none outline-none w-full"
    />
    <div className="flex items-center gap-2">
      <Switch checked={task.isDone} onCheckedChange={() => onToggle(task.id)} />
      <span>{task.isDone ? '✅' : '❌'}</span>
    </div>
  </Card>
);

export default Task;
