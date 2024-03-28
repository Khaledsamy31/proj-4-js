

let productsInCard = localStorage.getItem("productsInCard")// to import content of card from local storage
let allProducts = document.querySelector('.products')


if(productsInCard){
    let item = JSON.parse(productsInCard)// to convert data from json to object
    drawCardProducts(item)
}

function drawCardProducts(products){
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
            <button class="add_to_card" onClick="removeItem(${item.id})">remove from card</button>

        </div><!-- //product_item_action -->

    </div><!-- //product_item -->

        `

    })
    allProducts.innerHTML = y

}
let removeProduct = document.querySelectorAll(".products .product_item")


function removeItem(id){
    let productsInCard = JSON.parse(localStorage.getItem("productsInCard")) //to get items in card from local storage
    let productIndex = productsInCard.findIndex(item => item.id === id)// to get index of product id that saved in local storage & == id that we clicked on it
    
    if(productIndex !== -1){ //if index of product not equals -1, its mean if productIndex not empty if it true or if there is value do this..
        productsInCard.splice(productIndex, 1)// cut from productsInCard 1 by index
        localStorage.setItem("productsInCard", JSON.stringify(productsInCard)) //save in local storage productsInCard after convert it to json or string

        drawCardProducts(productsInCard) //send productsInCard after delete items to draw function
    }
}

