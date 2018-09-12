var loginLink = document.querySelector(".login-link");
var mapLink = document.querySelector(".map-link");

var loginBox = document.querySelector(".modal-login");
var mapBox = document.querySelector(".modal-map");

var loginClose = document.querySelector(".login-close");
var mapClose = document.querySelector(".map-close");

loginLink.addEventListener("click", function() {
	console.log("Клик по ссылке вход");
});

mapLink.addEventListener("click", function() {
	console.log("Клик по ссылке mapa");
});

loginClose.addEventListener("click", function() {
	console.log("Клик по cross login");
});

mapClose.addEventListener("click", function() {
	console.log("Клик по cross mapa");
});