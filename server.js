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


// !! move the if statment for 'level-up' outisde of the render, change key pair to '=', this was trouble shooted with the aid of ChatGPT - answers were not asked for simply, asking is this possible? 'yes or no' etc. etc.
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
  


app.listen(3000);
