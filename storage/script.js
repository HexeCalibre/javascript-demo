console.log("\n----------------LocalStorage");

localStorage.setItem("firstName", "Juan");
console.log(localStorage.getItem("firstName"));
localStorage.removeItem("firstName");

console.log("\n----------------SessionStorage");

sessionStorage.setItem("firstName", "Juan");
console.log(sessionStorage.getItem("firstName"));
sessionStorage.removeItem("firstName");

console.log("\n----------------Cookies");

document.cookie =
  "firstName=Juan; expires=" + new Date(2024, 8, 1).toUTCString();
