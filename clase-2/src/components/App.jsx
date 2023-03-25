import './App.css'
import { Saludo } from './Saludo/Saludo.jsx'
import { ItemCount } from './ItemCount/ItemCount.jsx'
import { Navbar } from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
export const App = () => {
  //Aqui irian los hooks
  return (
    <div>
      <Navbar />
      <ItemCount />
      <Saludo mensaje1={"Hola, buenos dias"} mensaje2={"Hola, buenas noches"} />
      <ItemListContainer greeting={"Productos"} />
    </div>
  )
}





/*
export const App = () => {
  /*
    HTML      JSX
    class -> className
    <input> -> <input />
    `${valor}` -> {valor}
    style = "nombreProp: valor" -> style= {{"nombreProp": "valor"}}
    mayor parte de las propiedades -> camelCase
  
  const valor = 5
  return (
    <div className='divGeneral' style={{ backgroundColor: "red" }}>
      <h1>Hola!</h1>
      <p>{valor}</p>
      <input type="text" />
    </div>
  )
}*/
