var loginLink = document.querySelector(".login-link");
var mapLink_1 = document.querySelector(".map-link_1");
var mapLink_2 = document.querySelector(".map-link_2");

var loginBox = document.querySelector(".modal-login");
var mapBox = document.querySelector(".modal-map");

var loginClose = document.querySelector(".login-close");
var mapClose = document.querySelector(".map-close");

var loginInput = loginBox.querySelector("[name=login]");
var passwordInput = loginBox.querySelector("[name=password]");
var form = loginBox.querySelector("form");

var isStorageSupport = true;
var storageLogin = localStorage.getItem("login");
try {
	storageLogin = localStorage.getItem("login");
} catch (err) {
isStorageSupport = false;
}

loginLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	loginBox.classList.remove("modal-hide");
	loginBox.classList.add("modal-show-bounce");
	loginInput.focus();

	if (storageLogin) {
		loginInput.value = storageLogin;
		passwordInput.focus();
	}
});

form.addEventListener("submit", function (evt) {
	if (!loginInput.value) {
		evt.preventDefault();
		loginBox.classList.add("modal-error");
	} else {
		localStorage.setItem("login", loginInput.value);
	}

	if (!passwordInput.value) {
		evt.preventDefault();
		loginBox.classList.add("modal-error");
	}
});

loginClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	loginBox.classList.add("modal-hide");
	loginBox.classList.remove("modal-error");
});

mapLink_1.addEventListener("click", function() {
	mapBox.classList.remove("modal-hide");
	mapBox.classList.add("modal-show-scale");
});

mapLink_2.addEventListener("click", function() {
	mapBox.classList.remove("modal-hide");
	mapBox.classList.add("modal-show-scale");
});

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapBox.classList.add("modal-hide");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();

		if (!loginBox.classList.contains("modal-hide")) {
			loginBox.classList.add("modal-hide");
			loginBox.classList.remove("modal-error");
		}

		if (!mapBox.classList.contains("modal-hide")) {
			mapBox.classList.add("modal-hide");
		}
	}
});