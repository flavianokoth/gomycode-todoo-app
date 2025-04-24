import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AddTask = ({ onAdd }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (description.trim()) {
      onAdd(description);
      setDescription('');
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <Input
        placeholder="Add a new task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="flex-grow"
      />
      <Button onClick={handleSubmit}>Add</Button>
    </div>
  );
};

export default AddTask;
