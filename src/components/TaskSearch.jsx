import React, { useState } from 'react'

const TaskSearch = ({onSearchChange}) => {

    const handleSearchChange = (e) => {
        onSearchChange(e.target.value);  
      };

  return (
    <section className='absolute w-full mt-[18rem]'>
        <div className=' flex justify-center items-center   '>
        <input 
        className='focus:outline-none border-2 rounded  border-slate-400 hover:border-slate-500 break-words
        p-1'
        type="text"
        placeholder="Search tasks by title..."
        onChange={handleSearchChange}
      />

        </div>
    </section>
  )
}

export default TaskSearch
