import CartWidgetContent from "../CartWidget/CartWidgetContent"

const NavBar = ({link,link1,link2,link3,link4, logo}) => {
    return (
        <div className="navBar">
            <h1 className="logo">{logo}</h1>
            <ul className="Nav">
                <li className="pointer">{link}</li>
                <li className="pointer">{link1}</li>
                <li className="pointer">{link2}</li>
                <li className="pointer">{link3}</li>
                <li className="pointer">{link4}</li>
            </ul>
            <CartWidgetContent />
        </div>
    )
}

export default NavBar