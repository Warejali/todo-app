import React from 'react';

const Todo = (props) => {
    const { title, desc } = props.todo;
    const { id } = props;
    const handleDelete = (id) => {
        props.removeTodo(id)
    }
    return (
        <div className='card bg-slate-600 shadow-xl py-5 my-5 text-white mx-auto w-96'>
            <div className='flex justify-evenly items-center'>
                <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
                <div>
                    <button onClick={() => handleDelete(id)} class="btn btn-primary btn-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Todo;