  const password = document.getElementById("loginPassword");
        const togglePassword = document.getElementById("togglePassword");

        togglePassword.addEventListener("click", function() {

            if (password.type === "password") {

                password.type = "text";
                togglePassword.textContent = "Ocultar";

            } else {

                password.type = "password";
                togglePassword.textContent = "Mostrar";

            }

        });

        
// ==========================================
// INICIAR SESIÓN
// ==========================================

document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    // Obtener los datos ingresados
    const emailIngresado = document.getElementById("loginEmail").value.trim();

    const claveIngresada = document.getElementById("loginPassword").value.trim();

    // Obtener usuarios registrados
    let usuarios = JSON.parse(
        localStorage.getItem("usuariosBiblioteca")
    ) || [];

    // Buscar coincidencia
    let usuarioEncontrado = usuarios.find(function(usuario) {

        return usuario.email.toLowerCase() === emailIngresado.toLowerCase()
            && usuario.password === claveIngresada;

    });

    // Verificar resultado
    if (usuarioEncontrado) {

        alert("¡Inicio de sesión exitoso!");

        window.location.href = "rol.html";

    } else {

        alert("Correo o contraseña incorrectos.");

    }

});
