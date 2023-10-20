import React from 'react'

const FormData = ({formdata, inputchange, onsubmit, errors}) => {

  return (
<section>
    <form onSubmit={onsubmit}>
        <div>
          <p>Contacto<small>tienes una cuenta? <a href="">iniciar session</a></small></p>
        <label>email</label>
        <input 
        className={errors.email ? "error" : ""} 
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
          onChange={inputchange}
          value={formdata.slcPaises}
          >
            <option value="">Selecciona tu pais de origen</option>
            <option value="ar">Argentina</option>
            <option value="uy">Uruguay</option>
            <option value="br">Brasil</option>
          </select>
          {errors.slcPaises && <span className='errors'>{errors.slcPaises}</span>}

          <br />
          
          <label>Nombre</label>
          <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder='Nombre'
          className={errors.name ? "error" : ""} 
          onChange={inputchange} 
          value={formdata.name} 
          />
          {errors.name && <span className='errors'>{errors.name}</span>}

          <label>Apellido</label>
          <input 
          type="text" 
          name="surname" 
          id="surname" 
          placeholder='Apellido'
          className={errors.surname ? "error" : ""} 
          onChange={inputchange} 
          value={formdata.surname} 
          />
          {errors.surname && <span className='errors'>{errors.surname}</span>}

          <br />

          <label>DNI</label>
          <input 
          type="text" 
          name="dni" 
          id="dni" 
          placeholder='DNI'
          className={errors.dni ? "error" : ""} 
          onChange={inputchange} 
          value={formdata.dni} 
          />
          {errors.dni && <span className='errors'>{errors.dni}</span>}

          <br />

          <label>Direccion</label>
          <input 
          type="text" 
          name="direccionEnvio" 
          id="direccionEnvio" 
          placeholder='Direccion del envio'
          className={errors.direccionEnvio ? "error" : ""} 
          onChange={inputchange} 
          value={formdata.direccionEnvio} 
          />
          {errors.direccionEnvio && <span className='errors'>{errors.direccionEnvio}</span>}

          <br />

          <label>Seleccione fecha de entrega</label>
          <input
          type='date'
          name='dayOfDelivery'
          id='dayOfDelivery'
          className={errors.dayOfDelivery ? "error" : ""} 
          onChange={inputchange} 
          value={formdata.dayOfDelivery}
          />
          {errors.dayOfDelivery && <span className='errors'>{errors.dayOfDelivery}</span>}

          <br />
          
          <label>Casa, Departamento, etc (opcional)</label>
          <input 
          type="text" 
          name="typeOfDomicile" 
          id="typeOfDomicile" 
          placeholder='Casa, Departamento, etc (opcional)'
          className={errors.typeOfDomicile ? "error" : ""} 
          onChange={inputchange} 
          value={formdata.typeOfDomicile}  
          />
          {errors.typeOfDomicile && <span className='errors'>{errors.typeOfDomicile}</span>}

          <br />

          <label>Codigo posta</label>
          <input 
          type="text" 
          name="cp" 
          id="cp" 
          placeholder='Codigo posta'
          className={errors.cp ? "error" : ""} 
          onChange={inputchange} 
          value={formdata.cp}  
          />
          {errors.cp && <span className='errors'>{errors.cp}</span>}

          <label>Ciudad</label>
          <input 
          type="text" 
          name="city" 
          id="city" 
          placeholder='Ciudad'
          className={errors.city ? "error" : ""}  
          onChange={inputchange} 
          value={formdata.city} 
          />
          {errors.city && <span className='errors'>{errors.city}</span>}

          <label for="slcProvinciaEstado">Provincia / Estado</label> 
          <select 
          id="slcProvinciaEstado"
          name='slcProvinciaEstado'
          className={errors.slcProvinciaEstado ? "error" : ""} 
          onChange={inputchange} 
          value={formdata.slcProvinciaEstado} 
          >
            <option value="">Selecciona tu Provincia/Estado</option>
            <option value="BsAs">Buenos Aires(Provincia)</option>
            <option value="MZA">Mendoza</option>
            <option value="CBA">Cordoba</option>
          </select>
          {errors.slcProvinciaEstado && <span className='errors'>{errors.slcProvinciaEstado}</span>}

          <br />

          <label>Num. telefono</label>
          <input
          id="telNo"
          name="telNo"
          placeholder='Num. telefono' 
          className={errors.telNo ? "error" : ""} 
          onChange={inputchange} 
          value={formdata.telNo} 
          />
          {errors.telNo && <span className='errors'>{errors.telNo}</span>}

          <br />

          <input type="reset" name="restablecer" id="" value="Borrar todo"/>
        </div>
    </form>
</section>
    )
}

export default FormData