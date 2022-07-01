import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Todo = ({refetch, todo}) => {
    const { name, description } = todo;

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/todo')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are You sure to delete?');
        if (proceed) {
            const url = `http://localhost:5000/todo/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = todos.filter(t => t._id !== id);
                    setTodos(remaining);
                    toast.success("Product has been deleted")
                    refetch()
                })
        }
    }
    return (
        <div className='card bg-slate-600 shadow-xl py-5 my-5 text-white mx-auto w-96'>
            <div className='flex justify-evenly items-center'>
                <div>
                    <h3 className='text-2xl'>{name}</h3>
                    <p>{description}</p>
                </div>
                <div>
                    <button onClick={() => handleDelete(todo._id)} class="btn btn-primary btn-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Todo;