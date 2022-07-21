import initBreads from "./breeds.js";
import initGallery from "./gallery.js";

const buttonBreeds = document.querySelector(".category-block__button_breeds");
const mainImg = document.querySelector(".main__img");
const main = document.querySelector(".main");
const mainHeader = document.querySelector(".main-header");
const mainWrapper = document.querySelector(".main-wrapper");
const buttonGallery = document.querySelector(".category-block__button_gallery");

const header = 
    `
        
            <div class="main-input">
                <input type="text" class="main-input__input" placeholder="Search for breeds by name">
                <button class="main-input__button">
                    <img src="./image/icons/search.svg" alt="search" class="main-input__img">
                </button> 
            </div>
            <div class="main-buttons">
                <button class="main-buttons__button main-buttons__button_smile">
                    <img src="./image/icons/smile.svg" alt="smile" class="main-buttons__img">
                </button> 
                <button class="main-buttons__button main-buttons__button_hart">
                    <img src="./image/icons/hart.svg" alt="hart" class="main-buttons__img">
                </button> 
                <button class="main-buttons__button main-buttons__button_sad">
                    <img src="./image/icons/sad.svg" alt="sad" class="main-buttons__img">
                </button> 
            </div>
        
    `

const openBreeds = () => {
    buttonBreeds.removeEventListener("click", openBreeds);
    buttonGallery.removeEventListener("click", openGallery);
    mainImg.classList.add("hidden");
    main.style.background = "#fff";
    mainHeader.style.background = "#F8F8F7";
    mainWrapper.style.background = "#F8F8F7";
    buttonBreeds.style.background = "#FF868E";
    buttonBreeds.style.color = "#FFF";
    initBreads();
    
}

const openGallery = () => {
    buttonGallery.removeEventListener("click", openGallery);
    buttonBreeds.removeEventListener("click", openBreeds);
    mainImg.classList.add("hidden");
    main.style.background = "#fff";
    mainHeader.style.background = "#F8F8F7";
    mainWrapper.style.background = "#F8F8F7";
    buttonGallery.style.background = "#FF868E";
    buttonGallery.style.color = "#FFF";
    mainHeader.style.marginBottom = 10
    initGallery();
    
}


window.onload = localStorage.setItem("last", 0);



buttonBreeds.addEventListener("click", openBreeds);
buttonGallery.addEventListener("click", openGallery);

export {openBreeds, openGallery, header};