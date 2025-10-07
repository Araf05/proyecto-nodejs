import { agregarProducto, eliminarProducto, obtenerProducto, obtenerProductos, actualizarProducto } from "./FakeStoreAPI.js"

const argumentos = process.argv.slice(2)
console.log(argumentos)

switch(argumentos[0]){
    case "GET" :
        if(argumentos[1] == "products") 
            obtenerProductos()
        else if(argumentos[1].includes("products/")) {
            obtenerProducto(argumentos[1])
        }
        else console.log("Error, el metodo GET requiere 'products'.")
        break 
    case "POST" :
        if(argumentos.length == 5 && argumentos[1] == "products") {
            const nuevo = {
                "title": argumentos[2],
                "price": argumentos[3],
                "category": argumentos[4],
            }
            agregarProducto(nuevo)
        }
        else console.log("Error, el metodo POST requiere 'products <title> <price> <category>.'")
        break
    case "DELETE" :
        if(argumentos[1].includes("products/")) eliminarProducto(argumentos[1])
        else console.log("Error, el método DELETE requiere 'products/<id>.'")
        break
    case "PUT":
    if (argumentos[1].includes("products/") && argumentos.length == 5) {
        const id = argumentos[1].split("/")[1]

        // Creamos un nuevo objeto con los datos actualizados
        const actualizado = {
            title: argumentos[2],
            price: parseFloat(argumentos[3]),
            category: argumentos[4],
        }

        actualizarProducto(actualizado, id)
    } else {
        console.log("Error, el método PUT requiere 'products/<id>' seguido de título, precio y categoría.")
    }
    break
    default :
        console.log("Comando erroneo")
        break
}
