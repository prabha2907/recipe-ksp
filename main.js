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

function showRecipeText(data){
	console.log(data)
	const markUp1 = `
	<div class="mainDiv">
		<button id="trashbutn">X</button>
		<div class="recipe-info">
			<img src="${data.image}">
			<div class="infodata">
				<h2>${data.name}</h2>
				<span>
					<p>PrepTime: ${data.PrepTime}</p>
					<p>CookTime: ${data.CookTime}</p>
				</span>

				<div class="itemdata">
					<h4>INGREDIENTS</h4>
					<ul class="textdata">
						${data.INGREDIENTS.map(item=>`<li>${item}</li>`).join(" ")}
					</ul>
				</div>
			</div>
			<div>
				<h4>PREPARATION</h4>
				<div>
					${data.PREPARATION.map(item=> `<p>${item}</p>` ).join(" ")}
				</div>
			</div>
		</div>
	</div>
`
	parent.innerHTML = " "
	document.querySelector(".recipe-info").innerHTML = markUp1
}

searchText.addEventListener("input", (event)=>{
    showText(event.target.value.toLowerCase())
});

document.querySelector(".recipe-info").addEventListener("click",function(e){
	const target = e.target.closest("#trashbutn")

	if(!target) return 

	document.querySelector(".recipe-info").innerHTML = " "
	showText()

})

parent.addEventListener("click",function(e){
	const target = e.target.closest(".box")

	if(!target) return

	const title = target.querySelector("h2").textContent.trim()

	console.log(data.find(item=> item.name === title ))

	showRecipeText(data.find(item=> item.name === title ))
})

