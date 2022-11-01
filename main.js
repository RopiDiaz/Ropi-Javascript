class automovil {
    constructor(modelo, traccion, propulsion, precio, stock){
        this.modelo = modelo
        this.traccion = traccion
        this.propulsion = propulsion
        this.precio = precio
        this.stock = stock
    }
}

let misAutomoviles = []

misAutomoviles.push(new automovil("bZ4X", "Doble", "Eléctrico", 42000, false))
misAutomoviles.push(new automovil("4Runner", "Doble", "Combustible", 40150, true))
misAutomoviles.push(new automovil("Corolla Cross", "Simple", "Combustible", 22445, true))
misAutomoviles.push(new automovil("GR 86", "Deportiva", "Combustible", 27700, false))
misAutomoviles.push(new automovil("Supra A91-CF", "Deportiva", "Combustible", 63280, true))
misAutomoviles.push(new automovil("Tacoma", "Doble", "Combustible", 40635, true))
misAutomoviles.push(new automovil("Prius Nightshade", "Simple", "Eléctrico", 30470, true))
misAutomoviles.push(new automovil("Highlander", "Simple", "Combustible", 39555, false))
misAutomoviles.push(new automovil("Sienna Woodland", "Simple", "Híbrido", 46565, true))

function opcionesTraccion(){
    console.log("Opciones de tracción:")
    console.log("1- Simple")
    console.log("2- Doble")
    console.log("3- Deportiva")
    console.log("4- No tengo preferencias")
}

function opcionesPropulsion(){
    console.log("Opciones de propulsión:")
    console.log("1- Eléctrico")
    console.log("2- Combustible")
    console.log("3- Híbrido")
    console.log("4- No tengo preferencias")
}

alert("Bienvenidos a nuestro concesionario!")
alert("Elijamos el mejor vehículo para usted.")

let preferenciaUsuario = {traccion: "", propulsion: "", precio: ""}

do {
    opcionesTraccion()
    preferenciaTraccion = Number(prompt("elija la opción de tracción que desee: Utilice 1 para tracción simple, 2 para tracción doble o 3 para tracción Deportiva."))
    if (preferenciaTraccion == 1){
        preferenciaUsuario.traccion = "Simple"
    } else if (preferenciaTraccion == 2){
        preferenciaUsuario.traccion = "Doble"
    } else if (preferenciaTraccion == 3){
        preferenciaUsuario.traccion = "Deportiva"
    } else if (preferenciaTraccion == 4){
        preferenciaUsuario.traccion = false
    } else {
        alert("Has ingresado una opción inválida")
    }
} while (preferenciaTraccion != 1 && preferenciaTraccion != 2 && preferenciaTraccion != 3 && preferenciaTraccion != 4)

do {
    opcionesPropulsion()
    preferenciaPropulsion = Number(prompt("elija la opción de Combustible que desee: Utilice 1 para Eléctricos, 2 para Combustibles fósileso 3 para Híbridos."))
    if (preferenciaPropulsion == 1){
        preferenciaUsuario.propulsion = "Eléctrico"
    } else if (preferenciaPropulsion == 2){
        preferenciaUsuario.propulsion = "Combustible"
    } else if (preferenciaPropulsion == 3){
        preferenciaUsuario.propulsion = "Híbrido"
    } else if (preferenciaPropulsion == 4){
        preferenciaUsuario.propulsion = false
    } else {
        alert("Has ingresado una opción inválida")
    }
} while (preferenciaPropulsion != 1 && preferenciaPropulsion != 2 && preferenciaPropulsion != 3 && preferenciaPropulsion != 4)

do {
    preferenciaPrecio = Number(prompt("elija un máximo de precio, o 0 si no desea ninguno."))
    if (isNaN(preferenciaPrecio)) {
        alert("Has ingresado una opción inválida")
    } else if (preferenciaPrecio != 0){
        preferenciaUsuario.precio = preferenciaPrecio
    } else {
        preferenciaUsuario.precio = false
    }
} while (isNaN(preferenciaPrecio))


let autosPosiblesTraccion = []
let autosPosiblesPropulsion = []
let autosPosiblesPrecio = []
let autosPosibles = []

if (preferenciaUsuario.traccion != false){
    autosPosiblesTraccion = misAutomoviles.filter((opc) => opc.traccion == preferenciaUsuario.traccion)
}

if (preferenciaUsuario.propulsion != false && autosPosiblesTraccion.lenght == 0) {
    autosPosiblesPropulsion = misAutomoviles.filter((opc) => opc.propulsion == preferenciaUsuario.propulsion)
} else if (preferenciaUsuario.propulsion != false && autosPosiblesTraccion != 0){
    autosPosiblesPropulsion = autosPosiblesTraccion.filter((opc) => opc.propulsion == preferenciaUsuario.propulsion)
}

if (preferenciaUsuario.precio != false && autosPosiblesPropulsion == 0){
    autosPosiblesPrecio = misAutomoviles.filter((opc) => opc.precio <= preferenciaUsuario.precio)
} else if (preferenciaUsuario.precio != false && autosPosiblesPropulsion != 0){
    autosPosiblesPrecio = autosPosiblesPropulsion.filter((opc) => opc.precio <= preferenciaUsuario.precio)
}

if (autosPosiblesPrecio.length != 0){
    autosPosibles = autosPosiblesPrecio
} else if (autosPosiblesPrecio.length == 0 && preferenciaUsuario.precio != 0){
    autosPosibles = autosPosiblesPrecio
} else if (autosPosiblesPropulsion.length != 0){
    autosPosibles = autosPosiblesPropulsion
} else {
    autosPosibles = autosPosiblesTraccion
}

if (preferenciaUsuario.traccion == false && preferenciaUsuario.propulsion == false && preferenciaUsuario.precio == false){
    autosPosibles = misAutomoviles
}


if (autosPosibles.length == 0){
    console.log("Lo sentimos mucho, pero en este momento no tenemos vehículos para usted.")
} else {
    autosConStock = autosPosibles.filter((opc) => opc.stock == true)
    autosSinStock = autosPosibles.filter((opc) => opc.stock == false)
    if (autosConStock.length == 0){
        console.log("Lamentablemente en este momento no poseemos en el concesionario vehículos en stock para usted.")
    } else {
        console.log("En este momento en el concesionario poseemos estos autos que pueden ser de su agrado:")
        console.log(autosConStock)
    }
    if (autosSinStock.length != 0){
        console.log("Proximamente al concesionario ingresaran estos modelos que podrían ser para usted:")
        console.log(autosSinStock)
    }
}
 

