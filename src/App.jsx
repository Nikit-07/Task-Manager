import React, { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList';

const App = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => (
      task.id !== taskId
    )))
  }


  return (
    <main className=' min-h-screen  relative' >

      <section className=' w-full absolute'>

        <h1 className=' mt-10 flex items-center justify-center font-serif font-bold text-4xl' >Task Manager</h1>

      </section>

      {/* Input Field for tasks */}

      <section>

        <TaskInput onAddingTask={addTask} />

      </section>

      <section>

        <TaskList tasks={tasks} onDeleteTask={deleteTask} />

      </section>
    </main>

  )
}

export default App
