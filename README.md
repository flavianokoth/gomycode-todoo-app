# 📝 React Todo App

A simple and responsive Todo List application built with React. It allows users to add, edit, and filter tasks by completion status.

## 🚀 Features

- ✅ Add new tasks
- ✏️ Edit existing tasks
- 🔄 Mark tasks as done/not done
- 🔍 Filter tasks by:
  - All
  - Done
  - Not Done

## 📦 Tech Stack

- React (with Hooks)
- Tailwind CSS (optional for styling)
- shadcn/ui components (Switch, Button, Card, Input)


## 🛠️ Installation

Clone the repository:

```bash
git clone https://github.com/flavianokoth/todo-app.git
cd todo-react-app
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
The app will be available at http://localhost:3000

📁 Folder Structure
arduino
Copy
Edit
src/
├── components/
│   ├── AddTask.jsx
│   ├── Task.jsx
│   └── ListTask.jsx
├── App.js
└── index.js
🧩 Components
AddTask
Input + Button to add a task

Lifts new task to parent component

Task
Displays task description

Editable inline

Toggle isDone status using a switch

ListTask
Manages all tasks

Filters tasks based on user selection

✨ Future Improvements
❌ Delete task functionality

💾 Save to localStorage

⏳ Due dates and priorities

🌐 Backend integration

📄 License
This project is open source and available under the MIT License.

Made with ❤️ by Flavian Okoth# gomycode-todoo-app
