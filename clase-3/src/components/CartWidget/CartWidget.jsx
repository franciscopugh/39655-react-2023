export const CartWidget = ({ cantCarrito }) => {
  return (
    <>
      <button className="btn btn-dark"><i className="fas fa-shopping-cart fa-lg"></i></button>
      <p>{cantCarrito}</p>
    </>
  )
}