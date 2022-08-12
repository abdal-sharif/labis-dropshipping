
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#cart-close");

cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick= () =>{
    cart.classList.remove("active");
};

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded" , ready);
} else{
    ready()
}

function ready(){
    var removecartbuttons = document.getElementsByClassName('cart-remove')

    for (var i = 0 ; i < removecartbuttons.length; i++){
        var button = removecartbuttons[i];
        button.addEventListener("click" , removeCartItem)
    }
}

function removeCartItem(event){
    var buttonclicked = event.target;
    buttonclicked.parentelement.remove();
}
