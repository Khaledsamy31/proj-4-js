
//==================================================

let allProducts = document.querySelector('.products')
let products = [
    {
        id: 1,
        title: "oppo reno 7",
        color: "black",
        imageUrl: "images/chair1.jpg"
    },
    {
        id: 2,
        title: "iPhone 13",
        color: "white",
        imageUrl: "images/chair2.jpg"
    },
    {
        id: 3,
        title: "samsung A31",
        color: "gray",
        imageUrl: "images/chair3.jpg"
    },
    {
        id: 4,
        title: "sony",
        color: "blue",
        imageUrl: "images/chair4.jpg"
    },
]
//to add products
function drawItems(){
    let y = products.map((item)=>{
        return `
        <div class="product_item">
        <img class="product_item_img" src="${item.imageUrl} " alt="product picture">
        <div class="product_item_desc">
            <h2>${item.title} </h2>
            <p>NEW!! new mobile from blackBerry 2024</p>
            <span>${item.color} </span>
        </div><!-- //product_item_desc -->

        <div class="product_item_action">
            <button class="add_to_card" onClick="addToCard(${item.id})">Add To Card</button>
            <i class="far fa-heart fav"></i>
        </div><!-- //product_item_action -->

    </div><!-- //product_item -->

        `
    })
    allProducts.innerHTML = y
}
drawItems()

let badge  = document.querySelector(".cardBadge")
let cardsproductsDiv = document.querySelector(".cards_products div") //select cards_products then first div

// let addedItem = []  //it to content items already added & any new item will be added
// addedItem ======to keep data in card even after refresh the page======
//addtedItem if locale stroage saved item? get it and convert to object (json.parse) if it empty? : [] do an array
let addedItem = localStorage.getItem("productsInCard") ? JSON.parse(localStorage.getItem("productsInCard")) : [];
if(addedItem){
    addedItem.map(item => {
        cardsproductsDiv.innerHTML += `<p>${item.title} </p>`;
    }) 
    badge.style.display = "block"
    badge.innerHTML = addedItem.length

}
function check(){
    if(localStorage.getItem= ("username")){ //if there is user name in local storage.. do this..
        window.location = "cardsproducts.html"
    }else{
        window.location = "login.html"
    }
}

function addToCard(id){
    let choosenItem = products.find((item) => item.id === id) //to get all product info & details when click add to card
    cardsproductsDiv.innerHTML += `<p>${choosenItem.title} </p>`//to add items in card

    addedItem = [...addedItem, choosenItem]// to save new and old items in addedItem
    localStorage.setItem("productsInCard", JSON.stringify(addedItem))// to export addedItem to local storage as string/json
    let cardProductsLength = document.querySelectorAll(".cards_products div p")//to get all paragraphs that content on item to count the length

badge.style.display = "block";
badge.innerHTML = cardProductsLength.length; //counter of card icon
}


//===========================SHOPING CARD ICON===================
let shopping_card_icon = document.querySelector('.shopping_card')
let cardProducts = document.querySelector(".cards_products")
shopping_card_icon.addEventListener("click", opencard)


function opencard(){
    if(cardsproductsDiv.innerHTML != ""){ //if shopping icon not empty check if it display bloc do it none when click and if it none do t block when click
        if(cardProducts.style.display == "block"){
            cardProducts.style.display = "none"
        }else {
            cardProducts.style.display= "block"
        }
    }
}

