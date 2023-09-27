import useCart from '../../../hooks/useCart'
 
 const CartWidget = () => {
    const [value, mostrar] = useCart()


    return (
        <div>
            <button onClick={mostrar}>
                {
                    value ?  "X" : <i className="bi bi-cart2"></i>
                }
            </button>
        </div>
      )
 }
 
 export default CartWidget
