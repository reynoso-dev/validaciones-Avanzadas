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
    let check = 0;


    if (nombre.value.trim() === '') {
      mostrarError(nombre, 'Este campo no puede estar vacio');
    } else {
      mostrarExito(nombre)
      check = 1;
    }

    if (apellido.value.trim() === '') {
      mostrarError(apellido, 'Este campo no puede estar vacio');
      check = check-1;
    } else {
      mostrarExito(apellido);
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!emailRegex.test(email.value)) {
      mostrarError(email, 'Ingresa un email válido');
      check = check-1;
    } else {
      mostrarExito(email);
    }

    if (password1.value.trim().length < 6) {
      mostrarError(password1, 'La contaseña debe contener mas de 6 caracteres');
    } else {
      mostrarExito(password1)
    }

    if (password2.value.trim() !== password1.value.trim()) {
      mostrarError(password2, 'Las contraseñas no coinciden')
    } else {
      mostrarExito(password2)
    }


    if (!valid) {
      event.preventDefault();
    }
    if (check == 1) {
      alert("Formulario enviado correctamente");
    }
  });
});
