'use strict';

const nasaApiKey = "rygwqAMdjwlsTdMA4ksrAHiyOFtqX05nlXnxZfQv";
const nasaEndpoint = "https://api.nasa.gov/planetary/apod?api_key=";
const nasaUrl = nasaEndpoint + nasaApiKey;

window.addEventListener('click', (ev) => {

	if(ev.target.matches('#btnMh')) { // menu hamburguesa
		let mh = document.getElementById('divMenuham');
		return mh.style.width === '170px' ? mh.style.width = '0' : mh.style.width = '170px';
	} // Fri 25 Oct 2019 09:35:17 AM -05

	// elementos menu sidebar menu superior derecha.
	if(ev.target.matches('.menuAccion')) { // menu Inicio
		window.location.replace(ev.target.dataset.url);
	}

	if(ev.target.matches('#call')) { // menu hamburguesa
		alert('marcarle a '+ ev.target.dataset.user);
	}


	if(ev.target.matches('.url')) { // menu Inicio
		window.open(ev.target.dataset.url, '_blank' );
	}
}, {capture:true, passive:true});

//fetch.
	fetch(nasaUrl)
	.then(response => response.json())
	.then(data => representarDatos(data));

function representarDatos(data) {
	let dataContenedor = [];

		dataContenedor += `
			<div>${data.date} - ${data.explanation}</div>
			<div><img src="${data.url}" alt="" /></div>
		`;
	divData.innerHTML = dataContenedor;
}

function actMenuHam() {
	return modalMenuHam.style.width === '175px' ? modalMenuHam.style.width = '0' : modalMenuHam.style.width = '175px';
}


function captureNombre () {
	let nombre = prompt('Cual es tu nombre?');
	alertNombre(nombre);
}

function alertNombre(string) {
	string = stringToUppercase(string);
	alert('El nombre capturado es '+ string);
}

function stringToUppercase(string) {
	return string.toUpperCase();
}

function actMenuHam() {
	return modalMenuHam.style.width === '175px' ? modalMenuHam.style.width = '0' : modalMenuHam.style.width = '175px';
}

// JSON: Javascript Object Notation

let estado = [
	{
	"estado":"estado",
	"usuario":"Santi",
	"status": "En Espera",
	"twits":	"twits: 94",
	"likes":"likes: 219",
	},

];

const dApp = document.getElementById('dataEstadoApp');
let data = [];

estado.forEach((el, index) => {
	data += `
		<div class="general">${el.estado}</div>
		<div class="celda">${el.usuario}</div>
		<div class="celda">${el.status}</div>
		<div class="celda">${el.twits}</div>
		<div class="celda">${el.likes}</div>
	`;
});

dApp.innerHTML = data;

