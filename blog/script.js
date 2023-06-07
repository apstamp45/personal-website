window.addEventListener("load", () => {
	let posts = document.getElementsByClassName("post");
	//let fileReader = new FileReader();
	for (post of posts) {
		let url = post.getAttribute("url");
		let ajax = new XMLHttpRequest();
		ajax.open("GET", url, false);
		ajax.send();
		let html = $.parseHTML(ajax.responseText);
		//post.innerHTML = html.getElementByID("date");
		console.log(html);
	}
});
