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

function reduceSize (argument) {
	elemento.style.width = '18%';
}

function increaseSize (argument) {
	elemento.style.width = '20%';
}

function reduceTextSize (argument) {

	for (var i = 0; i < document.querySelectorAll("[class^='contenido-container'] [class^='item-'] h1").length; i++) {
		document.querySelectorAll("[class^='contenido-container'] [class^='item-'] h1")[i].style.fontSize = 'small';
	}

}

function increaseTextSize (argument) {
	for (var i = 0; i < document.querySelectorAll("[class^='contenido-container'] [class^='item-'] h1").length; i++) {
		document.querySelectorAll("[class^='contenido-container'] [class^='item-'] h1")[i].style.fontSize = 'xx-large';
	}
}


