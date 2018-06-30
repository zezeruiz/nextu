/*---------------------- L2 ----------------------*/

function changeColorBtn (elemento) {
	elemento.style.background = '#4d62d0';
	if (elemento.children[0]) {
    elemento.children[0].style.background = "inherit";

  }
}

function returnColorBtn (elemento) {
	elemento.style.background = '#149c5f';
	elemento.children[0].style.background = 'inherit';

}

function ShowsContent (elemento) {
	for (var i = 0; i <document.querySelectorAll("[class^='item-']").length; i++) {		
		document.querySelectorAll("[class^='item-']")[i].style.width = '4%';
		document.querySelectorAll("[class^='item-']")[i].style.background = '#4d62d0';
	}

	for (var i = 0; i < document.querySelectorAll("[class^='item-'] *").length; i++) {
		document.querySelectorAll("[class^='item-'] *")[i].style.display = 'none';
	}

	elemento.style.width = '96%';
	elemento.style.background = 'white';

	for (var i = 0; i < elemento.children.length; i++) {
		elemento.children[i].style.display = 'block';
	}

}

function reduceSize (elemento) {
	elemento.style.width = '18%';
}

function increaseSize (elemento) {
	elemento.style.width = '20%';
}

function reduceTextSize () {

	for (var i = 0; i < document.querySelectorAll("[class^='contenido-container'] [class^='item-'] h1").length; i++) {
		document.querySelectorAll("[class^='contenido-container'] [class^='item-'] h1")[i].style.fontSize = 'small';
	}

}

function increaseTextSize () {
	for (var i = 0; i < document.querySelectorAll("[class^='contenido-container'] [class^='item-'] h1").length; i++) {
		document.querySelectorAll("[class^='contenido-container'] [class^='item-'] h1")[i].style.fontSize = 'xx-large';
	}
}

/*---------------------- L3 ----------------------*/

function desactivarVolumen () {
	document.getElementById("speaker-radio").checked = false;
	document.querySelector("#speaker img").setAttribute("src","img/mute.png");
}

function activiarVolumen () {
	document.getElementById("speaker-radio").checked = true;
	document.querySelector("#speaker img").setAttribute("src", "img/speaker.png");
}

function saludoIncial () {
	var nombreUsuario = document.getElementsByName("nombre")[0].value;
	var nuevoSaludo = document.createElement("h2");
	var contenidoSaludo = document.createTextNode("Bienvenido " + nombreUsuario );
	nuevoSaludo.appendChild(contenidoSaludo);
	document.querySelector('.container-saludo').appendChild(nuevoSaludo);

}

function addContent (element) {
	var newText = document.createElement('p');
	var TextContent = document.createTextNode("Bicycle euro-pop vehicle tank-traps ablative physical spook saturation point.-space j-pop San Francisco sub-orbital voodoo god 8-bit pistol Chiba boy sunglasses sprawl uplink. Numinous systema warehouse geodesic camera wonton soup-ware rain office order-flow woman shoes. Physical vinyl Kowloon DIY nano-crypto-industrial grade augmented reality tower sentient j-pop human hotdog ablative uplink math. Math-table beef noodles Shibuya wristwatch order-flow human assault soul-delay carbon. Smart-chrome jeans urban dead table augmented reality nano-towards. Sprawl neural girl voodoo god post-paranoid computer bicycle. Dead tube car denim sunglasses corrupted papier-mache lights smart-Shibuya singularity advert tattoo. Paranoid sign papier-mache dome table systema nodal point warehouse rifle office. ");
	newText.appendChild(TextContent);
	element.appendChild(newText);

}

function modifyTitle (element, text) {
	element.innerHTML = text;
}

/*---------------------- L4 ----------------------*/


var Eventos = {

	init: function () {
		
		document.onkeypress = this.eventoSonido;
		this.asignarEventosBotones('boton-accion');
		this.asignarEventosBotones('boton-next');
		this.asignarEventoMostrar();
		document.getElementById('increase-font').onclick = increaseTextSize;
		document.getElementById('decrease-font').onclick = reduceTextSize;
		document.querySelector('.boton-check img').onclick = this.eventoSaludo;
	},

	asignarEventosBotones: function (selector) {
		var botonesPagina = document.getElementsByClassName(selector);
		for (var i = 0; i < botonesPagina.length; i++) {
			botonesPagina[i].onmouseover = this.eventoColorBotones;
			botonesPagina[i].onmouseleave = this.eventoRetornarColorBotones;
		}
	},
	eventoColorBotones: function (event) {
		changeColorBtn(event.target);
	},
	eventoRetornarColorBotones: function (event) {
		returnColorBtn(event.target);
	},

	eventoMostrarContenido: function (event) {
		ShowsContent(event.target);
	},

	eventoAddText: function (evente) {
		addContent(event.target);
	},

	asignarEventoMostrar: function () {
		var bloques = document.querySelectorAll("[class^='item-']");
		for (var i = 0; i < bloques.length; i++) {
			bloques[i].onclick = this.eventoMostrarContenido;
			bloques[i].onclick = this.eventoAddText;
		}
	},

	eventoSonido: function () {
		if (event.which == 48) {

			desactivarVolumen();

		} else if (event.which == 57) {
			activiarVolumen();
		}
	},

	eventoSaludo: function (event) {
		saludoIncial();
		document.getElementById('myModal').style.display = 'none';
	}


}

Eventos.init();