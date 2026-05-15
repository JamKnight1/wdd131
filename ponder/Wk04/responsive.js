// const menuButton = document.querySelector(".menu-btn");
// const mobileMenu = document.getElementById("mobile-menu");

// menuButton.addEventListener("click", () => {

//     menuButton.classList.toggle("change");
//     mobileMenu.classList.toggle("show");
//     console.log("clicked")
// });

console.log("JS loaded");

const menuButton = document.querySelector(".menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

console.log(menuButton);
console.log(mobileMenu);

menuButton.addEventListener("click", () => {

    console.log("clicked");

    menuButton.classList.toggle("change");
    mobileMenu.classList.toggle("show");
});