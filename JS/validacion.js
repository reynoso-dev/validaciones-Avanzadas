function validarContraseña (){
  const contraseña1 = document.getElementById ("password1").value;
  const contraseña2 = document.getElementById ("password2").value;

if (contraseña1 === contraseña2) {
            alert("Las contraseñas coinciden.");
        } else {
            alert("Las contraseñas no coinciden. Inténtalo de nuevo por favor.");
        }  
}
