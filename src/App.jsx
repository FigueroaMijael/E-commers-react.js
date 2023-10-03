
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
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/categorias/' element={<Categorias />}/>
      <Route exact path='/categorias/:catepage' element={<CatePage />} />
      <Route exact path='/detalle/:id' element={<Detalle />}/>
      <Route exact path='/contactos' element={< Contactos />}/>
    </Routes> 

    
  </>
  )
}

export default App
