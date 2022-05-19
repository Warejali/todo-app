import React, { useState } from 'react';
import { toast } from 'react-toastify';

const NewTodo = ({ handleTodo }) => {
    const [todo, setTodo] = useState({ title: "", desc: "" })



    const handleChange = event => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return { ...oldTodo, [name]: event.target.value }
        })
    }

    const formSubmit = event => {
        event.preventDefault();
        handleTodo(todo)
        toast.success('Successfully Added')
    }


    return (
        <div className='card bg-slate-600 shadow-xl py-5'>
            <form onSubmit={formSubmit} className='flex flex-col gap-5 mx-auto justify-center items-center lg:w-96'>
                <input onChange={handleChange} type="text" name='title' placeholder="Type title of todo" class="input input-bordered input-primary w-full max-w-xs" />
                <input onChange={handleChange} type="text" name='desc' placeholder="Type description of todo" class="input input-bordered input-primary w-full max-w-xs" />
                <button className='btn btn-primary btn-sm'>Add NEW TO DO</button>
            </form>
        </div>
    );
};

export default NewTodo;