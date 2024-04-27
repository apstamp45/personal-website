let profile = document.getElementById("profile")

window.addEventListener("load", () => {
	adjustSize(profile);
});
window.addEventListener("resize", () => {
	adjustSize(profile);
});

function adjustSize(profile) {
	if (document.getElementById("main").offsetWidth < 470) {
		profile.style.width = "calc(100% - 25px)";
	} else {
		profile.style.width = "30%"
	}
}
