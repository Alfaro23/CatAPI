import {openBreeds, openGallery, header} from "./main.js";

const initGallery = () => {

    const catsArr = [];
    const main = document.querySelector(".main");
    const mainHeader = document.querySelector(".main-header");

    const headerGalleryContainer = 
    `
    <div class="main-container-head">
        <div class="main-container__wrapper">
            <button class="main-container-head__back">
                <img src="./image/icons/leftArrowCard.svg" alt="left_arrow" class="main-container-head__img">
            </button>
            <p class="main-container-head__name">GALLERY</p>
        </div>
        <div class="upload">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="upload__image">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z"/>
            </svg>
            <!-- <img src="" alt="upload" class="upload__image"> -->
            <span class="upload__text">UPLOAD</span>
        </div>
        
    </div>
    `
    const headerGallerySelect = 
    `
                <div class="selectGallery">
                    <div class="selectGallery-up">
                        <div class="selectBlock order">
                            <span class="selectGallery-text order__text">order</span>
                            <select name="order" id="order__select" class="order__select">
                                <option value="Random" selected>Random</option>
                                <option value="Desc" >Desc</option>
                                <option value="Asc">Asc</option>
                            </select>
                        </div>
                        <div class="selectBlock type">
                            <span class="selectGallery-text type__text">type</span>
                            <select name="type" id="order__select" class="type__select">
                                <option value="All" selected>All</option>
                                <option value="Static">Static</option>
                                <option value="Animated">Animated</option>
                            </select>
                        </div>
                    </div>
                    <div class="selectGallery-down">
                        <div class="selectBlock breed">
                            <span class="selectGallery-text breed__text">breed</span>
                            <select name="breed" id="order__select" class="breed__select">
                                <option value="none" selected>None</option>
                            </select>
                        </div>
                        <div class="selectBlock limit">
                            <span class="selectGallery-text limit__text">limit</span>
                            <div class="limit-block">
                                <select name="limit" id="order__select" class="limit__select">
                                    <option value="5" selected>5 items per page</option>
                                    <option value="10">10 items per page</option>
                                    <option value="15">15 items per page</option>
                                    <option value="20">20 items per page</option>
                                </select>

                                <button class="limit__refresh">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="limit__img">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48189 2.49989L6.93396 0.953004L7.88633 0L11.0577 3.16928L7.88634 6.33873L6.93395 5.38576L8.47232 3.84832C4.51244 3.99813 1.3473 7.25498 1.3473 11.2478C1.3473 15.3361 4.66547 18.6527 8.75744 18.6527C12.8494 18.6527 16.1676 15.3361 16.1676 11.2478V10.5742H17.5149V11.2478C17.5149 16.081 13.5927 20 8.75744 20C3.92221 20 0 16.081 0 11.2478C0 6.50682 3.77407 2.64542 8.48189 2.49989Z" />
                                    </svg>
                                </button>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
    `
    

    let mainBody = document.createElement("div");
    mainBody.classList.add("main-body");
    mainBody.style.paddingLeft = 0;
    mainBody.style.paddingRight = 0;
    main.insertAdjacentElement("afterbegin", mainBody);

    // let mainHead = document.createElement("div");
    // mainHead.classList.add("main-head");
    // main.insertAdjacentElement("afterbegin", mainHead);
    
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


    const drawCatCard = () => {
        
        mainBody.innerHTML = "";

        let mainContainer = document.createElement("div");
        mainContainer.classList.add("main-container");
        mainBody.insertAdjacentElement("beforeend", mainContainer);

        // let mainContainer2 = document.createElement("div");
        // mainContainer2.classList.add("main-container");
        // mainBody.insertAdjacentElement("beforeend", mainContainer2);

        for(let i = 0; i <= catsArr.length; i++){

            // let [cat] = catsArr;
            // let {id, url} = cat
            // console.log(id)
            // console.log(url)
            
            const card = `
                <div class="test${i} image-container">
                    <div class="hover hover-gallery" id="${catsArr[i].id}">
                        <button class="hover__button">
                            <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg" class="hover__img">
                                <path stroke="#FF868E" fill-rule="evenodd" clip-rule="evenodd" d="M8.07107 2.40998C4.71811 2.40998 2 5.37272 2 9.02744C2 10.7825 2.63963 12.4657 3.77817 13.7067L15 25.9385L26.2218 13.7067C27.3604 12.4657 28 10.7825 28 9.02744C28 5.37272 25.2819 2.40998 21.9289 2.40998C20.3188 2.40998 18.7746 3.10717 17.636 4.34819L15.7071 6.45073C15.3166 6.8764 14.6834 6.8764 14.2929 6.45073L12.364 4.34819C11.2254 3.10718 9.68121 2.40998 8.07107 2.40998ZM0 9.02744C0 4.16874 3.61354 0.22998 8.07107 0.22998C10.2116 0.22998 12.2646 1.15685 13.7782 2.8067L15 4.13849L16.2218 2.8067C17.7354 1.15685 19.7884 0.22998 21.9289 0.22998C26.3865 0.22998 30 4.16874 30 9.02744C30 11.3607 29.1497 13.5983 27.636 15.2482L15.7071 28.2507C15.3166 28.6764 14.6834 28.6764 14.2929 28.2507L2.36396 15.2482C0.850339 13.5983 0 11.3607 0 9.02744Z"/>
                            </svg>
                        </button>
                    </div>
                <img src="${catsArr[i].url}"  alt="cat" width="100%" height="100%"></img></div>
        
            `
            
            
            // console.log(card);
            if(i <= 4){
                mainContainer.insertAdjacentHTML("beforeend", card);
                // card.addEventListener("click", openCard)
            }else if(i <= 9){
                mainContainer2.insertAdjacentHTML("beforeend", card);
                // card.addEventListener("click", openCard)
            }

            if( i >= 4){
                // localStorage.setItem("last", last);
                // console.log("test" + localStorage.getItem("last"))
                break;
            }
            
            // console.log()
            // last++
            // testArrLenght += last
            
        }
        
    }

    function drawbreedsItems(){
        const breedSelect = document.querySelector(".breed__select")

        getData("https://api.thecatapi.com/v1/breeds").then(data => {
            data.forEach(element => {
                // console.log(element)
                let {name ,id} = element
                
                const breed =
                `
                    <option value="${id}">${name}</option>
                `
                breedSelect.insertAdjacentHTML("beforeend", breed)
                
            })
        })
    }

    function breedChange(){
        const breedSelect = document.querySelector(".breed__select");
        const selectGallery = document.querySelector(".selectGallery"); 
        const mainContainerHead = document.querySelector(".main-container-head");

        breedSelect.addEventListener("change", () => {
            console.log(breedSelect.value)

            if(breedSelect.value === "none"){
                
                mainHeader.innerHTML = "";
                selectGallery.remove();
                mainContainerHead.remove();

                getData("https://api.thecatapi.com/v1/images/search?limit=5").then(data => {
                    data.forEach(element => {
                        console.log(element)
                        if(element.hasOwnProperty("id") && element.hasOwnProperty("url")){
                            catsArr.push(element);
                        } else{
                            console.log(1)
                        }
                            
                        });
                        
                        drawGalleryCard(catsArr);
                        console.log(catsArr);
            
                })
                
            } else{
                getData(`https://api.thecatapi.com/v1/images/search?breed_id=${breedSelect.value}`).then(data => {
                console.log(data)
                data.forEach(element => {

                    const {id, url} = element
                    console.log(element)
                    mainBody.innerHTML = "";

                    const card = 
                    `
                    <div class="test1 image-container">
                        <div class="hover hover-gallery" id="${id}">
                            <button class="hover__button">
                                <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg" class="hover__img">
                                    <path stroke="#FF868E" fill-rule="evenodd" clip-rule="evenodd" d="M8.07107 2.40998C4.71811 2.40998 2 5.37272 2 9.02744C2 10.7825 2.63963 12.4657 3.77817 13.7067L15 25.9385L26.2218 13.7067C27.3604 12.4657 28 10.7825 28 9.02744C28 5.37272 25.2819 2.40998 21.9289 2.40998C20.3188 2.40998 18.7746 3.10717 17.636 4.34819L15.7071 6.45073C15.3166 6.8764 14.6834 6.8764 14.2929 6.45073L12.364 4.34819C11.2254 3.10718 9.68121 2.40998 8.07107 2.40998ZM0 9.02744C0 4.16874 3.61354 0.22998 8.07107 0.22998C10.2116 0.22998 12.2646 1.15685 13.7782 2.8067L15 4.13849L16.2218 2.8067C17.7354 1.15685 19.7884 0.22998 21.9289 0.22998C26.3865 0.22998 30 4.16874 30 9.02744C30 11.3607 29.1497 13.5983 27.636 15.2482L15.7071 28.2507C15.3166 28.6764 14.6834 28.6764 14.2929 28.2507L2.36396 15.2482C0.850339 13.5983 0 11.3607 0 9.02744Z"/>
                                </svg>
                            </button>
                        </div>
                    <img src="${url}"  alt="cat" width="100%" height="100%"></img></div>
                    `

                    mainBody.insertAdjacentHTML("beforeend", card)
                })
                
            })
            }
        })
    }


    function drawGalleryCard(element){

        drawCatCard();
        
        // console.log(header);
        main.insertAdjacentHTML("afterbegin", headerGallerySelect);
        main.insertAdjacentHTML("afterbegin", headerGalleryContainer);
        

        mainHeader.insertAdjacentHTML("beforeend", header);
        drawbreedsItems();
        breedChange();
        
    }


    function init(){
        getData("https://api.thecatapi.com/v1/images/search?limit=5").then(data => {
            data.forEach(element => {
                
            if(element.hasOwnProperty("id") && element.hasOwnProperty("url")){
                catsArr.push(element);
            } else{
                console.log(1)
            }
                
            });
            
            drawGalleryCard(catsArr);
            console.log(catsArr);
            
        })
    }



    init()
}


export default initGallery