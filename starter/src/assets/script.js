/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

const products = [
  {
    name: 'Matcha Milk Tea',
    price: 4.50,
    quantity: 0,
    productId: 2300,
    image:'https://carmyy.com/wp-content/uploads/2022/01/matcha-bubble-tea-new.jpg'
  },
  
  { 
    name: 'Thai Milk Tea',
    price: 4.50,
    quantity: 0,
    productId: 2301,
    image:'https://cdn.pickuplimes.com/cache/71/9d/719dc2dc8fdb222a57bc5a86d772baf1.jpg'
  },

  {
    name: 'Brown Sugar Milk Tea',
    price: 5.00,
    quantity: 0,
    productId: 2302,
    image: 'https://images.squarespace-cdn.com/content/v1/58d1f7308419c23d328cdb22/1559894022209-RV13I0JU6Y5N4P7XZKQU/Brown+Sugar+Bubble+Tea'
  },
  
  {
    name: 'Taro Milk Tea',
    price: 5.00,
    quantity: 0,
    productId: 2303,
    image: 'https://yummyaddiction.com/wp-content/uploads/2022/05/taro-bubble-tea-featured.jpg'
  },

    {
    name: 'Oreo Milk Tea',
    price: 6.00,
    quantity: 0,
    productId: 2304,
    image: 'https://www.thatcutedish.com/wp-content/uploads/2022/02/oreo-bubble-shake-1.jpg'
  },
];

// ----------------------------------

/* Declare an empty array named cart to hold the items in the cart */
const cart = []

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart (productId){
  for (let i=0; i<products.length; i++){
    if (products[i].productId === productId){
      products[i].quantity += 1
      if (!cart.includes(products[i])){
        cart.push(products[i])
      }
    }
  }
}


/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId){
  for (let i=0; i<products.length; i++){
    if (products[i].productId === productId){
      products[i].quantity += 1
    }
  }
}


/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId){
  for (let i=0; i<products.length; i++){
    if (products[i].productId === productId){
      if (products[i].quantity === 1){
        products[i].quantity -= 1
        let removeItem = cart.findIndex(item => item.name === products[i].name);
        cart.splice(removeItem, 1)
      } else if (products[i].quantity > 1){
        products[i].quantity -= 1
      }
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId){
  for (let i=0; i<products.length; i++){
    if (products[i].productId === productId){
      products[i].quantity === 0
      let removeItem = cart.indexOf(products[i])
      cart.splice(removeItem, 1)
    }
  }
}


/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal(){
  let totalCost = 0
  cart.forEach((item) => {
    for (let i=0; i<products.length; i++){
      if (products[i] === item){
        let total = products[i].quantity * products[i].price
        totalCost += total
      }
    }
  })
  return totalCost
}


/* Create a function called emptyCart that empties the products from the cart */

function emptyCart(){
  cart = []
}


/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

// let totalPaid = 0;

// function pay(amount) {
//  totalPaid += amount;
//  let remainingBalance = totalPaid - cartTotal();
//  return remainingBalance; 
//  }


let totalPaid = 0;

// function pay(amount) {
//   totalPaid += amount;
//   let remaining = totalPaid - cartTotal();
//   return remaining;
// }

function pay(amount) {
  totalPaid += amount;
  let remaining = totalPaid - cartTotal();
  if (remaining >= 0){
    totalPaid = 0
    emptyCart ()
  } else {
    return remainingBalance
  }
}



/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)

Remove all items from the cart.
Integrate a currency switcher to switch between USD, EUR, and YEN.
Implement currency formatting to accomodate USD, EUR, and YEN.
Come back once you're familiar with the DOM API, HTML, and CSS and try the following:
Change/update the formatting of the store.
Add a mock credit card form with form validation.
Create a form for adding more products.
*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
}
