
var formulario = document.getElementById('formulario');
var Nombre = document.getElementById('Nombre');
var Email = document.getElementById('Email');
var error = document.getElementById('error');
var Telefono = document.getElementById('Telefono');


error.style.color = 'red';


formulario.addEventListener('submit', function(event) {
    console.log("El evento submit ha sido capturado"); 
    event.preventDefault(); 

    var mensajesError = [];

   
    if (Nombre.value === '' || Nombre.value.length < 5) {
        if (Nombre.value === '') {
            mensajesError.push('El nombre no puede estar vacío');
        }
        if (Nombre.value.length < 5) {
            mensajesError.push('El nombre debe tener al menos 5 caracteres');
        }
    }

    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (Email.value === '' || !emailPattern.test(Email.value)) {
        if (Email.value === '') {
            mensajesError.push('El email no puede estar vacío');
        }
        if (!emailPattern.test(Email.value)) {
            mensajesError.push('El email no es válido');
        }
    }

    var telefonoPattern = /^(?:\(\d{3}\)\s?|\d{3}-)\d{3}-\d{4}$/;
    if (Telefono.value === '' || !telefonoPattern.test(Telefono.value)) {
        if (Telefono.value === '') {
            mensajesError.push('El teléfono no puede estar vacío');
        }
        if (!telefonoPattern.test(Telefono.value)) {
            mensajesError.push('El teléfono debe tener un formato válido (XXX-XXX-XXXX o (XXX) XXX-XXXX)');
        }
    }
   
    if (mensajesError.length > 0) {
        error.innerHTML = mensajesError.join(', ');
        console.log("Errores:", mensajesError); 
        return false;  
    }

    alert('Formulario enviado correctamente');
    return true;  
});

