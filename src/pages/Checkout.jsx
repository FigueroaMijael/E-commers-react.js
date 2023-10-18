import React, { useContext, useState } from 'react'
import CartContext from '../Context/CartContext/CartContext'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, getFirestore } from "firebase/firestore"
/*
    batch.commit(): La función commit se utiliza para ejecutar todas las operaciones de escritura en el batch en Firestore. 
    Esto garantiza que todas las operaciones se realicen de manera atómica, lo que significa que se ejecutan en su totalidad o 
    no se ejecutan en absoluto. Después de ejecutar el batch, 
    puedes usar el método .then() para manejar el éxito y el método .catch() para manejar cualquier error que pueda ocurrir durante el proceso 
    de escritura.
    En este caso, cuando batch.commit() se ejecuta con éxito, se mostrará el mensaje "Se ejecutó el batch de actualización".
    Si ocurre algún error durante la ejecución del batch, se mostrará el mensaje "Ocurrió un error al ejecutar el batch".
          // Obtener el ID del pedido de los parámetros de la URL
   /*  const { orderId } = useParams() */

    // Función para actualizar un solo pedido
   /*  const updateOrder = () => { */
      // Obtener una instancia de Firestore
/*       const db = getFirestore() */
  
      // Crear una referencia al documento del pedido
     /*  const orderDoc = doc(db, "orders", orderId)
   */
      // Actualizar el documento con una nueva propiedad llamada "otroTotal" con valor 2000
      /* updateDoc(orderDoc, { otroTotal: 2000 })
        .then(res => console.log(res ,"Orden actualizada"))
        .catch(err => console.log(err, "Ocurrió un error al actualizar la orden"))
    } */
  
    // Función para actualizar varios pedidos en un batch
 
      // Obtener una instancia de Firestore
      /* const db = getFirestore() */
  
      // Crear un batch de escritura
/*       const batch = writeBatch(db)
   */
      // Crear referencias a los documentos de los pedidos que se van a actualizar
/*       const doc1 = doc(db, "orders", "72NEYjnJTq9wN1bFOR6S")
      const doc2 = doc(db, "orders", "IaWn8Rfukjk8CJRc2Lql")
      const doc3 = doc(db, "orders", "RuzOR9hCPiehppOsuNCw") */
  
      // Procesar el pago y actualizar los pedidos en el batch
/*       batch.update(doc1, { total: 1000 }); */ // Actualiza el primer pedido con un nuevo valor para "total"
  
/*       batch.set(doc2, { otraProp: "Otra PROP con SET II", total: 600 }, { merge: true }); */
      // Establece un nuevo valor para "otraProp" y "total" en el segundo pedido, fusionando con datos existentes
  
/*       batch.set(doc3, { unicaProp: "Doc nuevo" }, { merge: false }); */
      // Establece una nueva propiedad llamada "unicaProp" en el tercer pedido, sin fusionar datos existentes
  
      // Ejecutar el batch de escritura
/*       batch.commit()
        .then(() => console.log("Se ejecutó el batch de actualización"))
        .catch(err => console.log( err, "Ocurrió un error al ejecutar el batch"))
    } */


const Checkout = () => {

  const [buyer, setBuyer] = useState({
    email: "",
    slcPaises: "",
    name: "",
    surname: "",
    dni: "",
    direccionEnvio: "",
    typeOfDomicile: "",
    cp: "",
    city: "",
    slcProvinciaEstado: "",
    telNo: "",
    dateOfDelivery: ""    
  })
  const [errors, setErrors] = useState({
    email: "",
    slcPaises: "",
    name: "",
    surname: "",
    dni: "",
    direccionEnvio: "",
    typeOfDomicile: "",
    cp: "",
    city: "",
    slcProvinciaEstado: "",
    telNo: "",
    dateOfDelivery: ""    
  })

  const [orderId, setOrderId] = useState("")

    const { cart, clear } = useContext(CartContext)

    const navigate = useNavigate

    const addToCart = () => {
        const purchase = {
            buyer,
            items: cart,
            date: new Date(),
            total: cart.reduce((acc, el) => acc + el.price * el.quantity, 0)
        };

        console.log(purchase)

/*         const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, purchase)
            .then(res => navigate(`/checkout/${res.id}`))
            .catch(err => console.log(err))
        
        clear() */
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

      if(!buyer.name) {
        errorLocal.name = "El nombre es obligatorio"
    };
    if(!buyer.email) {
        errorLocal.email = "El email es obligatorio"
    };

    if (Object.keys(errorLocal).length === 0) {

        addToCart();
    } else {

        setErrors(errorLocal);
    }
    }

    console.log(buyer)

    return (
      <form>
        <div>
          <p>Contacto<small>tienes una cuenta? <a href="">iniciar session</a></small></p>
        <label>email</label>
        <input 
        className={errors.email ? "error" : ""} 
        type="text" 
        name="email" 
        id="email" 
        placeholder='Correo electronico' 
        onChange={handleChange} 
        value={buyer.email} />
        <p>
          <input 
          type="checkbox" 
          name="" 
          id=""/>
          <small>Enviarme novedades y ofertas por correo electrónico</small>
          </p>
        </div>
        
        <div>
          <h3>Entrega</h3>

          <label for="slcPaises">Pais/region</label> 
          <select 
          name='slcPaises'
          id='slcPaises'
          className={errors.slcPaises ? "error" : ""}
          onChange={handleChange}
          value={buyer.slcPaises}
          >
            <option value="ar">Argentina</option>
            <option value="uy">Uruguay</option>
            <option value="br">Brasil</option>
          </select>

          <br />
          
          <label>Nombre</label>
          <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder='Nombre'
          className={errors.name ? "error" : ""} 
          onChange={handleChange} 
          value={buyer.name} 
          />

          <label>Apellido</label>
          <input 
          type="text" 
          name="surname" 
          id="surname" 
          placeholder='Apellido'
          className={errors.surname ? "error" : ""} 
          onChange={handleChange} 
          value={buyer.surname} 
          />

          <br />

          <label>DNI</label>
          <input 
          type="text" 
          name="dni" 
          id="dni" 
          placeholder='DNI'
          className={errors.dni ? "error" : ""} 
          onChange={handleChange} 
          value={buyer.dni} 
          />

          <br />

          <label>Direccion</label>
          <input 
          type="text" 
          name="direccionEnvio" 
          id="direccionEnvio" 
          placeholder='Direccion del envio'
          className={errors.direccionEnvio ? "error" : ""} 
          onChange={handleChange} 
          value={buyer.direccionEnvio} 
          />

          <br />
          
          <label>Casa, Departamento, etc (opcional)</label>
          <input 
          type="text" 
          name="typeOfDomicile" 
          id="typeOfDomicile" 
          placeholder='Casa, Departamento, etc (opcional)'
          className={errors.typeOfDomicile ? "error" : ""} 
          onChange={handleChange} 
          value={buyer.typeOfDomicile}  
          />

          <br />

          <label>Codigo posta</label>
          <input 
          type="text" 
          name="cp" 
          id="cp" 
          placeholder='Codigo posta'
          className={errors.cp ? "error" : ""} 
          onChange={handleChange} 
          value={buyer.cp}  
          />

          <label>Ciudad</label>
          <input 
          type="text" 
          name="city" 
          id="city" 
          placeholder='Ciudad'
          className={errors.city ? "error" : ""}  
          onChange={handleChange} 
          value={buyer.city} 
          />

          <label for="slcProvinciaEstado">Provincia / Estado</label> 
          <select 
          id="slcProvinciaEstado"
          name='slcProvinciaEstado'
          className={errors.slcProvinciaEstado ? "error" : ""} 
          onChange={handleChange} 
          value={buyer.slcProvinciaEstado} 
          >
            <option value="BsAs">Buenos Aires(Provincia)</option>
            <option value="MZA">Mendoza</option>
            <option value="CBA">Cordoba</option>
          </select>

          <br />

          <label>Num. telefono</label>
          <input
          id="telNo"
          name="telNo"
          type="tel"
          size="20"
          maxlength="10"
          placeholder='Num. telefono' 
          className={errors.telNo ? "error" : ""} 
          onChange={handleChange} 
          value={buyer.telNo} 
          />
          <br />

          <label>Seleccione fecha de Entrega</label>
          <input 
          type="month" 
          name="dateOfDelivery" 
          id="dateOfDelivery" 
          placeholder=''
          className={errors.dateOfDelivery ? "error" : ""} 
          onChange={handleChange} 
          value={buyer.dateOfDelivery}
          />

          <br />

          <input type="reset" name="restablecer" id="" value="Borrar todo"/>

          <br />

          {
            cart.length > 0 &&
            <button className='btn btn-primary' onClick={addToCart}>PAGAR AHORA</button>
          }
          {
            orderId && <span>Oreder created: {orderId}</span>
          }
        </div> 
      </form>
    )
}

export default Checkout