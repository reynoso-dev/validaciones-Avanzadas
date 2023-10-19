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



    if (!valid) {
      event.preventDefault();
    }
    if (check == 1) {
      alert("Formulario enviado correctamente");
    }
  });
});
