import React from 'react'

const TaskList = ({tasks, onDeleteTask}) => {
  return (
    <section className='absolute w-full  flex justify-center items-center mt-[20rem]' >
        <div className='bg-white p-2 rounded-lg shadow-lg w-[70%] '>
            <h2 className='text-3xl font-semibold text-center text-gray-800 mb-6  '>Task Lists</h2>
            {tasks.length === 0 ? (
               
                    <p className='text-center p-2'>No tasks available</p>
                
    
            ) : (
                <div>
                <ul>
                    {tasks.map( (task)=> (
                        <li key={task.id}>
                            <h3> {task.title} </h3>
                            <p>{task.description}</p>
                            <p>{task.priority}</p>
                            <button onClick={()=> onDeleteTask(task.id)} >Delete</button>
                        </li>
                    ))}
                </ul>
                </div>
            ) }
            
        </div>
    
    </section>
  )
}

export default TaskList
