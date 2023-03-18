window.onload = function() {
}

document.getElementById("dropdown")
		.addEventListener("mouseover", function() {
	let items = document.getElementsByClassName("dropdown-item");
	for (let i = 0; i < items.length; i++) {
		items[i].classList.add("visible");
	}
});

document.getElementById("dropdown")
		.addEventListener("mouseout", function() {
	let items = document.getElementsByClassName("dropdown-item");
	for (let i = 0; i < items.length; i++) {
		items[i].classList.remove("visible");
	}
});
