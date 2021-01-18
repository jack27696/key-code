//get the keycode element
const keycode_title = document.querySelector("#keycode h1");

//Listern for keydown event
document.addEventListener("keydown", (event) =>{

	keycode_title.innerText = event.keyCode;

});