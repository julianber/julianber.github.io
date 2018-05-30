var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var but = document.createElement("button");
	var oncl = document.createAttribute("onclick")
	var buto = document.createAttribute("onclick")
	oncl.value = "toggleEvent(this)";
	li.setAttributeNode(oncl);
	buto.value = "borrar(this.parentNode)";
	but.setAttributeNode(buto);
	but.appendChild(document.createTextNode(" Borrar"));
	li.appendChild(document.createTextNode(input.value+" "));
	li.appendChild(but);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function toggleEvent(elemento) {
	elemento.classList.toggle("done");
}

function borrar(elemento){
	elemento.parentNode.removeChild(elemento);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



