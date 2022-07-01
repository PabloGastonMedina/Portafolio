const form= document.getElementById("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");


let nombreIncorrecto = document.getElementById("nombreIncorrecto");
let emailIncorreto = document.getElementById("emailIncorrecto");
let asuntoIncorrecto = document.getElementById("asuntoIncorrecto");
let mensajeIncorrecto = document.getElementById("mensajeIncorrecto");

form.addEventListener("submit", validar=>{

    validar.preventDefault();
    let error1 = "";
    let error2 = "";
    let error3 = "";
    let error4 = "";

    let expresionRegularEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let relleno = false;

    nombreIncorrecto.innerHTML = "";
    emailIncorreto.innerHTML = "";
    asuntoIncorrecto.innerHTML = "";
    mensajeIncorrecto.innerHTML = "";

    if(nombre.value.length > 50 || nombre.value === ""){
        error1 += `Error: nombre debe contener entre 1 y 50 caracteres.`;
        relleno = true;
    }
    if(!expresionRegularEmail.test(email.value)){
        error2 += `Error: debes escribir un email valido.`;
        relleno = true;
    }
    if(asunto.value.length > 50 || asunto.value === ""){
        error3 += `Error: nombre debe contener entre 1 y 50 caracteres.`;
        relleno = true;
    }
    if(mensaje.value.length > 300 || nombre.value === ""){
        error4 += `Error: nombre debe contener entre 1 y 300 caracteres.`;
        relleno = true;
    }

    if(relleno){
        nombreIncorrecto.innerHTML = error1;
        emailIncorreto.innerHTML = error2;
        asuntoIncorrecto.innerHTML = error3;
        mensajeIncorrecto.innerHTML = error4;
    }

    else{
        swal("Enviado", "Su mensaje se envio correctamente", "success");
    }
        
   
});

