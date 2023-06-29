
const ItemDetail = ({id, nombre, precio, img, descripcion}) => {
  return (
    <div>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: ${precio} </h3>
        <h3>ID: {id} </h3>
        <p>Descripcion: {descripcion}</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail