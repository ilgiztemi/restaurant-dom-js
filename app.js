import { choices } from "./data.js";
const options = choices;

//this is where we get some elements so we can add events below
const main = document.querySelector(".main");
const btn = document.querySelector(".btn");

//this is where we create ui elements
function allFood(options) {
  const food = options.map(
    (el) =>
      `
    <div class="card" id='${el.id}'>
        <img src=${el.img} alt="food">
        <div class="food">
            <h3>${el.title} <span id="price">$ ${el.price}</span></h3>
            <p>${el.text}</p>
            </div>
        </div>
    `
  );
  main.innerHTML = food;
}
allFood(options);

//this is where we compare id's for each category and filter them based on that
function selectFood() {
  const btns = btn.children;
  for (let i of btns) {
    i.addEventListener("click", () => {
      console.log(i.id);
      if (i.id === "all") {
        allFood(options);
      } else {
        const filterData = options.filter((choice) => choice.category === i.id);
        allFood(filterData);
      }
    });
  }
}
selectFood();
