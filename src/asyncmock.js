const misProductos = [
    {   
        id: "1",
        nombre: "Arduino Uno",
        precio: 300,
        img: "../img/ArduinoUno.jpg",
        idCat: "1",
        descripcion: "El Arduino Uno posee además de todas las características de la placa anterior, un ATmega16U2 en lugar del 8U2 que se encuentra en el Uno (o el FTDI que se encuentra en las generaciones anteriores)." 
    },
    {   
        id: "2",
        nombre: "Arduino Mini",
        precio: 200,
        img: "../img/ArduinoProMini.jpg",
        idCat: "1",
        descripcion: "El Arduino Pro Mini ejecuta el gestor de arranque de 8MHz. Arduino Pro Mini no viene con conectores completos, por lo que puede soldar cualquier conector o cable con la orientación que necesite." 
    },
    {   
        id: "3",
        nombre: "CanBus Shield",
        precio: 150,
        img: "../img/CanBusShield.jpg",
        idCat: "2",
        descripcion: "El Can Bus Shield proporciona a su Arduino o Redboard capacidades CAN-BUS y le permite piratear su vehículo. Este escudo le permite sondear la ECU para obtener información, incluida la temperatura del refrigerante, la posición del acelerador, la velocidad del vehículo y las rpm del motor." 
    },
    {   
        id: "4",
        nombre: "OpenL Shield",
        precio: 100,
        img: "../img/OpenLogShield.jpg",
        idCat: "2",
        descripcion: "El Open Log Shield es un registrador de datos de código abierto que funciona con una conexión serial simple y admite tarjetas microSD de hasta 32 GB." 
    },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 200)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 200)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 200 )
    })
}