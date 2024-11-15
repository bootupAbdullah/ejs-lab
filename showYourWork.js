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
  

const menu = RESTAURANT.menu

// console.log(RESTAURANT.name)
// console.log(menu)

// console.log(menu[0].name)

// menu.forEach((item) => {
//     console.log(`Name: ${item.name}, Price: ${item.price}, Rating: ${item.rating}, Details: ${item.details}`)
// })



// menu.forEach((type) => {
//     if(type.category === 'deserts'){
//         console.log(type)
//     }
// })

// menu.forEach((item) => {
//     if(item.category ===  'desserts'){
//         console.log(item)
//     }
// })


// menu.forEach((menuItem) => {
//   if(menuItem.category === 'main') {
//     let categoryMain = [menuItem]
//     return categoryMain
//   } else if (menuItem.category === 'desserts') {
//     let categoryDesserts = [menuItem]
//     return categoryDesserts
//   } else if (menuItem.category === 'sides') {
//     let categorySides = [menuItem]
//     return categorySides
//   }
//   console.log(categoryMain) <-- will not capture value of var categoryMain here - cannot call it or console it -->
// });

// console.log(categoryMain) <-- will not work here either, both are outside of the scope of the forEach() -->

let mains = []
let desserts = []
let sides = []


menu.forEach((menuItem) => {
  if(menuItem.category === 'mains') {
    mains.push(menuItem)
  } else if (menuItem.category === 'desserts') {
    desserts.push(menuItem)
  } else if (menuItem.category === 'sides') {
    sides.push(menuItem)
  }
});


// menu.forEach((menuItem) => {
//   if(menuItem.category === 'mains') {
//     for (const dishes of mains){

//     }
//   }
// })

console.log(mains)