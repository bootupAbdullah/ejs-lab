const express = require('express');
const app = express();

const RESTAURANT = {
    name: 'The Green Byte Bistro',
    isOpen: true,
    address: '742 Evergreen Rd, Mapleview, OS 45502',
    phone: '555-321-9876',
    menu: [
      { 
        id: 1,
        name: 'Quantum Quinoa Mushroom Burger',
        price: 13.00,
        rating: 4,
        category: 'mains',
        details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
      },
      { 
        id: 2,
        name: 'Binary Berry Cheesecake',
        price: 10.11,
        rating: 3,
        category: 'desserts',
        details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
      },
      { 
        id: 3,
        name: 'Recursive Rigatoni',
        price: 17.00,
        rating: 5,
        category: 'mains',
        details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
      },
      { 
        id: 4,
        name: 'Pumpkin Pi Squared',
        price: 3.14,
        rating: 5,
        category: 'desserts',
        details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
      },
      { 
        id: 5,
        name: 'Fibonacci String Bean Fries',
        price: 11.23,
        rating: 5,
        category: 'sides',
        details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
      }
    ]
  }
  
// !! declaring global var for menu
const fullMenu = RESTAURANT.menu


// !! Excercise 1. Create a homepage

//!! learned that I can not pass the 'if' statment directly throygh 'render'
// app.get('/', (req, res) => {
//   res.render('home.ejs', {
//     name: RESTAURANT.name,
//     address: RESTAURANT.address,
//     phone: RESTAURANT.phone,
//     dynamicTitle: RESTAURANT.name,
//     checkIfOpen : RESTAURANT.isOpen,
//     if (checkIfOpen){
//         restaurantOpen: "Yes we are open!"
//     }
//   });
// });


// !! move the if statment for 'level-up' outisde of the render, change key pair to '=', this was trouble shooted with the aid of ChatGPT - answers were not asked for - simply asking, is this possible? 'yes or no' etc. etc.
app.get('/', (req, res) => {
    if(RESTAURANT.isOpen){
        restaurantOpen = "Yes we are open!"
    } else {
        restaurantOpen = "Sorry, we are closed!"
    }
    res.render('home.ejs', {
      name: RESTAURANT.name,
      address: RESTAURANT.address,
      phone: RESTAURANT.phone,
      dynamicTitle: RESTAURANT.name,
      checkIfOpen : RESTAURANT.isOpen,
    });
  });
  


// !! Excercise 2


// !! excercise 2, level up: 
//I go this far - ran into an issue on - how do I set up one template to pull frorma list when multiple indexes would neeed to be specified - don't want 
//create a tempplate in home for each menu item - could use a loop but decided to move on to excercise 3 for now.
let mains = []
let desserts = []
let sides = []


fullMenu.forEach((menuItem) => {
  if(menuItem.category === 'main') {
    mains.push(menuItem)
  } else if (menuItem.category === 'desserts') {
    desserts.push(menuItem)
  } else if (menuItem.category === 'sides') {
    sides.push(menuItem)
  }
});




// IIIIIIII CANNNNOOOOTTTT BELIEVE IT WORKED!!!!!! OH MY GOD!!!!!! LOLOL - that took a long I had to go back and watch the EJS turotial, build smaller things and scale up - 
// the ejs page spits out the HTML but you have to define what the variables are on the server side - and it will only grab what you tell - it, so you can give as much infomration
// as you want on the server side - I have the whole menu available - so the EJS has all of this to play with and then you go to the ejs file and use what you want - that works!

// !! excercise 2, send data to view 1-2 :
app.get('/menu', (req, res) => {
    res.render('menu.ejs', {
       menu: fullMenu
      //  mainDishes: mains,
      //  desserts: desserts,
      //  sideDishes: sides
    })
})

// !! even though the id is dynamic it cannot be renamed or reused into different variables
// app.get('/menu/:category', (req, res) => {
//   userSelectsMains = req.params.mains
//   userSelectsDesserts = req.params.desserts
//   userSelectsMains = req.params.sides
//   res.render('category.ejs', {
//     if(userSelectsMains) {

//     }
//   })
// })

app.get('/menu/:category', (req, res) => {
  userInput = req.params.category
})



app.listen(3000);
