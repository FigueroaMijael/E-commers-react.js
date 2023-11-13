import React from 'react'

const FormData = ({formdata, inputchange, onsubmit, errors}) => {

  return (
<section className='BodySection'>
    <form  className='formBody' onSubmit={onsubmit}>
        <div>
          <p className='formTitle' >Contacto <small>tienes una cuenta? <a href=''>iniciar session</a></small></p>
        <label className='formTitle'>email</label>
        <input 
        className={errors.email ? 'error' : 'formInput'} 
        type="text" 
        name="email" 
        id="email" 
        placeholder='Correo electronico' 
        onChange={inputchange} 
        value={formdata.email} 
        />
        {errors.email && <span className='errors'>{errors.email}</span>}
        <p>
          <input 
          type="checkbox" 
          name='formInput' 
          id=''/>
          <small>Enviarme novedades y ofertas por correo electrónico</small>
          </p>
        </div>
        
        <div>
          <h3 className='formTitle'>Entrega</h3>

          <label className='formTitle'>Pais/region</label> 
          <select 
          name='slcPaises'
          id='slcPaises'
          className={errors.slcPaises ? "error" : 'formInput'}
          onChange={inputchange}
          value={formdata.slcPaises}
          >
            <option value='formInput'>Selecciona tu pais de origen</option>
            <option value="ar">Argentina</option>
            <option value="uy">Uruguay</option>
            <option value="br">Brasil</option>
          </select>
          {errors.slcPaises && <span className='errors'>{errors.slcPaises}</span>}
          
          <label className='formTitle'>Nombre</label>
          <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder='Nombre'
          className={errors.name ? "error" : 'formInput'} 
          onChange={inputchange} 
          value={formdata.name} 
          />
          {errors.name && <span className='errors'>{errors.name}</span>}

          <label className='formTitle'>Apellido</label>
          <input 
          type="text" 
          name="surname" 
          id="surname" 
          placeholder='Apellido'
          className={errors.surname ? "error" : 'formInput'} 
          onChange={inputchange} 
          value={formdata.surname} 
          />
          {errors.surname && <span className='errors'>{errors.surname}</span>}

          <label className='formTitle'>DNI</label>
          <input 
          type="text" 
          name="dni" 
          id="dni" 
          placeholder='DNI'
          className={errors.dni ? "error" : 'formInput'} 
          onChange={inputchange} 
          value={formdata.dni} 
          />
          {errors.dni && <span className='errors'>{errors.dni}</span>}

          <label className='formTitle'>Direccion</label>
          <input 
          type="text" 
          name="direccionEnvio" 
          id="direccionEnvio" 
          placeholder='Direccion del envio'
          className={errors.direccionEnvio ? "error" : 'formInput'} 
          onChange={inputchange} 
          value={formdata.direccionEnvio} 
          />
          {errors.direccionEnvio && <span className='errors'>{errors.direccionEnvio}</span>}

          <label className='formTitle'>Seleccione fecha de entrega</label>
          <input
          type='date'
          name='dayOfDelivery'
          id='dayOfDelivery'
          className={errors.dayOfDelivery ? "error" : 'formInput'} 
          onChange={inputchange} 
          value={formdata.dayOfDelivery}
          />
          {errors.dayOfDelivery && <span className='errors'>{errors.dayOfDelivery}</span>}
          
          <label className='formTitle'>Casa, Departamento, etc (opcional)</label>
          <input 
          type="text" 
          name="typeOfDomicile" 
          id="typeOfDomicile" 
          placeholder='Casa, Departamento, etc (opcional)'
          className={errors.typeOfDomicile ? "error" : 'formInput'} 
          onChange={inputchange} 
          value={formdata.typeOfDomicile}  
          />
          {errors.typeOfDomicile && <span className='errors'>{errors.typeOfDomicile}</span>}

          <label className='formTitle'>Codigo posta</label>
          <input 
          type="text" 
          name="cp" 
          id="cp" 
          placeholder='Codigo posta'
          className={errors.cp ? "error" : 'formInput'} 
          onChange={inputchange} 
          value={formdata.cp}  
          />
          {errors.cp && <span className='errors'>{errors.cp}</span>}

          <label className='formTitle'>Ciudad</label>
          <input 
          type="text" 
          name="city" 
          id="city" 
          placeholder='Ciudad'
          className={errors.city ? "error" : 'formInput'}  
          onChange={inputchange} 
          value={formdata.city} 
          />
          {errors.city && <span className='errors'>{errors.city}</span>}

          <label className='formTitle'>Provincia / Estado</label> 
          <select 
          id="slcProvinciaEstado"
          name='slcProvinciaEstado'
          className={errors.slcProvinciaEstado ? "error" : 'formInput'} 
          onChange={inputchange} 
          value={formdata.slcProvinciaEstado} 
          >
            <option value='formInput'>Selecciona tu Provincia/Estado</option>
            <option value="BsAs">Buenos Aires(Provincia)</option>
            <option value="MZA">Mendoza</option>
            <option value="CBA">Cordoba</option>
          </select>
          {errors.slcProvinciaEstado && <span className='errors'>{errors.slcProvinciaEstado}</span>}

          <label className='formTitle'>Num. telefono</label>
          <input
          id="telNo"
          name="telNo"
          placeholder='Num. telefono' 
          className={errors.telNo ? "error" : 'formInput'} 
          onChange={inputchange} 
          value={formdata.telNo} 
          />
          {errors.telNo && <span className='errors'>{errors.telNo}</span>}

          <input type="reset" name="restablecer" id='' value="Borrar todo"/>
        </div>
    </form>
</section>
    )
}

export default FormData