 (function (console) {
    console.save = function (data, filename) {
        if (!data) {
            console.error("Console.save: No data");
            return;
        }

        if (!filename) filename = "console.json";

        if (typeof data === "object") {
            data = JSON.stringify(data, undefined, 4);
        }

        var blob = new Blob([data], { type: "text/json" }),
            e = document.createEvent("MouseEvents"),
            a = document.createElement("a");

        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
        e.initMouseEvent(
            "click",
            true,
            false,
            window,
            0,
            0,
            0,
            0,
            0,
            false,
            false,
            false,
            false,
            0,
            null
        );
        a.dispatchEvent(e);
    };
})(console);


// document.querySelectorAll(".isgrP")[0].scrollBy(0, 500);
// following = document
// 	.querySelectorAll("div>ul>div li>div>div>div>div>div>span>a>span")
// 	.map((e) => e.textContent);



let username = document.querySelector('section>div>h2').textContent

let follows = Array.from(
	document.querySelectorAll("header>section>ul>li>a>div>span")
).map((e) => Number(e.textContent.replaceAll(",", "")));

let followers = follows[0];
let following = follows[1];

let posts = Number(
	document.querySelector("header>section>ul>li>div>span").textContent
);

let name = document.querySelector("header>section>div>span");
if (name !== null) {
	name = name.textContent;
} else {
	name = "Blank";
}

text = document.querySelectorAll("header>section>div>a>span>div");

let mutuals;
if (text.length !== 0) {
	text = text[0].textContent;

	if (text.split(",").length < 3) {
		mutuals = text.split(",").length;
	} else if (text.split(",")[2].indexOf("+") !== -1) {
		mutuals =
			3 +
			Number(
				text
					.split(",")[2]
					.slice(
						text.split(",")[2].indexOf("+") + 1,
						text.split(",")[2].indexOf(" more")
					)
			);
	} else if (text.split(",")[2].indexOf("+") === -1) {
		mutuals = 3;
	}
} else {
	mutuals = 0;
}

let padding = '      '
let time;
if (!posts) {
	time = "N/A";
} else {
	document.querySelector("div>article>div>div>div>div>a").click();
	setTimeout(() => {
		time = document.querySelector("time").title;
		output = `${username}${padding}${name}${padding}${mutuals}${padding}${followers}${padding}${following}${padding}${posts}${padding}${time}$`
		console.save(output , username+'.txt');
	}, 5000);
}
