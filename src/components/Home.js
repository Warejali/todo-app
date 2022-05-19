import React, { useState } from 'react';
import NewTodo from './NewTodo';
import Todos from './Todos';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const Home = () => {
    const [todos, setTodos] = useState([])

    const handleTodo = todo => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), todo }]
        })
        console.log(todos);
    }

    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            const filterItem = prevTodos.filter((todo) => todo.id !== id)
            return filterItem;
        })
        toast.success('Successfully Deleted')
    }
    return (
        <div className='bg-slate-900 lg:px-5 py-10 mx-auto'>
            <NewTodo handleTodo={handleTodo}></NewTodo>
            <Todos todos={todos} removeTodo={removeTodo}></Todos>
        </div>
    );
};

export default Home;