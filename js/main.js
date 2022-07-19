import initBreads from "./breeds.js";


const buttonBreeds = document.querySelector(".category-block__button_breeds");
const mainImg = document.querySelector(".main__img");
const main = document.querySelector(".main");
const mainHeader = document.querySelector(".main-header");
const mainWrapper = document.querySelector(".main-wrapper");

// const button = document.querySelector(".test");

const openBreeds = () => {
    mainImg.classList.add("hidden");
    main.style.background = "#fff";
    mainHeader.style.background = "#F8F8F7";
    mainWrapper.style.background = "#F8F8F7";
    buttonBreeds.style.background = "#FF868E";
    buttonBreeds.style.color = "#FFF";
    initBreads();
}

window.onload = localStorage.setItem("last", 0);

//test
// button.disabled = true




buttonBreeds.addEventListener("click", openBreeds);