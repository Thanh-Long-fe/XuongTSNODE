import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { confirmPasswordSchema, schemaLog } from '../schema'
import axiosInstance from '../axios/index';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const nav = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(confirmPasswordSchema)
  })
  

  const onSubmit = (data) => {
   
    (async () => {
      try {
        const {email,password} = data;
        const info = {email,password}
    
        await axiosInstance.post('/register', info)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Đăng kí thành công !",
          showConfirmButton: false,
          timer: 1500
        });
        nav('/login')
      } catch (error) {

      console.log(error);
      }
    })()
  }
  return (
    <div className="container login-main p-5">
      <form style={{ maxWidth: 700, margin: "0 auto" }} onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            {...register('email', { required: true })}
          />
          {errors.email && <p className='text-danger'>{errors.email.message}</p>}
         
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"

            {...register('password', { required: true })}
          />
          {errors.password && <p className='text-danger'>{errors.password.message}</p>}
         
        </div>
        <div className="mb-3">
          <label htmlFor="confirm" className="form-label">
            Confirm password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirm"

            {...register('confirm', { required: true })}
          />
          {errors.confirm && <p className='text-danger'>{errors.confirm.message}</p>}
         
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>

  )
}

export default Register
