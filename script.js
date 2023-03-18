let menuState = false;
let menu = document.getElementById("dropdown");
let itemsContainer = document.getElementById("dropdown-items");
let items = document.getElementsByClassName("dropdown-item");
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
})
