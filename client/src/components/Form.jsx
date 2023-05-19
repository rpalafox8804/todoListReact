import React, { useState } from 'react'

const Form = ({allTodos, setAllTodos}) => {
    const [todo, setTodo] = useState({
        task: '',
        isComplete: false
    })
    const changeHandler = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setAllTodos([...allTodos, todo])
        setTodo({
            task: '',
            isComplete: false
        })
    }
    
    return (
        <div className='row mt-4'>
            <form action="" className='col-4 mx-auto'onSubmit={submitHandler}>
                <div className='form-group'>
                    {todo.task && todo.task.length < 2 ? <p className='text-danger'>Todo must be at least 2 characters</p> : null}
                    <label htmlFor="task" className='form-label'>Todo Item:</label>
                    <input type="text" name="task" id='task' className='form-control' onChange={changeHandler} value={todo.task}/>
                    <input type="hidden" name="isComplete" id='isComplete' className='form-control' onChange={changeHandler} value={todo.isComplete}/>
                </div>
                
                <button className='btn btn-primary my-4'>Add</button>
            </form>
        </div>
    )
}

export default Form