import { useState } from "react"

export const ItemCount = () => {
    //     NomVar    FunModicarVar   Valor Inicial
    const [contador, setContador] = useState(1) //Definir el estado de mi funcion

    const sum = () => setContador(contador + 1) //Aumentar en uno a contador
    const res = () => setContador(contador - 1) //Restar en uno a contador
    return (
        <div>
            <button onClick={() => res()}>-</button>
            {contador}
            <button onClick={() => sum()}>+</button>
        </div>
    )
}