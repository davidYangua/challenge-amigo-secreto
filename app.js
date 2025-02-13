// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    let campoNombre = document.querySelector('#amigo');
    let nombre = campoNombre.value.trim();

    if(nombre !== ''){
        listaAmigos.push(nombre);

        campoNombre.value = "";
        document.querySelector('#listaAmigos').innerHTML += `<p>${nombre}</p>`;
        console.log(listaAmigos);
    } else {
        alert('Por favor ingrese un nombre válido');
    }
}

function sortearAmigo() {
    let n = listaAmigos.length;

    let aleatorio = Math.floor(Math.random()*(n));
    
    document.querySelector('#listaAmigos').innerHTML = '';
    document.querySelector('#resultado').innerHTML = `<p>El amigo secreto es: ${listaAmigos[aleatorio]}</p>`;
}