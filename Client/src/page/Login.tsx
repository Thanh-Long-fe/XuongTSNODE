import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { schemaLog } from '../schema'
import axiosInstance from '../axios/index';
import { useNavigate } from 'react-router';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schemaLog)
  })
  const nav = useNavigate()
    const [check, setCheck] = useState(false)

  const onSubmit = (data) => {
    (async () => {
      try {
       const res =  await axiosInstance.post('/login', data)
       if (res.data.user?.admin) {
        localStorage.setItem('user',JSON.stringify(res.data))
        nav('/admin')
       }
       else{
        localStorage.setItem('user',JSON.stringify(res.data))
        nav('/')
       }
      } catch (error) {

       if (error.response.data == "Cannot find user") {
        setCheck(true);
       
       }
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
          {check && <p className='text-danger'>Email hoặc mật khẩu không chính xác</p>}
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
          {check && <p className='text-danger'>Email hoặc mật khẩu không chính xác</p>}
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>

  )
}

export default Login
