let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (verificarNombre(amigo)) {
        agregarNombre(amigo);
    }
    limpiarCampoAmigo();
}

function agregarNombre(nombre) {
    amigos.push(nombre);
    actualizarLista();
}

function actualizarLista() {
    listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    })
}

function limpiarCampoAmigo() {
    document.getElementById("amigo").value = "";
}


function verificarNombre(nombre) {
    if (!nombre) {
        mostrarError("El nombre no puede estar vacío");
        return false;
    }

    if (amigos.includes(nombre)) {
        mostrarError("El nombre ya está incluido en la lista")
        return false;
    }

    return true;
}

function sortearAmigo() {
    if (amigos.length == 0) {
        mostrarError("No hay amigos para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    amigos.splice(indiceAleatorio, 1);
    actualizarLista();
    actualizarResultado(amigoSorteado);
}

function actualizarResultado(nombre) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${nombre}`;
}

function mostrarError(mensaje) {
    document.getElementById("error").innerHTML = mensaje;
}