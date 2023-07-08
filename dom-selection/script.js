// console.log(window);

console.log("\n--------DOM Selection");

// const regForm = document.getElementById("regForm");
const regForm = document.querySelector("#regForm");

// console.log(regForm);
// console.log(regForm.className);
// console.log("regForm firstChild");

// const formChildren = Array.from(regForm.children);

// formChildren.forEach((child) => console.log(child));

// const formLabels = Array.from(document.getElementsByClassName("form-label"));
const formLabels = Array.from(document.querySelectorAll(".form-label"));
// console.log(formLabels);

console.log(`document.querySelector(".form-label")`);
const formLabel = document.querySelector(".form-label");
console.log(formLabel);

formLabels.forEach((c) => console.log(c));
// console.log(formLabels[0]);
// console.log(formLabels[1]);
// console.log(formLabels[2]);
// console.log(formLabels[3]);
// console.log(formLabels[4]);
// console.log(formLabels[5]);

const ul = document.querySelector("ul");

console.log(`document.querySelector("ul")`);
console.log(ul);

console.log(`ul.firstElementChild)`);
console.log(ul.firstElementChild);

console.log(`ul.lastElementChild)`);
console.log(ul.lastElementChild);

const li1 = ul.querySelector("li");
console.log(`ul.querySelector("li");`);
console.log(li1);

const li2 = li1.nextElementSibling;
console.log(`li1.nextElementSibling`);
console.log(li2);
