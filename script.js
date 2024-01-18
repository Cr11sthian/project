document.addEventListener("DOMContentLoaded", function () {
    // Array con las cosas que amas de TIPE
    const cosasQueAmo = [
        { numero: 1, texto: "Tu sonrisa pe", imagen: "imagen1.jpg" },
        { numero: 2, texto: "Tus ojopes", imagen: "imagen2.jpg" },
        // Agrega más elementos según sea necesario
        // ...
        { numero: 29, texto: "Tú amorpe, es único en esta vidape y es lo que quiero para siempre", imagen: "imagen29.jpg" }
    ];

    // Función para agregar dinámicamente la lista y las imágenes
    function agregarLista() {
        const lista = document.getElementById("lista");

        cosasQueAmo.forEach((cosa) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${cosa.numero}. ${cosa.texto}<br><img src="${cosa.imagen}" alt="${cosa.texto}">`;
            lista.appendChild(listItem);
        });
    }

    // Llama a la función para agregar la lista cuando se carga la página
    agregarLista();
});
