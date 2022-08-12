
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#cart-close");
// open cart bar
cartIcon.onclick = () => {
    cart.classList.add("active");
};
// close cart bar
closeCart.onclick= () =>{
    cart.classList.remove("active");
};

if(document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded' , ready);
} else{
    ready()
}

function ready(){
    var removecartbuttons = document.getElementsByClassName('cart-remove')

    for (var i = 0 ; i < removecartbuttons.length; i++){
        var button = removecartbuttons[i];
        button.addEventListener("click" , removeCartItem)
    }
        // quantinty changes
        var quantityInputs = document.getElementsByClassName("cart-quantity");
        for (var i = 0 ; i < quantityInputs.length; i++){
            var input = quantityInputs[i];
            input.addEventListener("change" , quantityChanged)
        }
    // add to cart
var addCart = document.getElementsByClassName("add-cart");
for (var i = 0 ; i < addCart.length; i++){
    var button = addCart[i]
    button.addEventListener("click" , addCartClicked);
}

}



// remove cart
function removeCartItem(event){
    var buttonclicked = event.target;
    buttonclicked.parentElement.remove()
    updatetotal()
}


// quantity changed 

function quantityChanged(event){
      var input = event.target
      if (isNaN(input.value) || input.value <= 0){
        input.value = 1
      }
      updatetotal()
}


function addCartClicked(event){
    var button = event.target;
    var shopProduct = button.parentElement;
    var title = shopProduct.getElementsByClassName("product-title")[0].innerText;
    var price = shopProduct.getElementsByClassName("price")[0].innerText;
    var productImg = shopProduct.getElementsByClassName("product-img")[0].src;
     addProductToCart(price,title,productImg);
    updatetotal()
}

function addProductToCart(price,title,productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemName = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0 ; i < cartItemName.length; i++) {
    alert("gadasho wacan");
    return;
    }
    
}

var cartBoxContent =
 `
   <img src="${productImg}" alt=""  class="cart-img">
   <div class="detail-box">
   <div class="cart-product-title">${title}</div>
   <div class="cart-price">${price}</div>
   <input type="number" value="1" class="cart-quantity">

    </div>

    <!-- cart remove -->
    <i class="fa-solid fa-trash cart-remove"></i>`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("cart-remove")[0]
.addEventListener("click" , removeCartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0]
.addEventListener("change" , quantityChanged);




// update total

function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;

    for (var i = 0 ; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0]
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0]
        var price = parseFloat (priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);

        total = Math.round(total * 100) / 100;

        document.getElementsByClassName("total-price")[0].innerText = '$' + total;
    }

}





// add to cart as function

