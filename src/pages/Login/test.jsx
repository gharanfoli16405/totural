import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />

      <input {...register("gender", { required: true })} type="radio" value="mail" />
      <input {...register("gender", { required: true })} type="radio" value="femail" />
      <select {...register("counties")}>
        <option value="iran ">iran </option>
        <option value="Iraq">Iraq</option>
      </select>
      <input type="checkbox" placeholder="favorites" {...register} />
      <input type="number" placeholder="age" {...register} />

      <input type="submit" />
    </form>
  );
}