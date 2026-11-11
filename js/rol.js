 function irUsuario() {
            window.location.href = "usuario.html";
        }

        function abrirLogin() {
            document.getElementById("modalLogin").classList.add("active");
            document.getElementById("error").style.display = "none";
        }

        function cerrarLogin() {
            document.getElementById("modalLogin").classList.remove("active");
        }

        function cerrarDesdeFondo(event) {
            if (event.target.id === "modalLogin") {
                cerrarLogin();
            }
        }

        function validarAdmin(event) {
            event.preventDefault();

            // Configura estas credenciales para la demostración.
            const adminEmail = "juan128999";
            const adminPass = "juan1022149696*";

            const email = document.getElementById("correo").value;
            const pass = document.getElementById("contrasena").value;

            if (email === adminEmail && pass === adminPass) {
                window.location.href = "administrador.html";
            } else {
                document.getElementById("error").style.display = "block";
            }
        }