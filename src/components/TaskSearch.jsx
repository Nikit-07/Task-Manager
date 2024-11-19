import React, { useState } from 'react'

const TaskSearch = ({ onSearchChange, setSortByPriority, sortByPriority }) => {

    const handleSearchChange = (e) => {
        onSearchChange(e.target.value);
    };

    const handleSortByPriority = (e) => {
        setSortByPriority(prev => !prev)
    }

    return (
        <section className='absolute w-full mt-[18rem]'>
            <div className=' flex justify-center items-center space-x-20   '>
                <input
                    className='focus:outline-none border-2 rounded  border-slate-400 hover:border-slate-500 break-words
        p-1'
                    type="text"
                    placeholder="Search tasks by title..."
                    onChange={handleSearchChange}
                />

                <div className='flex space-x-2 justify-center items-center '>
                    <p className='font-bold text-xl'>
                    { sortByPriority ? 'Sort By Completion: ' : 'Sort By Priority: '}
                    </p>
                    <button className='text-white bg-black py-1 px-3 rounded focus:outline-none border-none font-bold leading-normal font-sans'
                        onClick={handleSortByPriority}>
                        Sort
                    </button>
                </div>

            </div>
        </section>
    )
}

export default TaskSearch
