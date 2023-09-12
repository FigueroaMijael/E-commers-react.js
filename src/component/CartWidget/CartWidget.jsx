import React from 'react'

const CartWidget = ({container, cardContent, setContent}) => {

    return (
        <div>
            <button onClick={() => setContent(container)}><i className="bi bi-cart2"><small>1</small></i>{cardContent}</button>
        </div>
      )
}

export default CartWidget