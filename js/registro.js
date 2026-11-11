
// ==========================================
// MOSTRAR Y OCULTAR CONTRASEÑA
// ==========================================

function mostrarPassword() {

    const password = document.getElementById("regPassword");
    const boton = document.getElementById("togglePassword");

    if (password.type === "password") {

        password.type = "text";
        boton.textContent = "Ocultar";

    } else {

        password.type = "password";
        boton.textContent = "Mostrar";

    }
}


// ==========================================
// OBTENER USUARIOS GUARDADOS
// ==========================================

function obtenerUsuarios() {

    let usuarios = localStorage.getItem("usuariosBiblioteca");

    if (usuarios === null) {
        return [];
    }

    return JSON.parse(usuarios);
}


// ==========================================
// REGISTRAR NUEVO USUARIO
// ==========================================

document.getElementById("registroForm").addEventListener("submit", function(e) {

    e.preventDefault();

    // Obtener los datos del formulario
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    // Validar campos vacíos
    if (email === "" || password === "") {

        alert("Completa todos los campos.");
        return;

    }

    // Validar longitud de contraseña
    if (password.length < 6) {

        alert("La contraseña debe tener al menos 6 caracteres.");
        return;

    }

    // Obtener todos los usuarios existentes
    let usuarios = obtenerUsuarios();

    // Verificar si el correo ya existe
    let existe = usuarios.some(function(usuario) {

        return usuario.email.toLowerCase() === email.toLowerCase();

    });

    if (existe) {

        alert("Este correo ya se encuentra registrado.");
        return;

    }

    // Crear el nuevo usuario
    let nuevoUsuario = {

        email: email,
        password: password

    };

    // Agregar el usuario a la lista
    usuarios.push(nuevoUsuario);

    // Guardar la lista completa en LocalStorage
    localStorage.setItem("usuariosBiblioteca", JSON.stringify(usuarios));

    alert("¡Cuenta creada correctamente!");

    // Redirigir a la selección de rol
    window.location.href = "rol.html";

});
