# Task Manager

## Overview
The **Task Manager** application allows users to manage their tasks efficiently. Built with **React.js**, this application lets users:
- Add tasks with titles and priorities (High, Medium, Low).
- Mark tasks as completed and move them to the end of the list.
- Delete tasks.
- Filter tasks by title using a search function.
- Sort tasks by priority (High to Low) or by completion status (Completed tasks move to the bottom).
- Store tasks in **local storage** for persistence.

## Features
- **Task Input**: Add tasks to the list.
- **Search Functionality**: Filter tasks by title.
- **Task Priority**: Assign priority levels (High, Medium, Low).
- **Task Completion**: Mark tasks as completed, which will be moved to the end of the list.
- **Sorting**: Sort tasks by priority or completion status.
- **Persistence**: Tasks are saved in local storage, preserving them across sessions.

## Setup & Launch Process

### 1. Clone the Repository
To get started, clone the repository to your local machine:

git clone https://github.com/Nikit-07/task-manager.git

### 2. Install Dependencies
Navigate to the project directory and install the necessary dependencies:

cd task-manager
npm install

### 3. Start the Application
After installing the dependencies, run the application:

npm run dev

The app will be accessible in your browser at http://localhost:5173.

### 4. Build for Production (Optional)
To create a production build, use the following command:

npm run build
# or
yarn build
This will optimize the app for production.

## Assumptions Made During Development

- Tasks are managed via a simple interface that allows adding, completing, searching, and deleting tasks.
- All tasks are saved in local storage, so they persist across sessions.
- The app uses React.js hooks (`useState`, `useEffect`) for state management and side effects.
- Tasks have a priority level of High, Medium, or Low, and they can be sorted based on priority or completion status.
- Completed tasks are moved to the end of the task list.

## Screenshots

Here are some screenshots of the Task Manager application in action:
git 
### Task Input UI
![Task Input](/src/assets/screenshots/task-input.png)

### Task Completion Feature
![Task Completion](/src/assets/screenshots/task-completion.png)

### Task Sorting by Priority
![Task Sorting](/src/assets/screenshots/task-sorting.png)

### Task List View with Search and Filter
![Task List View](/src/assets/screenshots/task-list-view.png)