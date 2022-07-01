import React from 'react';
import Loading from './Loading';
import Todo from './Todo';
import { useQuery } from 'react-query';

const Todos = () => {

    const { data: todos, isLoading, refetch } = useQuery('todos', () => fetch('https://conservative-donair-21272.herokuapp.com/todo').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='h-screen'>
        {
            todos.map(todo => <Todo todo={todo} refetch={refetch}></Todo>)
        }

    </div>
    );
};

export default Todos;