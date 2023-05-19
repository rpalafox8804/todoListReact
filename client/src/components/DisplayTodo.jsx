import React from 'react'
import "../App.css"

const DisplayTodo = ({ allTodos, setAllTodos }) => {

    const handleTodoDelete = (delI) => {
        const filteredTodos = allTodos.filter((todo, i) => {
            return i !== delI;
        });
        setAllTodos(filteredTodos);
    };   
        const handleCheckboxComplete = (i) => {
            const updatedTodos = allTodos.map((todo, index) => {
                if (index === i) {
                    todo.isComplete = !todo.isComplete;
                }
                return todo;
            });
            setAllTodos(updatedTodos);
        }
        return (

            <div className='row'>
                {
                    allTodos.map((todo, i) => {
                        const todoClasses = ["fs-3", "mx-2"];
                        if (todo.isComplete) {
                            todoClasses.push("text-decoration-line-through");
                        }
                        return (
                            <div className="d-flex justify-content-center mx-4" key={i}>
                                <label className={todoClasses.join(" ")}>{todo.task} </label>
                                <input type="checkbox" onChange={(event) => {
                                    handleCheckboxComplete(i);
                                }} checked={todo.isComplete} />
                                <button className='btn btn-danger mx-2' onClick={(event) => {
                                    handleTodoDelete(i);
                                }}>Delete</button>

                            </div>
                        );

                    }

                    )
                }
            </div>
        )
    
}

export default DisplayTodo;