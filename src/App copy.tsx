import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './App.css';

function App() {

  const val = yup.object().shape({
    name: yup.string().typeError('Должно быть строкой').required('обязательно').min(5, 'min 5'),
    lastname: yup.string().typeError('Должно быть строкой').required('обязательно').min(5, 'min 6')
  })

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(val),
    mode: 'onChange'
  });

  const onSubmit = (data: any) => console.log('отправлено:', data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <Controller
        name='name'
        control={control}
        render={({
          field: { onChange, value, name },
        }) => (
          <>
            <p>First name</p>
            <input
              onChange={onChange}
              value={value}
              name={name}
            />
            <p>{!!errors.name && errors.name.message}</p>
          </>
        )}
      />

      <hr />
      <Controller
        name='lastname'
        control={control}
        render={({
          field: { onChange, value, name },
        }) => (
          <>
            <p>Last name</p>
            <input
              onChange={onChange}
              value={value}
              name={name}
            />
            <p>{!!errors.name && errors.name.message}</p>
          </>
        )}
      />
      <hr />
      <Controller
        name='name'
        control={control}
        render={({
          field: { onChange, value, name },
        }) => (
          <>
            <p>Email</p>
            <input
              onChange={onChange}
              value={value}
              name={name}
            />
            <p>{!!errors.name && errors.name.message}</p>
          </>
        )}
      />
      <hr />
      <Controller
        name='name'
        control={control}
        render={({
          field: { onChange, value, name },
        }) => (
          <>
            <p>Confirm email</p>
            <input
              onChange={onChange}
              value={value}
              name={name}
            />
            <p>{!!errors.name && errors.name.message}</p>
          </>
        )}
      />
      <hr />
      <Controller
        name='name'
        control={control}
        render={({
          field: { onChange, value, name },
        }) => (
          <>
            <p>Password</p>
            <input
              onChange={onChange}
              value={value}
              name={name}
            />
            <p>{!!errors.name && errors.name.message}</p>
          </>
        )}
      />
      <hr />
      <Controller
        name='name'
        control={control}
        render={({
          field: { onChange, value, name },
        }) => (
          <>
            <p>Confirm password</p>
            <input
              onChange={onChange}
              value={value}
              name={name}
            />
            <p>{!!errors.name && errors.name.message}</p>
          </>
        )}
      />
      <hr />
      <input type="submit" />
    </form>
  );
}

export default App;