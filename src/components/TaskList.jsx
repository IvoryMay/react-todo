import React, { useContext } from 'react'
import Task from './Task';
import TaskContext from '../context/TaskContext';

const TaskList = () => {

  const {tasks} = useContext(TaskContext);


  return (
    <div>
      <h3 className='text-xl font-bold font-serif mb-3'>Task List
        (Total {tasks.length}, Done {tasks.filter((el) => el.isDone).length})
      </h3>
      {tasks.map((el)=> (
        <Task job={el} key={el.id}  />
        ))}
    </div>
  )
}

export default TaskList