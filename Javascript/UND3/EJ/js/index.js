function changeColor (elemento) {
	elemento.style.background = '#4d62d0';
	elemento.children[0].style.background = 'inherit';
}

function changeColor2 (elemento) {
	elemento.style.background = '#149c5f';
	elemento.children[0].style.background = 'inherit';

}

function modifyContent (elemento) {
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

function desactivarVolumen () {
	document.getElementById("speaker-radio").checked = false;
	document.querySelector("#speaker img").setAttribute("src","img/mute.png");
}

function activiarVolumen () {
	document.getElementById("speaker-radio").checked = true;
	document.querySelector("#spekaer img").setAttribute("src", "img/spekaer.png");
}

function saludo () {
	var nombreUsuario = document.getElementsByName("nombre")[0].value;
	var nuevoSaludo = document.createElement("h2");
	var contenidoSaludo = document.createTextNode("Bienvenido " + nombreUsuario );
	nuevoSaludo.appendChild(contenidoSaludo);
	document.querySelector('.container-saludo').appendChild(nuevoSaludo);

}

function addConent (element) {
	var newText = document.createElement('p');
	var TextContent = document.createTextNode("Bicycle euro-pop vehicle tank-traps ablative physical spook saturation point.-space j-pop San Francisco sub-orbital voodoo god 8-bit pistol Chiba boy sunglasses sprawl uplink. Numinous systema warehouse geodesic camera wonton soup-ware rain office order-flow woman shoes. Physical vinyl Kowloon DIY nano-crypto-industrial grade augmented reality tower sentient j-pop human hotdog ablative uplink math. Math-table beef noodles Shibuya wristwatch order-flow human assault soul-delay carbon. Smart-chrome jeans urban dead table augmented reality nano-towards. Sprawl neural girl voodoo god post-paranoid computer bicycle. Dead tube car denim sunglasses corrupted papier-mache lights smart-Shibuya singularity advert tattoo. Paranoid sign papier-mache dome table systema nodal point warehouse rifle office. ");
	newText.appendChild(TextContent);
	element.appendChild(newText);

}

function modifyTitle (element, text) {
	element.innerHTML = text;
}

