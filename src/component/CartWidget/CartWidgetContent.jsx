import { useState } from "react"
import CartWidget from "./CartWidget"

const CartWidgetContent = () => {

    const [cardContent, setContent] = useState()

    const container = () => {
        return (
            <section className="container">
                <h1>Hola</h1>
            </section>
        )
    }
  return (
    <div>
        <CartWidget container={container} cardContent={cardContent} setContent={setContent} />
    </div>
  )
}

export default CartWidgetContent