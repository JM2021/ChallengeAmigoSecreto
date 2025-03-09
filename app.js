let amigos = [];

document.getElementById('amigo').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo !== '') {  
        amigos.push(nombreAmigo);

        let lista = document.getElementById('listaAmigos');
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nombreAmigo;
        lista.appendChild(nuevoElemento);

        limpiarCaja();
    } else { 
        alert("Por favor, ingrese un nombre válido.");
    }
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    asignarTextoElemento('#resultado', `El amigo sorteado es: ${amigoSorteado}`);
    // Deshabilitar el botón "Añadir" después del sorteo
    document.querySelector('.button-add').setAttribute('disabled', 'true');
    document.querySelector('#amigo').setAttribute('disabled', 'true');
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}
