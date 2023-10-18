import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Categorias from '../pages/Categorias'
import CatePage from '../pages/CatePage'
import Detalle from '../pages/Detalle'
import Contactos from '../pages/Contactos'
import Cart from '../pages/Cart'
import UserProfile from '../pages/UserProfile'
import Checkout from '../pages/Checkout'


const RouteComponent = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/categorias/' element={<Categorias />}/>
      <Route exact path='/categorias/:category' element={<CatePage />} />
      <Route exact path='/detalle/:id' element={<Detalle />}/>
      <Route exact path='/contactos' element={< Contactos />}/>
      <Route exact path='/cart' element={<Cart />} />
      <Route exact path='/profile' element={<UserProfile />} />
      <Route exact path='/checkout' element={<Checkout />} />
    </Routes>
  )
}

export default RouteComponent