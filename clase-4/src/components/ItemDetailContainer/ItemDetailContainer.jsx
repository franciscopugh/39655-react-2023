//Consulto un unico producto de mi BDD
import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    useEffect(() => {
        fetch('./json/productos.json')
            .then(response => response.json())
            .then(productos => {
                const prod = productos.find(prod => prod.id === 2)
                setItem(prod)
            })

    }, [])

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={item} />
        </div>
    )
}