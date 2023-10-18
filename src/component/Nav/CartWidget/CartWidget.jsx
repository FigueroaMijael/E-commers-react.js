import { Link } from 'react-router-dom'
import { useState } from 'react';
 
 const CartWidget = () => {
    
    const [value, setValue] = useState(false);

    const onClick = () => setValue(!value)

    return (
        <div>
            <Link to={'/cart'}>
            <button onClick={onClick}>
                <i className="bi bi-cart2"></i>
            </button>
            </Link>
        </div>
      )
 }
 
 export default CartWidget
