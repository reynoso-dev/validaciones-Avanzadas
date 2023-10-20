 if (apellido.value.trim() === "") {
               // Apellido no puede estar vacío
               apellido.classList.add("is-invalid");
               isValid = false;
            } else {
                apellido.classList.remove("is-invalid");
                apellido.classList.add("is-valid");
            }

            if (email.value.trim() === "" || !isValidEmail(email.value)) {
                // Email no puede estar vacío y debe ser válido
                email.classList.add("is-invalid");
                isValid = false;
            } else {
                email.classList.remove("is-invalid");
                email.classList.add("is-valid");
            }

            if (password1.value.length < 6) {
                // La contraseña debe tener al menos 6 caracteres
                password1.classList.add("is-invalid");
            } else {
                password1.classList.remove("is-invalid");
                password1.classList.add("is-valid");
            }
            if (password1.value !== password2.value && password1.checkValidity()) {
                // Las contraseñas no coinciden
                password2.classList.add("is-invalid");
            } else {
                password2.classList.remove("is-invalid");
                password2.classList.add("is-valid");
            }

               // Validar el checkbox de términos y condiciones
        if (!terminosCheckbox.checked) {
            // El checkbox no está marcado
            terminosCheckbox.classList.add("is-invalid");
            document.getElementById("checkbox-error").classList.add("is-invalid");
            isValid = false;
        } else {
            terminosCheckbox.classList.remove("is-invalid");
            document.getElementById("checkbox-error").classList.remove("is-invalid");
            terminosCheckbox.classList.add("is-valid");
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    // Controladores de eventos para la validación en tiempo real
    nombre.addEventListener("input", function() {
        const inputValue = nombre.value.trim();
        if (/[^a-zA-Z]/.test(inputValue)) {
            nombre.classList.remove("is-valid");
            nombre.classList.add("is-invalid");
        } else {
            nombre.classList.remove("is-invalid");
            nombre.classList.add("is-valid");
        }
    });

    apellido.addEventListener("input", function() {
        const inputValue = apellido.value.trim();
    
        if (/[^a-zA-Z]/.test(inputValue)) {
            apellido.classList.remove("is-valid");
            apellido.classList.add("is-invalid");
        } else {
            apellido.classList.remove("is-invalid");
            apellido.classList.add("is-valid");
        }
    });

    email.addEventListener("input", function() {
        if  (email.value.trim() !== "" && isValidEmail(email.value)) {
            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
        } else {
            email.classList.remove("is-valid");
            email.classList.add("is-invalid");
        }
    });

    password1.addEventListener("input", function() {
        if (password1.value.length > 6) {
            password1.classList.remove("is-invalid");
            password1.classList.add("is-valid");
        } else {
            password1.classList.remove("is-valid");
            password1.classList.add("is-invalid");
        }
    });

    password2.addEventListener("input", function() {
        if (password1.checkValidity() && password1.value === password2.value) {
            password2.classList.remove("is-invalid");
            password2.classList.add("is-valid");
        } else {
            password2.classList.remove("is-valid");
            password2.classList.add("is-invalid");
        }
    });

    terminosCheckbox.addEventListener("input", function() {
        if (terminosCheckbox.checked) {
            terminosCheckbox.classList.remove("is-invalid");
            terminosCheckbox.classList.add("is-valid");
            document.getElementById("checkbox-error").classList.remove("is-invalid");
        } else {
            terminosCheckbox.classList.remove("is-valid");
            terminosCheckbox.classList.add("is-invalid");
            document.getElementById("checkbox-error").classList.add("is-invalid");
        }
    });


    // Función para validar el formato del correo electrónico
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
});
