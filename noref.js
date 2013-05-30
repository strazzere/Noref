var links = document.body.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
	var rel = links[i].getAttribute("rel");
	links[i].setAttribute("rel", rel != null ? rel+" noreferrer" : "noreferrer");
}