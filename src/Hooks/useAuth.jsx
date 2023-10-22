import  { useContext } from 'react'
import UserContext from '../Context/UsersContext/UserContext'

const useAuth = () => {
    const context = useContext(UserContext)
    return context
}

export default useAuth