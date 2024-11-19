import React from 'react'

const TaskList = ({ tasks, onDeleteTask, isSearching, onToogle }) => {
    return (
        <section className='absolute w-full  flex justify-center items-center mt-[22rem] ' >
            <div className='bg-white p-2 rounded-lg shadow-md w-[40%]  '>
                <h2 className='text-2xl font-bold text-center text-gray-800 mb-4  '>Task Lists</h2>
                {tasks.length === 0 ? (
                    isSearching ?
                        <p className='text-center p-2 text-gray-500'>No tasks available</p>
                        :
                        <p className='text-center p-2 text-gray-500'>No tasks found. Try adding one or clear your search.</p>
                ) : (
                    <div className='flex items-start justify-start m-10 max-w-full' >
                        <ul className=' list-disc w-full'>
                            {tasks.map((task) => (
                                <li key={task.id} className='border-b border-gray-200 py-5 flex items-center justify-between'>
                                    <div >
                                        <h3 className={`font-medium text-lg break-words ${task.completed ? 'line-through text-gray-500' : 'text-gray-800 ' } `}>

                                        {task.title}                                           
                                        </h3>

                                        <p className={`break-words ${task.completed ? 'line-through text-gray-400' : 'text-gray-600 '} `}>
                                            {task.description}
                                            </p>
                                        <p className={`text-sm ${task.completed ? 'line-through text-gray-300' : 'text-gray-500' } `}>
                                            
                                            Priority: {task.priority}
                                            </p>
                                    </div>
                                    <div className='flex items-center justify-center gap-6'>
                                        {/* Checkbox for marking taks as completed */}
                                        <input type="checkbox"
                                            checked={task.completed}
                                            className='cursor-pointer w-5 h-5 rounded border-gray-300'
                                            onChange={ ()=> onToogle(task.id)}
                                        />

                                        {/* Button for deleting individula tasks */}
                                        <button className='text-white bg-black py-1 px-1 mt-2 rounded focus:outline-none border-none font-bold leading-normal font-sans' onClick={() => onDeleteTask(task.id)} >Delete</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>

        </section>
    )
}

export default TaskList
