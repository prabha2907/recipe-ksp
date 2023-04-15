import data from "./recipeData.js";

const searchBox = document.querySelector("#serchForm");

searchBox.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchText = event.target.searchText;

  data.forEach((item) => {
    const markUp = `
    <div class="box">
    <img src="https://www.who.int/images/default-source/searo---images/health-topic-images/diabetes/diabetesbanner.tmb-1024v.jpg?Culture=en&sfvrsn=10b34adb_1" alt="">
    <div>
      <h2>Cheese Cake</h2>
      <p></p>
    </div>
  </div>
    `;
  });
});