const followingInterval = setInterval(() => {
	document.querySelectorAll("body>div>div>div>div>div")[2].scrollBy(0, 1500);
	following = Array.from(
		document.querySelectorAll("div>div>span>a>span")
	).map((e) => e.textContent);
	console.log(following.length);
	if (following.length > 20) {
		clearInterval(followingInterval);
	}
}, 10000);


let counter = 0;
const openInterval = setInterval(() => {
	setTimeout(() => {
		console.log("setTimeout", counter);
		newWindow.close();
	}, 9000);

	newWindow = window.open("https://google.com");
	counter++;
	console.log("setInterval", counter);
	if (counter === 5) {
		console.log("END", counter);
		clearInterval(openInterval);
	}
}, 10000);

