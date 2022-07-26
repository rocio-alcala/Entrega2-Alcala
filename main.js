//Simulador interactivo de un carrito de compras

//Definiendo funciones y variables

let productoToLowerCase
let carrito = 0

function iniciarCompra()
{bienvenido = prompt("Hola! bienvenido a Kokekosas, queres iniciar una compra?"); 
return bienvenido.toLowerCase()}

function solicitarProducto()
{let producto = prompt("Ingresa el producto que queres agregar a tu carrito: \nKokedama \nMaceta \nPlanta \n'Salir' para terminar compra");
return producto.toLowerCase()} 

function ingresarProductos(productoToLowerCase)
{do {productoToLowerCase = solicitarProducto() ;
    switch(productoToLowerCase)
        {case "kokedama":
        let precioKokedama = 1000;  ; 
        carrito = carrito + precioKokedama ;
        console.log("Elegiste Kokedama, su precio es $"+precioKokedama);
        console.log("Tu carrito tiene $"+carrito);
        break ;

        case "maceta": 
        let precioMaceta = 600; 
        carrito = carrito + precioMaceta ;
        console.log("Elegiste Maceta, su precio es $"+precioMaceta);
        console.log("Tu carrito tiene $"+carrito);
        break ;

        case "planta": 
        let precioPlanta = 400; 
        carrito = carrito + precioPlanta ;
        console.log("Elegiste planta, su precio es $"+precioPlanta);
        console.log("Tu carrito tiene $"+carrito);
        break ;

        case "salir": 
        console.log("Gracias por tu compra");
        console.log("El total en tu carrito es de $"+carrito); 
        break ;

        default: alert("El producto ingresado no existe, intenta nuevamente"); }}
while(productoToLowerCase != "salir")}


//Realizando la compra

let comprar = iniciarCompra() 
while (comprar != "si" && comprar != "no")
{alert("La respuesta ingresada no es valida, intentalo de nuevo"); comprar = iniciarCompra()}

if (comprar == "si") {ingresarProductos(productoToLowerCase)}
else {alert("Gracias por tu visita, te esperamos pronto");
     console.log("No ingresaste nada a tu carrito")}

