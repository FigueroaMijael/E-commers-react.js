
import './App.css'
import NavBarr from './component/Nav/NavBarr'
import { Route, Routes } from 'react-router-dom'
import Categorias from './pages/categorias'
import Contactos from './pages/contactos'
import Home from './pages/Home'
import Detalle from './pages/Detalle'
import CatePage from './pages/CatePage'


function App() {
  return (
    <>   
    <NavBarr />

     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/categorias/' element={<Categorias />}/>
      <Route path='/categorias/:catepage' element={<CatePage />} />
      <Route path='/detalle/:id' element={<Detalle />}/>
      <Route path='/contactos' element={< Contactos />}/>
    </Routes> 

    
  </>
  )
}

export default App
