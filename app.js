
let carticon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closecart = document.querySelector("#cart-close");

carticon.onclick = () => {
    cart.classList.add("active");
};

closecart.onclick= () =>{
    cart.classList.remove("active")
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