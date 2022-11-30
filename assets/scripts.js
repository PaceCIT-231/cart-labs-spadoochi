const cart = {
    currentPrice: 0,
    items: [],
    addItem: function(cookie, price) {
        
        this.items.push (cookie)
        // add a cookie (string) to the items array
        this.currentPrice = this.currentPrice + price

        //add the price (number) to the currentPrice properties
    },
    clear: function() {
        //reset the currentPrice and items properties
        this.currentPrice = 0
        this.items = []
    },
}


function addToCart(cookie) {
    /* 
        PRICES
        peanut butter: 20
        sandies: 30
        party press: 35
        chocolate chip: 25
    */
   console.log('The user is adding this type of cookie to their cart: ' , cookie) 
   
   if (cookie == "peanut butter") {
    cart.addItem(cookie, 20)   }

   else if (cookie == "sandies") {
    cart.addItem(cookie, 30)   
   }

   else if (cookie == "party press") {
    cart.addItem(cookie, 35)   
   }

   else if(cookie == "chocolate chip") {
    cart.addItem(cookie, 25)   
   }
   //add 1 to the itemCount variable
   //add the correct price to the currentPrice variable
   document.getElementById("cartItems").innerHTML = cart.items.length;

   document.querySelector(".hoverText").innerHTML = cart.currentPrice;

   console.log(cart)
}

function checkout() {
    console.log('User is checking out.')
    window.prompt('You are purchasing ' + cart.items.length + ' items! Your total costs is ' + cart.currentPrice + ' dollars! \n What is your Name and Address so we can ship to you?')
    
    //Let your customer know how many items they are purchasing and the price
    cart.clear()
    document.getElementById("cartItems").innerHTML = cart.items.length;
    document.querySelector(".hoverText").innerHTML = cart.currentPrice;
}

function darkMode() {
document.querySelector("body").style.color = "white"
document.querySelector("body").style.backgroundColor = "black"


}
    