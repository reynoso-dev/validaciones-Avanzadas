document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    let valid = true;

    function mostrarError(elemento, mensaje) {
      elemento.classList.add('is-invalid');
      elemento.nextElementSibling.innerText = mensaje;
      valid = false;
    };

    function mostrarExito(elemento) {
      elemento.classList.remove('is-invalid');
      elemento.classList.add('is-valid');
      elemento.nextElementSibling.innerText = '';
    };


    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const terminosCheckbox = document.getElementById("terminos");
    const fuera = document.getElementById("fuera");
    let check = 0;


    if (nombre.value.trim() === '') {
      mostrarError(nombre, 'Este campo no puede estar vacio');
    } else {
      mostrarExito(nombre)
      check = 1;
    }

    if (apellido.value.trim() === '') {
      mostrarError(apellido, 'Este campo no puede estar vacio');
      check -= 1;
    } else {
      mostrarExito(apellido);
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!emailRegex.test(email.value)) {
      mostrarError(email, 'Ingresa un email válido');
      check -= 1;
    } else {
      mostrarExito(email);
    }

    if (password1.value.trim().length < 6) {
      mostrarError(password1, 'La contaseña debe contener mas de 6 caracteres');
      check -= 1;
    } else {
      mostrarExito(password1)
    }

    if (password2.value.trim() !== password1.value.trim()) {
      mostrarError(password2, 'Las contraseñas no coinciden')
      check -= 1;
    } else if (password1.value.trim() === '') {
      mostrarError(password2, 'Debe introducir una contraseña en el primer campo')
      check -= 1;
    } else {
      mostrarExito(password2)
    }

    // Validar el checkbox de términos y condiciones
    if (!terminosCheckbox.checked) {
      // El checkbox no está marcado
      mostrarError(terminosCheckbox, 'Acepto los términos y condiciones del servicio.')
      mostrarError(fuera, 'Debes aceptar los términos y condiciones.')
      check -= 1;
    } else {
      mostrarExito(terminosCheckbox)
      terminosCheckbox.nextElementSibling.innerHTML = 'Acepto los términos y condiciones del servicio.';
      fuera.nextElementSibling.innerHTML = '';
    }


    
    if (!valid) {
      event.preventDefault();
    }
    if (check == 1) {
      alert("Formulario enviado correctamente");
    }
  });
});
