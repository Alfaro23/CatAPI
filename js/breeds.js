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

    const header = `
        
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


    const footer = `

            <div class="main-footer">
                <button id="prev" class="main-footer__button main-footer__button_prev"><img class="main-footer__img_prev" src="./image/icons/prev.svg" alt="arrow">PREV</button>
                <button class="main-footer__button main-footer__button_next" >NEXT<img class="main-footer__img_next" src="./image/icons/next.svg" alt="arrow"></button>
            </div>
        
        `
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

                
                main.innerHTML =""
                // const test = document.querySelector(".");

                let {name,temperament,life_span,origin, weight: {metric}, description, image:{url}} = catsArr[num]

                const cardCat = `

                <div class="main-containerCard">
                    <legend>
                    <div class="main-breed">
                        <button class="main-breed__back">
                            <img src="./image/icons/leftArrowCard.svg" alt="left_arrow" class="main-breed__img">
                        </button>
                        <p class="main-breed__name">BREEDS</p>
                        <p class="main-breed_id">${num + 1}</p>
                    </div>
                    </legend>
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
                console.log(metric, name, temperament, life_span, origin,description, url)
                const backArrow = document.querySelector(".main-breed__back");

                backArrow.addEventListener("click", () => {
                    main.innerHTML =""
                    mainHeader.innerHTML ="";

                    mainHeader.insertAdjacentHTML("afterbegin", header);
                    prevDraw();
                    mainWrapper.insertAdjacentHTML("beforeend", footer);
                    const buttonNext = document.querySelector(".main-footer__button_next");
                    const buttonPrev = document.querySelector(".main-footer__button_prev");
                    // const buttonId = document.querySelector("#prev");
                    
                    // `buttonPrev.setAttribute("disabled", true);
                    // console.log(counter)
                    // console.log(chekCount)
                    

                    buttonNext.addEventListener("click", () => {
                        
                        page++;
                        console.log(page);
                        chekPage(page, buttonNext, buttonPrev);
                        nextDraw();
                        
                    });
                    buttonPrev.addEventListener("click", () => {
                        console.log(lastCat)
                        page--;
                        chekPage(page, buttonNext, buttonPrev);
                        prevDraw();
                    });
                })
            }
        }
    }

    //test
    const nextDraw = () => {
        let last = localStorage.getItem("last");
        
        counter++
        chekCount += counter;
        

        main.innerHTML = "";

        let mainContainer = document.createElement("div");
        mainContainer.classList.add("main-container");
        main.insertAdjacentElement("beforeend", mainContainer);

        let mainContainer2 = document.createElement("div");
        mainContainer2.classList.add("main-container");
        main.insertAdjacentElement("beforeend", mainContainer2);

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
            
            console.log()
            last++
            testArrLenght += last
            
        }
        const testEl = document.querySelectorAll(".image-container")
            testEl.forEach((elem) => {
                elem.addEventListener("click", (event) => {
                    // console.log(event.target.id);
                    openCard(event.target.id);
                });
            })
        
    }
    const prevDraw = () => {
        let last = localStorage.getItem("last") ;
        const buttonNext = document.querySelector(".main-footer__button_next");
        const buttonPrev = document.querySelector(".main-footer__button_prev");
        counter--
        chekCount -= counter
        main.innerHTML = "";

        let mainContainer = document.createElement("div");
        mainContainer.classList.add("main-container");
        main.insertAdjacentElement("beforeend", mainContainer);

        let mainContainer2 = document.createElement("div");
        mainContainer2.classList.add("main-container");
        main.insertAdjacentElement("beforeend", mainContainer2);

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
        const testEl = document.querySelectorAll(".image-container")
            testEl.forEach((elem) => {
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

        
        nextDraw();
        
        // main.insertAdjacentHTML("beforeend", card);
        mainHeader.insertAdjacentHTML("afterbegin", header);
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
            nextDraw();
            
        });
        buttonPrev.addEventListener("click", () => {
            console.log(lastCat)
            page--;
            chekPage(page, buttonNext, buttonPrev);
            prevDraw();
        });
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