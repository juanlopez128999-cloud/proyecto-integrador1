function irAdmin() {

    const adminEmail = "juan128999";
    const adminPass = "juan1022149696*";

    const email = prompt("Ingrese correo:");
    if (email === null) return;

    const pass = prompt("Ingrese contraseña:");
    if (pass === null) return;

    if (email === adminEmail && pass === adminPass) {

        window.location.href = "administrador.html";

    } else {

        alert("Acceso denegado. Verifique sus datos.");

    }

}
