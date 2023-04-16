import data from "./recipeData.js";

const searchBox = document.querySelector("#searchText");

const parent = document.querySelector(".master1")

function showText (search = "") {
    parent.innerHTML = " "
	data.forEach((item) => {
		if(search==="" || item.name.includes(search)) {
			const markUp = `
			<div class="box">
			<img src="${item.image}" alt="">
			<div class="content">
				<h2>${item.name}</h2>
				<span class="text">
				<p><b>PrepTime :</b>${item.PrepTime}</p>|
				<p><b>CookTime:</b> ${item.CookTime}</p>
				</span>
			</div>
		</div>
			`;
			parent.innerHTML+= markUp
		}
	});
}

showText()

searchText.addEventListener("input", (event)=>{
    showText(event.target.value.toLowerCase())
});