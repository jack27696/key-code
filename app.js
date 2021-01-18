//get the keycode element
const keycode_title = document.querySelector("#keycode h1");
const eventkey = document.querySelector("#eventkey h2");
const eventcode = document.querySelector("#eventcode h2");

//Listern for keydown event
document.addEventListener("keydown", (event) =>{

	keycode_title.innerText = event.keyCode;
	eventkey.innerText = event.key;
	eventcode.innerText = event.code;

});