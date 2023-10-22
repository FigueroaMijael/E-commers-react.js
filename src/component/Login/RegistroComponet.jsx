import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import useAuth from '../../Hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const RegistroComponet = () => {

const {signUp} = useAuth()

const navigate = useNavigate()

const {register, handleSubmit, formState: {errors}, watch, reset }= useForm()

const onSubmit = handleSubmit( async(data, e) => {
    e.preventDefault()

     const db = getFirestore();
    const orderCollection = collection(db, "users");
        addDoc(orderCollection, data)
            .then(res => console.log(res))
            .catch(err => console.log(err)) 
 
            try {
                await signUp(data.email, data.password)
                navigate('/')
            } catch (error) {
                console.log(error)
            }
})




  return (

    <section className='BodySection'>
        <form className='formBody' onSubmit={onSubmit}>
    <label className='formTitle' htmlFor="name">Ingrese nombre de usuario</label>
    <input className='formInput' type="text" 
    {...register("name", {
        required: {
            value: true,
            message: "Nombre es requerido"
        },
        minLength: {
            value: 8,
            message: "Usuario debe tener al menos 8 caracteres"
        },
        maxLength: {
            value: 20,
            message: "Usuario debe ser menor a 20 caracteres"
        },
    })}/>
    {
        errors.name && <span className='formError'> {errors.name.message} </span>
    }

    <label className='formTitle' htmlFor="email">Ingrese email</label>
    <input className='formInput' type="text"
     {...register("email", {
        required: {
            value: true,
            message: "Email es requerido"
        },
        pattern: {
        value: "",
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

    <label className='formTitle' htmlFor="ConfirmPassword">Confirmar Contraseña</label>
    <input className='formInput' type="password"
    {...register("ConfirmPassword", {
        required: {
            value: true,
            message: " Confirmar contraseña es requerida"
        },
        validate: value => value === watch('password') || 'Los password no coinciden'
    })} />
    {
        errors.ConfirmPassword && <span className='formError'> {errors.ConfirmPassword.message} </span>
    }


    <label className='formTitle' htmlFor="FdN">Ingrese Fecha de nacimiento</label>
    <input className='formInput' type="date"
    {...register("FdN", {
        required: {
            value: true,
            message: "Fecha de nacimiento requerida"
        },
        validate: (value) => {
            const fechaDeNacimiento = new Date(value)
            const fechaActual = new Date()

            const edad = fechaActual.getFullYear() - fechaDeNacimiento.getFullYear()

            return edad >= 18 || "Debe ser mayor de edad";
        },
    })} />
    {
        errors.FdN && <span className='formError'> {errors.FdN.message} </span>
    }

    <label className='formTitle' htmlFor="checkbox">Acepto terminos y condiciones</label>
    <input className='formInput' type="checkbox"
    {...register("checkbox", {
        required: true,
    })} />
    {
        errors.checkbox && <span className='formError'>Requerido</span>
    }

    <button>Registrame</button>
    <span>Ya tenes una cuenta? <Link to={'/login'}>Ingresar</Link></span>
</form>

<pre>
    {JSON.stringify(watch(), null, 2)}
</pre>
    </section>

  )
}

export default RegistroComponet