console.log("\n -----Create Element");

const div = document.createElement("div");
//document.body.append(div);
document.body.prepend(div);

// div.innerText = "Hello World";
// div.textContent = "Hello World";

// div.innerHTML = "<strong>Hello World</strong>";

// console.log(div.innerText);
// console.log(div.textContent);

const container = document.querySelector("#container");
console.log(container.innerText);
console.log(container.textContent);

console.log("\n -----Safe way to execute Inner HTML");

// const strong = document.createElement("strong");
// strong.innerText = "Hello World";
// document.body.prepend(strong);

console.log("\n -----Removing an element");

const ul = document.querySelector("ul");
const item1 = ul.querySelector("#item-1");
// item1.remove();
// ul.removeChild(item1);

console.log("\n -----Modifying Attributes");
console.log(item1.className);
console.log(item1.id);
console.log(item1.getAttribute("class"));
console.log(item1.getAttribute("id"));

// item1.setAttribute("class", "red-text");
item1.setAttribute("custom-attribute", "data");

console.log("\n -----classList");

// item1.classList.add("red-text");
item1.classList.add("red-text", "blue-background");
// item1.classList.toggle("red-text");

console.log("\n -----Style");
const item2 = ul.querySelector("#item-2");
item2.style.color = "yellow";
item2.style.backgroundColor = "rgb(0, 255, 0)";

console.log("\n---------------Event Listener");

function clickButton(event) {
  if (event.target.id == "button-1") {
    alert("Button1 Click");
  } else if (event.target.id == "button-2") {
    alert("Button2 Click");
  }
}

// function clickButton3() {
//   alert("Button 3 Click");
// }

const btn2 = document.querySelector("#button-2");
btn2.addEventListener("click", clickButton);

const btn3 = document.querySelector("#button-3");
btn3.addEventListener("click", () => alert("Button 3 Click"));
