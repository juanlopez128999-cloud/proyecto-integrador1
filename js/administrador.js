
function obtenerUsuarios() {

    let usuarios = localStorage.getItem("usuariosBiblioteca");

    if (usuarios === null) {
        return [];
    }

    return JSON.parse(usuarios);

}

function mostrarUsuarios() {

    let usuarios = obtenerUsuarios();

    let tabla = document.getElementById("usersTableBody");

    if (!tabla) {
        return;
    }

    tabla.innerHTML = "";

    if (usuarios.length === 0) {

        tabla.innerHTML = `
            <tr>
                <td colspan="3" class="empty-users">
                    No hay usuarios registrados todavía.
                </td>
            </tr>
        `;

        return;

    }


    for (let i = 0; i < usuarios.length; i++) {

        let usuario = usuarios[i];

        let fila = document.createElement("tr");

        let columnaUsuario = document.createElement("td");
        columnaUsuario.textContent = "Usuario " + (i + 1);

        let columnaCorreo = document.createElement("td");
        columnaCorreo.textContent = usuario.email;

        let columnaEstado = document.createElement("td");

        columnaEstado.innerHTML = `
            <span class="storage-status">
                <i></i> Registrado
            </span>
        `;

        fila.appendChild(columnaUsuario);
        fila.appendChild(columnaCorreo);
        fila.appendChild(columnaEstado);

        tabla.appendChild(fila);

    }

}


function actualizarContador() {

    let usuarios = obtenerUsuarios();

    let contador = usuarios.length;

    let total = document.getElementById("totalUsuarios");

    let cantidad = document.getElementById("usersCount");

    let flotante = document.getElementById("floatingUsers");

    if (total) {

        total.textContent = contador;

    }

    if (cantidad) {

        cantidad.textContent = contador;

    }

    if (flotante) {

        flotante.textContent = contador + " registrados";

    }

    let progreso = document.getElementById("userProgress");

    if (progreso) {

        let porcentaje = Math.min(contador * 10, 100);

        progreso.style.width = porcentaje + "%";

    }

}


function mostrarGrafica() {

    let prestamos = [14, 21, 18, 30, 24, 35];

    let barras = document.querySelectorAll(".bar");

    for (let i = 0; i < barras.length; i++) {

        if (prestamos[i] !== undefined) {

            let porcentaje = (prestamos[i] / 40) * 100;

            barras[i].style.setProperty(
                "--value",
                porcentaje + "%"
            );

        }

    }

}


function cargarAdministrador() {

    mostrarUsuarios();

    actualizarContador();

    mostrarGrafica();

}



window.addEventListener("storage", function(event) {

    if (event.key === "usuariosBiblioteca") {

        mostrarUsuarios();

        actualizarContador();

    }

});



function cargarUsuarios() {

    mostrarUsuarios();

    actualizarContador();

}

document.addEventListener("DOMContentLoaded", function() {

    cargarAdministrador();

});
