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
	checkMenuPosition();
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

profile = document.getElementById("profile")
function adjustSize(profile) {
	if (document.getElementById("main").offsetWidth < 470) {
		profile.style.width = "100%";
		profile.style.paddingBottom = "16px";
		profile.style.marginLeft = "0px";
		profile.style.marginRight = "var(--padding)";
	} else {
		profile.style.width = "30%"
		profile.style.paddingBottom = "0px";
		profile.style.marginLeft = "var(--padding)";
		profile.style.marginRight = "0px";
	}
}
profile.addEventListener("load", adjustSize(profile));

window.addEventListener("resize", () => {
	checkMenuPosition();
	adjustSize(profile);
});

function checkMenuPosition() {
	if (window.innerWidth < 928) {
		let left = main.getBoundingClientRect().left;
		console.log(left);
		menu.style.left = left - 4.5 + "px";
	} else {
		menu.style.left = "";
	}
}

const span = document.getElementsByTagName("span");
for (let i = 0; i < span.length; i++) {
	span.item(i).onclick = function() {
		navigator.clipboard.writeText(span.item(i).innerText);
	};
}
