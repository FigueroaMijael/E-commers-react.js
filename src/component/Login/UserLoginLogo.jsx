import {useState} from 'react'
import { Link } from 'react-router-dom';


const UserLoginLogo = () => {
    const [value, setValue] = useState(false);

    const onClick = () => setValue(!value)

  return (
    <div>
            <Link to={'/login'}>
            <button onClick={onClick}>
                <i className="bi bi-person"></i>
            </button>
            </Link>
     </div>
  )
}

export default UserLoginLogo