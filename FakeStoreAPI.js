/**
 * @typedef {Object} Product
 * @property {string} title
 * @property {number} price
 * @property {string} description
 * @property {string} category
 * @property {string} image
 */

/** 
* Obtiene todos los productos de FakeStoreAPI.
* Realiza una solicitud GET y devuelve los datos en formato JSON
* @async
* @function obtenerProductos
* @returns {Promise<Product[]>} - Promesa que resuelve con un array de productos.
*/
export async function obtenerProductos() {
    try {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "GET"
        })

        const data = await response.json()
        console.log("Obtiene todos los productos: \n", data)
        return data
    }
    catch (err) {
        console.log("Lo sentimos, no se han encontrado resultados: ", err)
    }
}

/**
 * Obtiene un producto por ID desde FakeStoreAPI.
 * Realiza una solicitud GET y devuelve un producto
 * @async
 * @function obtenerProducto
 * @param {number} id - Número ID de producto.
 * @returns {Promise<Product>} - Promesa que resuelve con un producto.
 */

export async function obtenerProducto(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/${id}`, {
            method: "GET"
        })

        const data = await response.json()
        console.log("Obtiene un producto: \n", data)
        return data
    }
    catch (err) {
        console.log("Lo sentimos, no se han encontrado resultados: ", err)
    }
}

/**
 * Agrega un producto (no modifica FakeStoreAPI).
 * Realiza la solicitud POST y simula agregar un producto
 * @async
 * @function agregarProducto
 * @param {Product} producto - Objeto del producto
 * @returns {Promise<Product>} - Promesa que resuelve devolviendo el nuevo producto
 */

export async function agregarProducto(producto) {
    try {
        const response = await fetch("https://fakestoreapi.com/products/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        })

        const data = await response.json()
        console.log("Agregar producto nuevo: \n", data)
        return data
    }
    catch (e) {
        console.log("Lo sentimos, no pudimos agregar el producto nuevo", e)
    }
}

/**
 * Actualiza un producto (no modifica FakeStoreAPI).
 * Realiza una solicitud PUT y simula modificar un producto
 * @async
 * @function actualizarProducto
 * @param {Product} producto - Objeto del producto
 * @param {number} id - Número ID del producto
 * @returns {Promise<Product>} Promesa que resuelve con el producto modificado
 */

export async function actualizarProducto(producto, id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "PUT",
             headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        })
        const data = await response.json()
        console.log("Producto modificado: \n", data)
        return data
    }
    catch(err) {
        console.log("Lo sentimos, no se ha podido actualzar el producto. \n", err)
    }
}

/**
 * Elimina un producto (no modifica FakeStoreAPI).
 * Realiza una solictud DELETE y simula eliminar un producto
 * @async
 * @function eliminarProducto
 * @param {number} id - Número ID del producto
 * @returns {Promise<Product>} - Promesa que resuelve con el producto eliminado
 */

export async function eliminarProducto(id) {
    try{
        const response = await fetch(`https://fakestoreapi.com/${id}`, {
            method: "DELETE"
        })

        const data = await response.json()
        console.log("Producto eliminado: \n", data)
        return data
    }
    catch(err){
        console.log("Lo sentimos, el producto no pudo eliminarse. \n", err)
    }
}



/////////// FUNCIONES INVOCADAS ///////////


// // OBTENER LISTA DE PRODUCTOS
// const listaProductos = await obtenerProductos()
// console.log("Obtiene todos los productos: \n", listaProductos)


// // OBTENER UN PRODUCO POR ID
// const producto = await obtenerProducto(3)
// console.log("Obtiene un producto: \n", producto)


// //AGREGAR UN PRODUCTO
// const nuevo = {
//     "title": "Producto Nuevo",
//     "price": 29.99,
//     "description": "Producto novedoso",
//     "category": "novedoso",
//     "image": "http://example.com"
// }

// const agregado = await agregarProducto(nuevo)
// console.log("Agregar producto nuevo: \n", agregado)


// // ACTUALIZAR UN PRODUCTO
// const productoModificado = {
//     "title": "Producto Modificado",
//     "price": 33.99,
//     "description": "Modificado",
//     "category": "modificados",
//     "image": "http://example.com"
// }

// const modificado = await actualizarProducto(productoModificado, 1)
// console.log("Producto modificado: \n", modificado)


// ELIMINAR UN PRODUTO
// const eliminado = await eliminarProducto(3)
// console.log("Producto eliminado: \n", eliminado)