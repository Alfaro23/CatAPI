import {openBreeds, openGallery, header} from "./main.js";

const initBreads = () => {

    const main = document.querySelector(".main");
    const mainHeader = document.querySelector(".main-header");
    const mainWrapper = document.querySelector(".main-wrapper");
    let catsArr = [];
    let countTest = localStorage.setItem("last", 0);
    let getTest = localStorage.getItem("last");
    let counter = 0;
    var chekCount = 0;
    let testArrLenght = 0;
    let page = 0;
    let lastCat = {
        lastPage: false,
    };
    let select = document.querySelector("#select-bg");
    console.log(select)
    
    const headerContainer = 
    `
        <div class="main-container-head">
            <button class="main-container-head__back">
                <img src="./image/icons/leftArrowCard.svg" alt="left_arrow" class="main-container-head__img">
            </button>
            <p class="main-container-head__name">BREEDS</p>
            <select id="select-bg" name="breeds" class="main-container-head__select main-container-head__select_breeds">
                <option value="All breeds"selected>All breeds</option>
            </select>
            <select id="select-bg" name="breeds" class="main-container-head__select main-container-head__select_limit">
                <option value="5">Limit: 5</option>
                <option value="10" selected>Limit: 10</option>
                <option value="15">Limit: 15</option>
                <option value="20">Limit: 20</option>
            </select>
            <div class="sort sort-up">
                <svg class="sort-up__image" width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0.212836C4.26035 -0.0709452 4.68246 -0.0709452 4.94281 0.212836L8.94281 4.57284L8 5.6005L5.13807 2.48099V21.8H3.80474V2.48099L0.942809 5.6005L0 4.57284L4 0.212836ZM15.1381 1.45333C14.0335 1.45333 13.1381 2.42935 13.1381 3.63333V5.81333H17.1381V3.63333C17.1381 2.42935 16.2426 1.45333 15.1381 1.45333ZM17.1381 7.26667V10.1733H18.4714V3.63333C18.4714 1.6267 16.979 2.16564e-08 15.1381 2.16564e-08C13.2971 2.16564e-08 11.8047 1.6267 11.8047 3.63333V10.1733H13.1381V7.26667H17.1381ZM11.8047 11.6267H15.8047C17.2775 11.6267 18.4714 12.928 18.4714 14.5333C18.4714 15.4015 18.1222 16.1807 17.5686 16.7133C18.1222 17.2459 18.4714 18.0252 18.4714 18.8933C18.4714 20.4986 17.2775 21.8 15.8047 21.8H11.8047V11.6267ZM15.8047 15.9867C16.5411 15.9867 17.1381 15.336 17.1381 14.5333C17.1381 13.7307 16.5411 13.08 15.8047 13.08H13.1381V15.9867H15.8047ZM13.1381 17.44H15.8047C16.5411 17.44 17.1381 18.0907 17.1381 18.8933C17.1381 19.696 16.5411 20.3467 15.8047 20.3467H13.1381V17.44Z"/>
                </svg>
            </div>
            <div class="sort sort-down">
                <svg class="sort-down__image" width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.80474 19.319V0H5.13807V19.319L8 16.1995L8.94281 17.2272L4.94281 21.5872C4.81778 21.7234 4.64822 21.8 4.4714 21.8C4.29459 21.8 4.12502 21.7234 4 21.5872L0 17.2272L0.942809 16.1995L3.80474 19.319ZM15.1381 1.45333C14.0335 1.45333 13.1381 2.42935 13.1381 3.63333V5.81333H17.1381V3.63333C17.1381 2.42935 16.2426 1.45333 15.1381 1.45333ZM17.1381 7.26667V10.1733H18.4714V3.63333C18.4714 1.6267 16.979 0 15.1381 0C13.2971 0 11.8047 1.6267 11.8047 3.63333V10.1733H13.1381V7.26667H17.1381ZM11.8047 11.6267H15.8047C17.2775 11.6267 18.4714 12.928 18.4714 14.5333C18.4714 15.4015 18.1222 16.1807 17.5686 16.7133C18.1222 17.2459 18.4714 18.0252 18.4714 18.8933C18.4714 20.4986 17.2775 21.8 15.8047 21.8H11.8047V11.6267ZM15.8047 15.9867C16.5411 15.9867 17.1381 15.336 17.1381 14.5333C17.1381 13.7307 16.5411 13.08 15.8047 13.08H13.1381V15.9867H15.8047ZM13.1381 17.44H15.8047C16.5411 17.44 17.1381 18.0907 17.1381 18.8933C17.1381 19.696 16.5411 20.3467 15.8047 20.3467H13.1381V17.44Z"/>
                </svg>
            </div>
        </div>
    `

    const footer =
    `

            <div class="main-footer">
                <button id="prev" class="main-footer__button main-footer__button_prev"><img class="main-footer__img_prev" src="./image/icons/prev.svg" alt="arrow">PREV</button>
                <button class="main-footer__button main-footer__button_next" >NEXT<img class="main-footer__img_next" src="./image/icons/next.svg" alt="arrow"></button>
            </div>
        
    `

    //drawnng head in main

    let mainBody = document.createElement("div");
    mainBody.classList.add("main-body");
    mainBody.style.paddingLeft = 0;
    mainBody.style.paddingRight = 0;
    main.insertAdjacentElement("afterbegin", mainBody);

    let mainHead = document.createElement("div");
    mainHead.classList.add("main-head");
    main.insertAdjacentElement("afterbegin", mainHead);
    mainHead.insertAdjacentHTML("afterbegin", headerContainer);

    const mainContainerBack = document.querySelector(".main-container-head__back");

    
    // mainBody.insertAdjacentHTML("afterbegin", headerContainer);

    console.log(chekCount)
    // let first = localStorage.getItem("key");

    

    async function getData(url){

        const response = await fetch(url, {
            method: "GET",
            headers:{
                "x-api-key": "5575fdb1-1398-48fc-a8e9-3769b2c58a56",
                "Content-Type": "application/json"
            }
        })

        if (!response.ok) {
            throw new Error(`Ошибка по адресу ${url}. статус ошибки: ${response.status}`)
        }
        
        return await response.json();
    }

    const openCard = (elem) => {
        const mainFooter = document.querySelector(".main-footer")
        mainFooter.remove();
        for(let num = 0; num <= catsArr.length; num++){
            if(catsArr[num].id == elem){
                console.log(catsArr[num])
                console.log(num)

                main.innerHTML = ""
                mainBody.innerHTML =""
                mainHead.innerHTML = ""
                // const test = document.querySelector(".");

                let {name,temperament,life_span,origin, weight: {metric}, description, image:{url}} = catsArr[num]

                const cardCat = `

                <div class="main-containerCard">
                    
                    <div class="main-breed">
                        <button class="main-breed__back">
                            <img src="./image/icons/leftArrowCard.svg" alt="left_arrow" class="main-breed__img">
                        </button>
                        <p class="main-breed__name">BREEDS</p>
                        <p class="main-breed_id">${num + 1}</p>
                    </div>
                    
                    <div class="main-infoBreed">
                        <div class="main-top">
                            <img src="${url}" alt="${name}" class="main-top__img" width="100%" height="100%">
                            
                        </div>
                        <p class="main-bottom__name">${name}</p>
                        <div class="main-bottom">
                            
                            
                            <div class="main-description">
                                <table class="main-table">
                                    <caption class="main-bottom__description">${description}</caption>
                                    <tr>
                                        <td class="main-table__name main-table__category left-side">Temperament: </td>
                                        <td class="main-table__category">Origin: <span class="main-table__category-text">${origin}</span></td>
                                    </tr>
                                    <tr>
                                        <td class="main-table__temperament main-table__category-text left-side">${temperament}</td>
                                        <td class="main-table__category">Weight: <span class="main-table__category-text">${metric} kgs</span></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td class="main-table__category">Life span: <span class="main-table__category-text">${life_span} years</span></td>
                                    </tr>
                                </table>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>

                `
                main.insertAdjacentHTML("beforeend", cardCat);
                // console.log(metric, name, temperament, life_span, origin,description, url)
                const backArrow = document.querySelector(".main-breed__back");

                backArrow.addEventListener("click", () => {
                    main.innerHTML = "";
                    // mainBody.innerHTML =""
                    mainHeader.innerHTML ="";

                    mainHeader.insertAdjacentHTML("afterbegin", header);

                    let mainBody = document.createElement("div");
                    mainBody.classList.add("main-body");
                    mainBody.style.paddingLeft = 0;
                    mainBody.style.paddingRight = 0;
                    main.insertAdjacentElement("beforeend", mainBody);  

                    let mainHead = document.createElement("div");
                    mainHead.classList.add("main-head");
                    main.insertAdjacentElement("afterbegin", mainHead);
                    mainHead.insertAdjacentHTML("afterbegin", headerContainer);
                    
                    // drawCatCard()
                    nextDraw(mainBody);
                    console.log(1)
                    drawHeadBreeds();
                    console.log(2)
                    mainWrapper.insertAdjacentHTML("beforeend", footer);
                    const buttonNext = document.querySelector(".main-footer__button_next");
                    const buttonPrev = document.querySelector(".main-footer__button_prev");

                    const selectBreeds = document.querySelector(".main-container-head__select_breeds");
                    selectBreeds.addEventListener("change", () => {
                        console.log(selectBreeds.value)
                        mainBody.innerHTML = "";
            
                        let mainContainer = document.createElement("div");
                        // mainContainer.classList.add("main-container");
                        mainBody.insertAdjacentElement("beforeend", mainContainer);
            
                        // let mainContainer2 = document.createElement("div");
                        // mainContainer2.classList.add("main-container");
                        // mainBody.insertAdjacentElement("beforeend", mainContainer2);
            
                        for(let i = 0; i <= catsArr.length; i++){
                            console.log(catsArr[i].name)
                            
                            if(catsArr[i].name == selectBreeds.value && catsArr[i].name != undefined){
                                
                                const card = 
                                `
                                    <div class="test${i} image-container" style="width:100%; height: 100%;"><div class="hover" id="${catsArr[i].id}"><p class="hover__text">${catsArr[i].name}</p></div><img class="image-container__img" src="${catsArr[i].image.url}"  alt="${catsArr[i].name}" width="100%" height="100%"></img></div>
                                `
            
                                mainContainer.insertAdjacentHTML("beforeend", card);
                                const catImage = document.querySelector(".image-container")
                                catImage.addEventListener("click", (event) => {
                                    console.log("in preDraw");
                                    console.log(event.target);
                                    openCard(event.target.id);
                                });
                            }
                            if(selectBreeds.value == "All breeds"){
                                console.log("hi");
                                nextDraw(mainBody);
                                break;
                            }
            
                            
                        }
                    })
                    
                    buttonNext.addEventListener("click", () => {
                        
                        page++;
                        console.log(page);
                        chekPage(page, buttonNext, buttonPrev);
                        nextDraw(mainBody);
                        
                    });
                    buttonPrev.addEventListener("click", () => {
                        console.log(lastCat)
                        page--;
                        chekPage(page, buttonNext, buttonPrev);
                        prevDraw(mainBody);
                    });
                })
            }
        }
    }

    //test
    const nextDraw = (mainBody) => {
        let last = localStorage.getItem("last");
        
        counter++
        chekCount += counter;
        

        mainBody.innerHTML = "";

        let mainContainer = document.createElement("div");
        mainContainer.classList.add("main-container");
        mainBody.insertAdjacentElement("beforeend", mainContainer);

        let mainContainer2 = document.createElement("div");
        mainContainer2.classList.add("main-container");
        mainBody.insertAdjacentElement("beforeend", mainContainer2);

        for(let i = 0; i <= catsArr.length; i++){
            
            const card = `
                <div class="test${i} image-container"><div class="hover" id="${catsArr[last].id}"><p class="hover__text">${catsArr[last].name}</p></div><img src="${catsArr[last].image.url}"  alt="${catsArr[last].name}" width="100%" height="100%"></img></div>
        
            `
            
            
            // console.log(card);
            if(i <= 4){
                mainContainer.insertAdjacentHTML("beforeend", card);
                // card.addEventListener("click", openCard)
            }else if(i <= 9){
                mainContainer2.insertAdjacentHTML("beforeend", card);
                // card.addEventListener("click", openCard)
            }
            if(last === catsArr.length - 1){
                lastCat.lastPage = true
            }

            if( i >= 9){
                localStorage.setItem("last", last);
                // console.log("test" + localStorage.getItem("last"))
                break;
            }
            
            // console.log()
            last++
            testArrLenght += last
            
        }
        
        const catImage = document.querySelectorAll(".image-container")
            catImage.forEach((elem) => {
                elem.addEventListener("click", (event) => {
                    // console.log(event.target.id);
                    openCard(event.target.id);
                });
        })
        
    }
    const prevDraw = (mainBody) => {
        let last = localStorage.getItem("last") ;
        // const buttonNext = document.querySelector(".main-footer__button_next");
        // const buttonPrev = document.querySelector(".main-footer__button_prev");
        counter--
        chekCount -= counter
        mainBody.innerHTML = "";

        let mainContainer = document.createElement("div");
        mainContainer.classList.add("main-container");
        mainBody.insertAdjacentElement("beforeend", mainContainer);

        let mainContainer2 = document.createElement("div");
        mainContainer2.classList.add("main-container");
        mainBody.insertAdjacentElement("beforeend", mainContainer2);

        for(let i = 0; i <= catsArr.length; i++){
            //localStorage.
            // console.log();
            last--
            const card = `
                <div class="test${i} image-container"><div class="hover" id="${catsArr[last].id}"><p class="hover__text">${catsArr[last].name}</p></div><img src="${catsArr[last].image.url}" id="" alt="${catsArr[last].name}" width="100%" height="100%"></img></div>
        
            `
            
            // console.log(card);
            if(i <= 4){
                mainContainer2.insertAdjacentHTML("beforeend", card);
            }else if(i <= 9){
            
                mainContainer.insertAdjacentHTML("beforeend", card);
            }

            if( i >= 9){
                localStorage.setItem("last", last)
                break;
            }
            
        }
        // main.insertAdjacentHTML("afterbegin", headerContainer);
        const catImage = document.querySelectorAll(".image-container")
            catImage.forEach((elem) => {
                elem.addEventListener("click", (event) => {
                    console.log("in preDraw");
                    console.log(event.target.id);
                    openCard(event.target.id);
                });
            })
    }
    //

    function chekPage(page, buttonNext, buttonPrev){
        console.log(page)
        // console.log(element)
        if(page > 0  || page === 0){
            console.log("delete")
            console.log(buttonPrev)
            buttonPrev.removeAttribute("disabled", true);
            
        } else{
            console.log("add")
            buttonPrev.setAttribute("disabled", true);
        }

        console.log(lastCat)
        if(lastCat.lastPage){
            
            lastCat.lastPage = false;
            console.log(lastCat.lastPage)
            buttonNext.setAttribute("disabled", true)
        } else{
            lastCat.lastPage = false;
            buttonNext.removeAttribute("disabled", true)
        }
    }

    function drawCatCard(element){

        nextDraw(mainBody);
        drawHeadBreeds()
        
        // main.insertAdjacentHTML("beforeend", card);
        mainHeader.insertAdjacentHTML("afterbegin", header);
        // main.insertAdjacentHTML("afterbegin", headerContainer);
        mainWrapper.insertAdjacentHTML("beforeend", footer);

        const buttonNext = document.querySelector(".main-footer__button_next");
        const buttonPrev = document.querySelector(".main-footer__button_prev");
        // const buttonId = document.querySelector("#prev");
        
        buttonPrev.setAttribute("disabled", true);
        // console.log(counter)
        // console.log(chekCount)
        

        buttonNext.addEventListener("click", () => {
            
            page++;
            console.log(page);
            chekPage(page, buttonNext, buttonPrev);
            nextDraw(mainBody);
            
        });
        buttonPrev.addEventListener("click", () => {
            console.log(lastCat)
            page--;
            chekPage(page, buttonNext, buttonPrev);
            prevDraw(mainBody);
        });
    }

    function drawHeadBreeds(){
        // mainHead.insertAdjacentHTML("afterbegin", headerContainer);
        const selectBreeds = document.querySelector(".main-container-head__select_breeds");
        const mainContainerBack = document.querySelector(".main-container-head__back");

        for(let j = 0; j <= catsArr.length; j++){
            console.log(catsArr[j])
            if(catsArr[j] != undefined){
                const breed =
                `
                    <option value="${catsArr[j].name}">${catsArr[j].name}</option>
                `
                // console.log(selectBreeds)
                selectBreeds.insertAdjacentHTML("beforeend", breed)
            } 
            
        }

        mainContainerBack.addEventListener("click", () => {
            console.log("hi bitch");
            main.innerHTML = ""
            mainBody.remove()
            // mainFooter.innerHTML = ""
            mainHeader.innerHTML = ""
            const footer = document.querySelector(".main-footer");
            footer.remove();

            mainHeader.style.background = "#FBE0DC"
            mainHeader.style.marginBottom = 0
            main.style.background = "#FBE0DC"

            const mainImage = document.querySelector(".main__img");
            console.log(mainImage);
            mainImage.classList.remove("hidden")
            // mainWrapper.insertAdjacentHTML("afterbegin", imageMain);


            const buttonBreeds = document.querySelector(".category-block__button_breeds");
            const buttonGallery = document.querySelector(".category-block__button_gallery");
            buttonBreeds.style.background = "#FFF";
            buttonBreeds.style.color = "#FF868E";
            buttonBreeds.addEventListener("click", openBreeds);
            buttonGallery.addEventListener("click", openGallery);
            // buttonBreeds.classList.add("hover");
            // mainWrapper.innerHTML = ""
        });
        
        selectBreeds.addEventListener("change", () => {
            console.log(selectBreeds.value)
            mainBody.innerHTML = "";

            let mainContainer = document.createElement("div");
            // mainContainer.classList.add("main-container");
            mainBody.insertAdjacentElement("beforeend", mainContainer);

            // let mainContainer2 = document.createElement("div");
            // mainContainer2.classList.add("main-container");
            // mainBody.insertAdjacentElement("beforeend", mainContainer2);

            for(let i = 0; i <= catsArr.length; i++){
                console.log(catsArr[i].name)
                
                if(catsArr[i].name == selectBreeds.value && catsArr[i].name != undefined){
                    
                    const card = 
                    `
                        <div class="test${i} image-container" style="width:100%; height: 100%;"><div class="hover" id="${catsArr[i].id}"><p class="hover__text">${catsArr[i].name}</p></div><img class="image-container__img" src="${catsArr[i].image.url}"  alt="${catsArr[i].name}" width="100%" height="100%"></img></div>
                    `

                    mainContainer.insertAdjacentHTML("beforeend", card);
                    const catImage = document.querySelector(".image-container")
                    catImage.addEventListener("click", (event) => {
                        console.log("in preDraw");
                        console.log(event.target);
                        openCard(event.target.id);
                    });
                }
                if(selectBreeds.value == "All breeds"){
                    console.log("hi");
                    nextDraw(mainBody);
                    break;
                }

                
            }
        })
    }


    function init(){
        getData("https://api.thecatapi.com/v1/breeds").then(data => {
            data.forEach(element => {
                // catsArr.push(element);
            // console.log(element)
            if(element.hasOwnProperty("image") && element.hasOwnProperty("name")){
                catsArr.push(element);
            } else{
                console.log(1)
            }
                
            });
            
            drawCatCard(catsArr);
            console.log(catsArr);
            
        })
    }



    init()

}




export default initBreads;

//"https://api.thecatapi.com/v1/images/search"
//"https://thecatapi.com/v1/images?api_key=5575fdb1-1398-48fc-a8e9-3769b2c58a56"