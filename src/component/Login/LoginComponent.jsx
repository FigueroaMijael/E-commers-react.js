import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const LoginComponent = () => {
    
const {sigIn, login} = useAuth()

const navigate = useNavigate()

const [error, serError] = useState()

const {register, handleSubmit, formState: {errors}} = useForm()

const onSubmit = handleSubmit(async (data, e) => {
    e.preventDefault()
        serError('')

            try {
                await login(data.email, data.password)
                navigate('/')
            } catch (error) {
                serError(error.message )
            }
})

  return (
   <section className='BodySection'>

    {error && <p>{error}</p>}

     <form className='formBody' onSubmit={onSubmit}>
     <label className='formTitle' htmlFor="email">Ingrese email</label>
    <input className='formInput' type="email"
     {...register("email", {
        required: {
            value: true,
            message: "Email es requerido"
        },
        pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: "correo no valido"}
    })}/>
    {
        errors.email && <span className='formError'> {errors.email.message} </span>
    }

<label className='formTitle' htmlFor="password">Contraseña</label>
    <input className='formInput' type="password"
    {...register("password", {
        required: {
            value: true,
            message: "Contraseña es requerida"
        },
        minLength: {
            value: 6,
            message: "La contraseña debe tener minimo 6 caracteres"
        }
    })}/>
    {
        errors.password && <span className='formError'> {errors.password.message}</span>
    }

        <button>Ingresar</button>
        <span>Todavia no tenes una cuenta? <Link to={'/registro'}>REGISTRATE</Link></span>
    </form>
   </section>
  )
}

export default LoginComponent