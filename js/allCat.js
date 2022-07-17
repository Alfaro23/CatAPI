const main = document.querySelector(".main");
let testArr = []

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

function test(element){

    
    const {id, url} = element

    const card = `

        <div class="main-container">
            <div class="test1"><img src="${element[0].url}" id="${id}" alt="kitti" width="100%" height="100%"></img></div>
            <div class="test2"><img src="${element[1].url}" id="${id}" alt="kitti" width="100%" height="100%"></img></div>
            <div class="test3"><img src="${element[2].url}" id="${id}" alt="kitti" width="100%" height="100%"></img></div>
            <div class="test4"><img src="${element[3].url}" id="${id}" alt="kitti" width="100%" height="100%"></img></div>
            <div class="test5"><img src="${element[4].url}" id="${id}" alt="kitti" width="100%" height="100%"></img></div>
        </div>
        <div class="main-container">
            <div class="test6"><img src="${element[5].url}" id="${id}" alt="kitti" width="100%" height="100%"></img></div>
            <div class="test7"><img src="${element[6].url}" id="${id}" alt="kitti" width="100%" height="100%"></img></div>
            <div class="test8"><img src="${element[7].url}" id="${id}" alt="kitti" width="100%" height="100%"></img></div>
            <div class="test9"><img src="${element[8].url}" id="${id}" alt="kitti" width="100%" height="100%"></img></div>
            <div class="test10"><img src="${element[9].url}" id="${id}" alt="kitti" width="100%" height="100%"></img></div>
        </div>
        <div class="main-container">
            <div class="test11"><img src="${element[10].url}" id="${id}" alt="kitti" width="100%" height="100%"></img></div>
            <div class="test12"><img src="${element[11].url}" id="${id}" alt="kitti" width="100%" height="100%"></img></div>
            <div class="test13"><img src="${element[12].url}" id="${id}" alt="kitti" width="100%" height="100%"></img></div>
            <div class="test14"><img src="${element[13].url}" id="${id}" alt="kitti" width="100%" height="100%"></img></div>
            <div class="test15"><img src="${element[14].url}" id="${id}" alt="kitti" width="100%" height="100%"></img></div>
        </div>
    
    `
    //from breeds
    // const card = `

        // <div class="main-container">
        //     <div class="test1 image-container"><div class="hover"><p class="hover__text">${element[0].name}</p></div><img src="${element[0].image.url}" id="${id}" alt="${element[0].name}" width="100%" height="100%"></img></div>
        //     <div class="test2 image-container"><div class="hover"><p class="hover__text">${element[1].name}</p></div><img src="${element[1].image.url}" id="${id}" alt="${element[1].name}" width="100%" height="100%"></img></div>
        //     <div class="test3 image-container"><div class="hover"><p class="hover__text">${element[2].name}</p></div><img src="${element[2].image.url}" id="${id}" alt="${element[2].name}" width="100%" height="100%"></img></div>
        //     <div class="test4 image-container"><div class="hover"><p class="hover__text">${element[3].name}</p></div><img src="${element[3].image.url}" id="${id}" alt="${element[3].name}" width="100%" height="100%"></img></div>
        //     <div class="test5 image-container"><div class="hover"><p class="hover__text">${element[4].name}</p></div><img src="${element[4].image.url}" id="${id}" alt="${element[4].name}" width="100%" height="100%"></img></div>
        // </div>
        // <div class="main-container">
        //     <div class="test6 image-container"><div class="hover"><p class="hover__text">${element[5].name}</p></div><img src="${element[5].image.url}" id="${id}" alt="${element[5].name}" width="100%" height="100%"></img></div>
        //     <div class="test7 image-container"><div class="hover"><p class="hover__text">${element[6].name}</p></div><img src="${element[6].image.url}" id="${id}" alt="${element[6].name}" width="100%" height="100%"></img></div>
        //     <div class="test8 image-container"><div class="hover"><p class="hover__text">${element[7].name}</p></div><img src="${element[7].image.url}" id="${id}" alt="${element[7].name}" width="100%" height="100%"></img></div>
        //     <div class="test9 image-container"><div class="hover"><p class="hover__text">${element[8].name}</p></div><img src="${element[8].image.url}" id="${id}" alt="${element[8].name}" width="100%" height="100%"></img></div>
        //     <div class="test10 image-container"><div class="hover"><p class="hover__text">${element[9].name}</p></div><img src="${element[9].image.url}" id="${id}" alt="${element[9].name}" width="100%" height="100%"></img></div>
        // </div>
        // <div class="main-container">
        //     <div class="test11 image-container"><div class="hover"><p class="hover__text">${element[10].name}</p></div><img src="${element[10].image.url}" id="${id}" alt="${element[10].name}" width="100%" height="100%"></img></div>
        //     <div class="test12 image-container"><div class="hover"><p class="hover__text">${element[11].name}</p></div><img src="${element[11].image.url}" id="${id}" alt="${element[11].name}" width="100%" height="100%"></img></div>
        //     <div class="test13 image-container"><div class="hover"><p class="hover__text">${element[12].name}</p></div><img src="${element[12].image.url}" id="${id}" alt="${element[12].name}" width="100%" height="100%"></img></div>
        //     <div class="test14 image-container"><div class="hover"><p class="hover__text">${element[13].name}</p></div><img src="${element[13].image.url}" id="${id}" alt="${element[13].name}" width="100%" height="100%"></img></div>
        //     <div class="test15 image-container"><div class="hover"><p class="hover__text">${element[14].name}</p></div><img src="${element[14].image.url}" id="${id}" alt="${element[14].name}" width="100%" height="100%"></img></div>
        // </div>
    
    // `
    
    main.insertAdjacentHTML("beforeend", card);
    
    
}



function getImage(){


    getData("https://api.thecatapi.com/v1/images/search?limit=15").then( data => {
        data.forEach(element => {
            // test(element)
            testArr.push(element);
                
        });
        test(testArr);
    })
        
}

// getImage();