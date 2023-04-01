//Recibir un array de productos y a cada uno de esos productos los voy a transformar en un componente dada una plantilla
import { Item } from "../Item/Item"
export const ItemList = ({ productos }) => {
    return (
        <>
            {productos.map(producto => <Item key={producto.id} item={producto} />)}
        </>
    )
}