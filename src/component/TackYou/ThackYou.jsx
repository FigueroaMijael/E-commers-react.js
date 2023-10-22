import { useParams, Link } from "react-router-dom";

const ThankYou = () => {
    const {id} = useParams();

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div class="alert alert-warning" role="alert">
                        <h1>Gracias por tu Compra!</h1>
                        <p>Tu Numero de orden es: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn btn-dark">Volver a la Página Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default ThankYou;