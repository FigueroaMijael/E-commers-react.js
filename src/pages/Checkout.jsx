import React, { useContext, useState } from 'react'
import CartContext from '../Context/CartContext/CartContext'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import FormData from '../component/Form/FormData'


const Checkout = () => {

  const [buyer, setBuyer] = useState({
    email: "",
    name: "",
    surname: "",
    slcPaises: "",
    dni: "",
    direccionEnvio: "",
    dayOfDelivery: "",
    typeOfDomicile: "",
    cp: "",
    city: "",
    slcProvinciaEstado: "",
    telNo: "",  
  })
  const [errors, setErrors] = useState({
    email: "",
    name: "",
    surname: "",
    slcPaises: "",
    dni: "",
    direccionEnvio: "",
    dayOfDelivery: "",
    typeOfDomicile: "",
    cp: "",
    city: "",
    slcProvinciaEstado: "",
    telNo: "",  
  })

  const [orderId, setOrderId] = useState("")

    const { cart, clear } = useContext(CartContext)

    const navigate = useNavigate()

    const addToCart = () => {
        const purchase = {
            buyer,
            items: cart,
            date: new Date(),
            total: cart.reduce((acc, el) => acc + el.price * el.quantity, 0)
        };

        console.log(purchase)

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, purchase)
            .then(res => navigate(`/checkout/${res.id}`))
            .catch(err => console.log(err))
        
        clear()
    }

    const handleChange = (e) => {
      const { target } = e;
      setBuyer({
        ...buyer,
        [ target.name ] : target.value
      })
    }

    const onSubmit = (e) => {
      e.preventDefault()
      const errorLocal = {};
      
      if(!buyer.email) {
        errorLocal.email = "El email es obligatorio"
      };
      if(!buyer.name) {
        errorLocal.name = "El nombre es obligatorio"
      };
      if(!buyer.surname) {
        errorLocal.surname = "El Apellido es obligatorio"
      };
      if(!buyer.slcPaises) {
        errorLocal.slcPaises = "La seleccion de tu pais es obligatoria"
      };
      if(!buyer.dni) {
        errorLocal.dni = "El DNI es obligatorio"
      };
      if(!buyer.direccionEnvio) {
        errorLocal.direccionEnvio = "La dirrecion es obligatoria"
      };
      if(!buyer.dayOfDelivery) {
        errorLocal.dayOfDelivery = "Seleccionar el dia de la entrega es obligatorio"
      };
      if(!buyer.cp) {
        errorLocal.cp = "El codigo postal es obligatorio"
      };
      if(!buyer.city) {
        errorLocal.city = "La Cuidad es obligatoria"
      };
      if(!buyer.slcProvinciaEstado) {
        errorLocal.slcProvinciaEstado = "La provincia/Estado es obligatoria"
      };
      if(!buyer.telNo) {
        errorLocal.telNo = "El Tel es obligatorio"
      };
      if (Object.keys(errorLocal).length === 0) {
        addToCart();
      } else {
        setErrors(errorLocal);
      }
    }

    console.log(buyer)

    return (

      <div>
        <FormData 
        formdata = { buyer }
        inputchange = { handleChange }
        onsubmit = { onSubmit }
        errors = { errors }
        />
          {
            cart.length > 0 &&
            <button className='btn btn-primary' onClick={onSubmit}>PAGAR AHORA</button>
          }
          {
            orderId && <span>Oreder created: {orderId}</span>
          }
        </div> 

    )
}

export default Checkout