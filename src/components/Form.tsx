import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

export type TData = {
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    password: string,
    confirmPassword: string
};

const schema = yup.object().shape({
    firstName: yup.string().required("Пожалуйста укажите имя"),
    lastName: yup.string().required("Поле с фамилией обязательно"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().max(99).required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null])
})

const Form = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });
    const submitForm = (data: TData | {}) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(submitForm)} >

            <Controller
                control={control}
                name='firstName'
                defaultValue=''
                render={({
                    field: { value, onChange, onBlur, name } }) => (
                    <>
                        <h2>FirstName</h2>
                        <input {...{ value, onChange, onBlur, name }} />
                        <p>{errors.firstName?.message}</p>
                    </>
                )}
            />
            <Controller
                control={control}
                name='lastName'
                defaultValue=''
                render={({
                    field: { value, onChange, onBlur, name } }) => (
                    <>
                        <h2>LastName</h2>
                        <input {...{ value, onChange, onBlur, name }} />
                        <p>{errors.lastName?.message}</p>
                    </>
                )}
            />
            <Controller
                control={control}
                name='email'
                defaultValue=''
                render={({
                    field: { value, onChange, onBlur, name } }) => (
                    <>
                        <h2>email</h2>
                        <input {...{ value, onChange, onBlur, name }} />
                        <p>{errors.email?.message}</p>
                    </>
                )}
            />
            <Controller
                control={control}
                name='age'
                defaultValue=''
                render={({
                    field: { value, onChange, onBlur, name } }) => (
                    <>
                        <h2>age</h2>
                        <input {...{ value, onChange, onBlur, name }} />
                        <p>{errors.age?.message}</p>
                    </>
                )}
            />
            <Controller
                control={control}
                name='password'
                defaultValue=''
                render={({
                    field: { value, onChange, onBlur, name } }) => (
                    <>
                        <h2>password</h2>
                        <input type='password' {...{ value, onChange, onBlur, name }} />
                        <p>{errors.password?.message}</p>
                    </>
                )}
            />
            <Controller
                control={control}
                name='confirmPassword'
                defaultValue=''
                render={({
                    field: { value, onChange, onBlur, name } }) => (
                    <>
                        <h2>confirmPassword</h2>
                        <input type='password' {...{ value, onChange, onBlur, name }} />
                        <p>{errors.confirmPassword?.message}</p>
                    </>
                )}
            />
            <input type="submit" />
        </form>
    )
}

export default Form;