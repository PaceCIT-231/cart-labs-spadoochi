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
   console.log('Your item count is ' + itemCount)
   
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
   
   console.log('Your current price is $' + currentPrice)

   //add 1 to the itemCount variable
   //add the correct price to the currentPrice variable
  
}

function checkout() {
    console.log('User is checking out.')
    window.alert('You are purchasing ' + itemCount + ' items! Your total costs is ' + currentPrice + ' dollars!'  )

    //Let your customer know how many items they are purchasing and the price
    
}