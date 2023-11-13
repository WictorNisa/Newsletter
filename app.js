const form = document.getElementById("form");
const homePage = document.getElementById("home-page");
const successPage = document.getElementById("success-page");
const returnHomeButton = document.getElementById("dissmiss");
const userEmail = document.getElementById("user-email");
const input = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userEmail.innerHTML = input.value;
  homePage.style.display = "none";
  successPage.style.display = "block";
});

returnHomeButton.addEventListener("click", () => {
  homePage.style.display = "flex";
  successPage.style.display = "none";
});
