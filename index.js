import { agregarProducto, obtenerProducto, obtenerProductos } from "./FakeStoreAPI.js"

const argumentos = process.argv.slice(2)
console.log(argumentos)

switch(argumentos[0]){
    case "GET" :
        if(argumentos[1] == "products") 
            obtenerProductos()
        else if(argumentos[1].includes("products/")) {
            obtenerProducto(argumentos[1])
        }
        else console.log("Error, argumento incorrecto para el metodo GET.")
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
        else console.log("Error, el metodo POST requiere la palabra products más 3 argumentos.")
        break
    default :
        console.log("Comando erroneo")
        break
}
