
import './App.css'
import NavBarr from './component/Nav/NavBarr'
import CartContextProvider from './Context/CartContext/CartContextProvider'
import UserContextProvider from './Context/UsersContext/UserContextProvider'
import RouteComponent from './Routes/RouteComponent'

function App() {
  return (
  <>   
    <CartContextProvider>
      <UserContextProvider>
        <NavBarr />
        
        <RouteComponent />
      </UserContextProvider>
    </CartContextProvider>  
  </>
  )
}

export default App
