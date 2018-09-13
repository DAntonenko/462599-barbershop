var loginLink = document.querySelector(".login-link");
var mapLink = document.querySelector(".map-link");

var loginBox = document.querySelector(".modal-login");
var mapBox = document.querySelector(".modal-map");

var loginClose = document.querySelector(".login-close");
var mapClose = document.querySelector(".map-close");

loginLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	loginBox.classList.remove("modal-hide"); 
});

mapLink.addEventListener("click", function() {
	mapBox.classList.remove("modal-hide");
});

loginClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	loginBox.classList.add("modal-hide");
});

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapBox.classList.add("modal-hide");
});