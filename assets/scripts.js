let currentPrice=0, itemCount=0

function addToCart(cookie) {
    /* 
        PRICES
        peanut butter: 20
        sandies: 30
        party press: 35
        chocolate chip: 25
    */
   console.log('The user is adding this type of cookie to their cart: ' , cookie) 
   itemCount++
   
   if (cookie == "peanut butter") {
    currentPrice = 20 + currentPrice
   }

   else if (cookie == "sandies") {
    currentPrice = 30 + currentPrice
   }

   else if (cookie == "party press") {
    currentPrice = 35 + currentPrice
   }

   else if(cookie == "chocolate chip") {
    currentPrice = 25 + currentPrice
   }
   //add 1 to the itemCount variable
   //add the correct price to the currentPrice variable
   document.getElementById("cartItems").innerHTML = itemCount;

   document.querySelector(".hoverText").innerHTML = currentPrice;
}

function checkout() {
    console.log('User is checking out.')
    window.prompt('You are purchasing ' + itemCount + ' items! Your total costs is ' + currentPrice + ' dollars! \n What is your Name and Address so we can ship to you?')
    
    //Let your customer know how many items they are purchasing and the price
    itemCount = 0
    currentPrice = 0
    document.getElementById("cartItems").innerHTML = itemCount;
    document.querySelector(".hoverText").innerHTML = currentPrice;
}

function darkMode() {
document.querySelector("body").style.color = "white"
document.querySelector("body").style.backgroundColor = "black"


}
    