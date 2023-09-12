
import './App.css'
import NavBar from './component/Nav/NavBar'
import CartWidgetContent from './component/CartWidget/CartWidgetContent'

function App() {
  return (
      <div className="container-nav">
        <NavBar 
    logo={"LOGO"}
    link={"Inicio"}
    link1={"Destacados"}
    link2={"Ofertas"}
    link3={"Destacados"}
    link4={"Contactos"}
    />
    <CartWidgetContent />
    </div>
  )
}

export default App
