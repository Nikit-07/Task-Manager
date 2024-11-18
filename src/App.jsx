import React, { useEffect, useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList';
import TaskSearch from './components/TaskSearch';

const App = () => {

  const[tasks, setTasks] = useState([]);
  const[searchQuery, setSearchQuery]= useState('');

  // Retrive tasks from the local storage if task are saved otherwise retur empty array
  // Will only run on initial render or page reloads

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    console.log("Retrived from local storage: ", savedTasks);

    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      console.log("Parsed Tasks: ", parsedTasks);
      setTasks(parsedTasks);
    }
  }, [])


  // save tasks to local storage whenever the tasks are added
  useEffect(() => {
    if (tasks.length > 0) {
      console.log("Saving tasks to localStorage:", tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    else {
      console.log("No tasks to save. Removing from localStorage.");
      localStorage.removeItem('tasks');
    }
  }, [tasks])

  // adding a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  // delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => (
      task.id !== taskId
    )))
  }

  // handle search query
  const handleSearchChange= (query)=>{
    setSearchQuery(query);
  }


  // filtering the task based on search query
  const filteredTask=
  searchQuery.trim() === "" ? tasks : tasks.filter( (task)=>(
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  ) )
console.log('filtered task is',filteredTask);



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
        <TaskSearch onSearchChange={handleSearchChange}/>
      </section>



      <section>

        <TaskList tasks={filteredTask} onDeleteTask={deleteTask} isSearching={searchQuery.trim()===""}/>

      </section>
    </main>

  )
}

export default App
