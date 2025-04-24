import React from 'react';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">📝 Todo List</h1>
      <ListTask />
    </div>
  );
}

export default App;
