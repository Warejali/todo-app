import React from 'react';
import Loading from './Loading';
import Todo from './Todo';
import { useQuery } from 'react-query';

const Todos = () => {

    const { data: todos, isLoading, refetch } = useQuery('todos', () => fetch('http://localhost:5000/todo').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
        <h2 className='text-3xl text-accent p-5'>Total Products: {todos.length}</h2>
        {
            todos.map(todo => <Todo todo={todo} refetch={refetch}></Todo>)
        }

    </div>
    );
};

export default Todos;