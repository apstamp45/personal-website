let menuState = false;
let menu = document.getElementById("dropdown");
let main = document.getElementById("main");
let itemsContainer = document.getElementById("dropdown-items");
let items = document.getElementsByClassName("dropdown-item");
window.addEventListener("load", () => {
	if (window.innerWidth < 815) {
		let left = main.getBoundingClientRect().left;
		console.log(left);
		menu.style.left = left - 4.5 + "px";
	} else {
		menu.style.left = "";
	}
});
menu.addEventListener("mouseover", function() {
	if (!menuState) {
		itemsContainer.classList.add("visible");
		for (let i = 0; i < items.length; i++) {
			items[i].classList.add("visible");
		}
	}
});
menu.addEventListener("mouseout", function() {
	if (!menuState) {
		for (let i = 0; i < items.length; i++) {
			items[i].classList.remove("visible");
		}
		itemsContainer.classList.remove("visible");
	}
});
menu.addEventListener("click", function() {
	menuState = !menuState;
	if (menuState) {
		itemsContainer.classList.add("visible");
		for (let i = 0; i < items.length; i++) {
			items[i].classList.add("visible");
		}
	} else {
		itemsContainer.classList.remove("visible");
		for (let i = 0; i < items.length; i++) {
			items[i].classList.remove("visible");
		}
	}
});

window.addEventListener("resize", () => {
	if (window.innerWidth < 815) {
		let left = main.getBoundingClientRect().left;
		console.log(left);
		menu.style.left = left - 4.5 + "px";
	} else {
		menu.style.left = "";
	}
});
