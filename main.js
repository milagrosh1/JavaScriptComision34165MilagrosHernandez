

alert("Bienvenido a Bimonetaria ");

let nombreIngresado = prompt("Ingresar Nombre");
let apellidoIngresado = prompt("ingresar Apellido");




if((nombreIngresado !="") && (apellidoIngresado !=""  )){
    alert("Gracias por ingresar su Nombre y Apellido, Un dato mas y ya podra utilizar nuestro servicio");
}else{
    alert("error: Ingresar nombre y apellido para acceder al servicio de cambio de divisas");
}
    
let edad = prompt("ingrese su edad");
if (edad >=18)
{
    alert("Ya podes acceder al servicio de cambio de divisas")

}    
if(edad <18)
{
    alert("Necesitas tener la mayoria de edad para accceder al servicio de cambio de divisas")

}


function convertir() {
   let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 354;
    let euro = 356;
    if (document.getElementById("uno").checked){ 
        resultado = valore / dolar;
        alert("el cambio de pesos a dolares es: $" + resultado.toFixed(2));

    }
    

    if (document.getElementById("dos").checked){ 
        resultado = valore / euro;
        alert("el cambio de pesos a euros es: €" + resultado.toFixed(2));

    }

    else {
        alert("Gracias por tu visita ;D")
    }}