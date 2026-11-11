
const buscador = document.getElementById("buscador");
const filtroGenero = document.getElementById("filtroGenero");
const libros = document.querySelectorAll(".book-card");
const sinResultados = document.getElementById("sinResultados");


const CLAVE_STORAGE = "inventarioBiblioteca";

let inventario = JSON.parse(localStorage.getItem(CLAVE_STORAGE)) || {};

libros.forEach((libro, index) => {

    const titulo = libro.querySelector("h3").textContent.trim();
    const autor = libro.querySelector(".book-info p").textContent.trim();

    const id = "libro_" + index;

    if (inventario[id] === undefined) {
        inventario[id] = {
            titulo: titulo,
            autor: autor,
            stock: 15,
            prestados: 0
        };
    }

    localStorage.setItem(CLAVE_STORAGE, JSON.stringify(inventario));

    const stock = document.createElement("div");
    stock.className = "book-stock";


    const boton = document.createElement("button");
    boton.className = "btn-prestar";
    boton.textContent = "Prestar libro";

    libro.querySelector(".book-info").appendChild(stock);
    libro.querySelector(".book-info").appendChild(boton);


    function actualizarStock() {

        const cantidad = inventario[id].stock;

        stock.innerHTML = `
            <span>Stock disponible</span>
            <strong>${cantidad} / 15</strong>
        `;

        if (cantidad === 0) {
            boton.textContent = "Agotado";
            boton.disabled = true;
            boton.classList.add("agotado");
        } else {
            boton.textContent = "Prestar libro";
            boton.disabled = false;
            boton.classList.remove("agotado");
        }
    }

    boton.addEventListener("click", function() {

        if (inventario[id].stock > 0) {

            inventario[id].stock--;

            inventario[id].prestados++;

            localStorage.setItem(
                CLAVE_STORAGE,
                JSON.stringify(inventario)
            );

            actualizarStock();

            alert("¡Préstamo realizado correctamente!\nLibro: " + titulo);

        }

    });

    actualizarStock();

});


function filtrarLibros() {

    const texto = buscador.value.toLowerCase().trim();
    const genero = filtroGenero.value;

    let encontrados = 0;

    libros.forEach(libro => {

        const contenido = libro.textContent.toLowerCase();
        const categoria = libro.dataset.genero;

        const coincideTexto = contenido.includes(texto);

        const coincideGenero =
            genero === "todos" || categoria === genero;

        if (coincideTexto && coincideGenero) {

            libro.classList.remove("oculto");
            encontrados++;

        } else {

            libro.classList.add("oculto");

        }

    });

    sinResultados.style.display =
        encontrados === 0 ? "block" : "none";

}

buscador.addEventListener("input", filtrarLibros);
filtroGenero.addEventListener("change", filtrarLibros);
