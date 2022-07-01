import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const NewTodo = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url = 'https://conservative-donair-21272.herokuapp.com/todo';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success("Your task has been added")

            })
    };


    return (
        <div className='card bg-slate-600 shadow-xl p-10 lg:w-96 mx-auto'>
            <h2 className='text-center text-2xl uppercase py-5 text-white'>Please Added New Task</h2>
            <form className='flex flex-column form-control' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-4 input input-bordered' placeholder='Name' {...register("name")} />
                <textarea className='mb-4 textarea' placeholder='description' {...register("description")} />
                <input className='button-style btn btn-primary' type="submit" value='Add New Task' />
            </form>
        </div>
    );
};

export default NewTodo;