import { CartWidget } from "../CartWidget/CartWidget"
export const Navbar = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <CartWidget cantCarrito={0} />
        </div>
    )
}