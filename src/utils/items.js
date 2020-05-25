let types = ['Foods', 'Drinks', 'Sides', 'Desserts'];
let subtypes = ['Chicken', 'Seafood', 'Pizza', 'Pasta', 'Cocktail', 'Coffee', 'Softdrink', 'Wine'];
let prices = [12.4, 20.2, 16.35, 19.8, 13.5, 12.5, 10.1, 12.9, 36.4, 25.9, 24.8];

let Chicken = [
  'Chicken Parma',
  'Chicken Kiev',
  'Chcken Schnitzel',
  'Chicken Cacciatore',
  'Cajun Chicken',
  'Satay Chicken Skewers',
  'Chicken & Muchroom Risotto',
  'Chicken Massaman Curry',
  'Chicken Pie',
];
let Seafood = [
  'Barramundi Fillet',
  'Beer-Battered Flathead & Chips',
  'Clam Chowder',
  'Crispy Skinned Salmon',
  'Salt & Pepper Calamari',
  'Green Fish Curry',
  'Marinated Octopus',
  'Tuna Carpaccio',
  'Atlantic Salmon',
];
let Pizza = [
  'Margherita',
  'Hawaiian',
  'Gormet Vegetable',
  'BBQ Chicken',
  'Garlic',
  'Truffle Mushroom',
  'Meat Lovers',
  'Capricosa',
  'Vegan',
];
let Pasta = [
  'Spaghetti Bolognese',
  'Ricotta Ravioli',
  'Beef Tortelini',
  'Lasagne',
  'Pesto Penne',
  'Pan-Fried Gnocchi',
  'Fettucine Marinara',
  'Rigatoni Aglio e Olio',
  'Pappardelle Napoli',
];
let Cocktail = [
  'Espresso Martini',
  'Pink Colada',
  'Strawberry Daiquiri',
  'Tequila Sunrise',
  'Cosmopolitan',
  'Grasshopper',
  'Bloody Mary',
  'Toblerone',
  'Margarita',
];
let Coffee = [
  'Latte',
  'Americano',
  'Flatt White',
  'Cappuccino',
  'Long Black',
  'Short Black',
  'Piccolo',
  'Chai Latte',
  'Mocha',
];
let Softdrink = [
  'Coke',
  'Coka Zero',
  'Diet Coke',
  'Lemonade',
  'Raspberry Lemonade',
  'Mineral Water',
  'Chinotto',
  'Lemon Squash',
  'Fanta',
];
let Wine = [
  'Shiraz',
  'Cabernet Sauvignon',
  'Pinot Noir',
  'Moscato',
  'Reisling',
  'Chardonnay',
  'Pinot Gris',
  'Sauvignon Blanc',
  'Champagne',
];

export const items = () => {
  let result = [
    ...Array(1000)
      .fill(0)
      .map((i, x) => ({
        _id: x,
        name: 'test',
        type: types[Math.floor(Math.random() * types.length)],
        subtype: subtypes[Math.floor(Math.random() * subtypes.length)],
        price: prices[Math.floor(Math.random() * prices.length)].toFixed(2),
        quantity: 1,
      })),
  ];

  //'Chicken', 'Seafood', 'Pizza', 'Pasta', 'Cocktail', 'Coffee', 'Softdrink', 'Wine'
  for (let i = 0; i < result.length; i++) {
    switch (result[i].subtype) {
      case 'Chicken':
        result[i].name = Chicken[Math.floor(Math.random() * Chicken.length)];
        break;
      case 'Seafood':
        result[i].name = Seafood[Math.floor(Math.random() * Seafood.length)];
        break;

      case 'Pizza':
        result[i].name = Pizza[Math.floor(Math.random() * Pizza.length)];
        break;

      case 'Pasta':
        result[i].name = Pasta[Math.floor(Math.random() * Pasta.length)];
        break;

      case 'Cocktail':
        result[i].name = Cocktail[Math.floor(Math.random() * Cocktail.length)];
        break;

      case 'Coffee':
        result[i].name = Coffee[Math.floor(Math.random() * Coffee.length)];
        break;

      case 'Softdrink':
        result[i].name = Softdrink[Math.floor(Math.random() * Softdrink.length)];
        break;

      case 'Wine':
        result[i].name = Wine[Math.floor(Math.random() * Wine.length)];
        break;

      default:
        result[i].name = 'ummmm';
    }
  }

  return result;
};
