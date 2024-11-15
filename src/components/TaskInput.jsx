import React, { useState } from 'react'

const TaskInput = ({ onAddingTask }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');

    const handleClick = () => {
        if (title.trim() && description.trim()) {
            onAddingTask(
                {
                    id: Date.now(),
                    title,
                    description,
                    priority,
                    completed: false
                }
            );
            setTitle('');
            setDescription('');
        }
    }

    return (
        <section className='absolute w-full flex flex-col justify-center items-center gap-5 mt-20 ' >

            <div className='flex gap-5 mt-5' >
                <input type="text" placeholder='Task Title' value={title} onChange={(e) => setTitle(e.target.value)} className='focus:outline-none border-2 rounded  border-slate-400 hover:border-slate-500' />

                <select value={priority} onChange={(e) => setPriority(e.target.value)} className=' focus:outline-none rounded border-2 border-slate-400 hover:border-slate-500 ' >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

            </div>

            <div className='flex flex-row justify-center items-center gap-3'>
                <textarea placeholder='Task Description' value={description} onChange={(e) => setDescription(e.target.value)} rows={4}
                    className='w-[20rem] border-2 focus:outline-none  border-slate-400 hover:border-slate-500 rounded '></textarea>

                <button onClick={handleClick} className="text-white bg-black py-2 px-3 rounded focus:outline-none border-none font-bold leading-normal font-sans" >
                    Add Task
                </button>
            </div>







        </section>
    )
}

export default TaskInput
