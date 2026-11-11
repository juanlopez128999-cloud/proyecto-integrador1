
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


function obtenerUsuarios() {

    let usuarios = localStorage.getItem("usuariosBiblioteca");

    if (usuarios === null) {
        return [];
    }

    return JSON.parse(usuarios);
}




document.getElementById("registroForm").addEventListener("submit", function(e) {

    e.preventDefault();

    
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();


    if (email === "" || password === "") {

        alert("Completa todos los campos.");
        return;

    }

    
    if (password.length < 6) {

        alert("La contraseña debe tener al menos 6 caracteres.");
        return;

    }

    
    let usuarios = obtenerUsuarios();

    
    let existe = usuarios.some(function(usuario) {

        return usuario.email.toLowerCase() === email.toLowerCase();

    });

    if (existe) {

        alert("Este correo ya se encuentra registrado.");
        return;

    }

    let nuevoUsuario = {

        email: email,
        password: password

    };

    usuarios.push(nuevoUsuario);


    localStorage.setItem("usuariosBiblioteca", JSON.stringify(usuarios));

    alert("¡Cuenta creada correctamente!");

    window.location.href = "rol.html";

});
