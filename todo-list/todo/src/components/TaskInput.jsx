import React from 'react'
import { useState } from 'react'
import '../components/TaskInput.css'


const TaskInput = ({addTask}) => {

    const [task, setTask] = useState()

    const handleInputChange = (event) => {
        setTask(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        if(task.trim() !=='') {
            addTask(task);
            setTask('')
        }
        
    }

    return (
        <div className='formStyling'>
            <form onSubmit={onchange}>
                <input
                    value={task}
                    name="query"
                    onChange={handleInputChange} />
                <button type="submit" onSubmit={handleSubmit}>Submit</button>

            </form>
        </div>
    )
}

export default TaskInput
