export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  eyebrow: string;
  note?: string;
  items: MenuItem[];
}

const tzs = (n: number) => `${n.toLocaleString("en-US")}`;

export const menuCategories: MenuCategory[] = [
  {
    id: "to-begin",
    title: "To Begin",
    eyebrow: "Starters",
    items: [
      {
        name: "Beef Carpaccio",
        description: "Shaved prime beef, aged parmesan, rocket, lemon oil, cracked pepper",
        price: tzs(22000),
      },
      {
        name: "Grilled Halloumi",
        description: "Charred halloumi, honey, chilli flakes, toasted sesame",
        price: tzs(16000),
      },
      {
        name: "Peri-Peri Chicken Livers",
        description: "Pan-seared livers, peri-peri butter, grilled sourdough",
        price: tzs(15000),
      },
      {
        name: "Calamari al Fuoco",
        description: "Flash-fried calamari, lime aioli, fresh chilli",
        price: tzs(19000),
      },
      {
        name: "Grilled Prawns",
        description: "Half-shell prawns off the flame, garlic butter, lemon",
        price: tzs(28000),
        tag: "Chef's Pick",
      },
      {
        name: "Smoked Beef Carpaccio Bruschetta",
        description: "Toasted ciabatta, whipped feta, smoked beef, basil oil",
        price: tzs(18000),
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    eyebrow: "Fresh & Crisp",
    items: [
      {
        name: "Oyster Bay Greek Salad",
        description: "Tomato, cucumber, kalamata olives, feta, red onion, oregano oil",
        price: tzs(16000),
      },
      {
        name: "Grilled Chicken Caesar",
        description: "Flame-grilled chicken breast, cos lettuce, parmesan, herb croutons",
        price: tzs(20000),
      },
      {
        name: "Roasted Beet & Goat Cheese",
        description: "Roasted beetroot, whipped goat cheese, candied walnuts, rocket",
        price: tzs(18000),
      },
    ],
  },
  {
    id: "from-the-flame",
    title: "From the Flame",
    eyebrow: "Prime Steaks",
    note: "All steaks are grilled over open flame and served with your choice of two sides and a sauce.",
    items: [
      {
        name: "Sirloin",
        description: "300g grain-fed sirloin, char-grilled to your liking",
        price: tzs(42000),
      },
      {
        name: "Rib Eye",
        description: "350g marbled rib eye, seared for a deep, smoky crust",
        price: tzs(52000),
        tag: "Guest Favourite",
      },
      {
        name: "Fillet",
        description: "250g centre-cut tenderloin, the most tender cut on the grill",
        price: tzs(56000),
      },
      {
        name: "The South African T-Bone",
        description: "450g classic T-bone, bone-in for maximum flavour",
        price: tzs(58000),
        tag: "Signature",
      },
      {
        name: "Porterhouse",
        description: "400g porterhouse, char-grilled and rested tableside",
        price: tzs(60000),
      },
      {
        name: "The Tomahawk",
        description: "1kg bone-in tomahawk, dry-rubbed and fire-grilled — built to share",
        price: tzs(145000),
        tag: "For the Table",
      },
    ],
  },
  {
    id: "slow-and-low",
    title: "Slow & Low",
    eyebrow: "Ribs & Braises",
    items: [
      {
        name: "Fall-Off-The-Bone Ribs — Half Rack",
        description: "Slow-cooked pork ribs, house glaze, hand-cut fries",
        price: tzs(38000),
      },
      {
        name: "Fall-Off-The-Bone Ribs — Full Rack",
        description: "Slow-cooked pork ribs, house glaze, hand-cut fries",
        price: tzs(62000),
        tag: "Signature",
      },
      {
        name: "Braised Oxtail",
        description: "Oxtail braised for hours, root vegetables, herb mash",
        price: tzs(46000),
      },
      {
        name: "Roast Lamb Shank",
        description: "Slow-roasted lamb shank, red wine jus, herb mash",
        price: tzs(48000),
      },
    ],
  },
  {
    id: "surf-and-turf",
    title: "Surf & Turf",
    eyebrow: "Land Meets Sea",
    items: [
      {
        name: "Sirloin & Prawns",
        description: "300g sirloin paired with garlic-butter grilled prawns",
        price: tzs(64000),
      },
      {
        name: "Fillet & Prawns",
        description: "250g fillet paired with garlic-butter grilled prawns",
        price: tzs(72000),
        tag: "Signature",
      },
      {
        name: "Grilled Prawn Platter",
        description: "A full plate of flame-grilled prawns, chilli lime butter, onion rings",
        price: tzs(48000),
      },
    ],
  },
  {
    id: "burgers",
    title: "Burgers & Handhelds",
    eyebrow: "Stacked High",
    items: [
      {
        name: "The Shooters Smash Burger",
        description: "Double smashed beef patty, aged cheddar, house sauce, brioche bun",
        price: tzs(28000),
      },
      {
        name: "Bacon & Egg Burger",
        description: "Beef patty, crispy bacon, fried egg, smoked BBQ glaze",
        price: tzs(30000),
        tag: "Signature",
      },
      {
        name: "Grilled Chicken Burger",
        description: "Flame-grilled chicken breast, avocado, chipotle mayo",
        price: tzs(26000),
      },
      {
        name: "Onion Ring Tower",
        description: "Beer-battered onion rings stacked high, chipotle dip",
        price: tzs(14000),
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    eyebrow: "Round It Out",
    items: [
      { name: "Hand-Cut Fries", description: "Triple-cooked, sea salt", price: tzs(9000) },
      { name: "Truffle Parmesan Fries", description: "Hand-cut fries, truffle oil, shaved parmesan", price: tzs(13000) },
      { name: "Creamy Herb Mash", description: "Butter mash, garden herbs", price: tzs(9000) },
      { name: "Grilled Seasonal Vegetables", description: "Broccoli, carrot, cauliflower, herb butter", price: tzs(10000) },
      { name: "Mac & Cheese", description: "Three-cheese bake, crisp top", price: tzs(12000) },
      { name: "Steamed Rice", description: "Fragrant steamed rice", price: tzs(7000) },
    ],
  },
  {
    id: "sauces",
    title: "Steak Butters & Sauces",
    eyebrow: "Finish It Right",
    items: [
      { name: "Herb & Garlic Butter", description: "Whipped compound butter", price: tzs(4000) },
      { name: "Peppercorn Sauce", description: "Classic cream and cracked pepper", price: tzs(5000) },
      { name: "Mushroom Jus", description: "Wild mushroom, red wine reduction", price: tzs(5000) },
      { name: "Chimichurri", description: "Fresh herb and garlic oil", price: tzs(4000) },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    eyebrow: "Something Sweet",
    items: [
      {
        name: "Molten Chocolate Fondant",
        description: "Warm dark chocolate cake, vanilla bean ice cream",
        price: tzs(18000),
      },
      {
        name: "Kilimanjaro Coffee Crème Brûlée",
        description: "Torched sugar crust, local coffee custard",
        price: tzs(16000),
      },
      {
        name: "New York Cheesecake",
        description: "Baked cheesecake, berry compote",
        price: tzs(17000),
      },
      {
        name: "Tropical Fruit Plate",
        description: "Chef's selection of seasonal fruit",
        price: tzs(13000),
      },
    ],
  },
];

export const cocktailMenu: MenuCategory[] = [
  {
    id: "signature-cocktails",
    title: "Signature Cocktails",
    eyebrow: "The Bar",
    items: [
      {
        name: "Haile Selassie Old Fashioned",
        description: "Bourbon, demerara, orange bitters, smoked over embers",
        price: tzs(24000),
        tag: "Signature",
      },
      {
        name: "Oyster Bay Sundowner",
        description: "Gin, passionfruit, lime, rosemary, soda",
        price: tzs(22000),
      },
      {
        name: "Shooters Espresso Martini",
        description: "Vodka, espresso, coffee liqueur, vanilla",
        price: tzs(23000),
      },
      {
        name: "Karafuu Spice Margarita",
        description: "Tequila, clove syrup, lime, tajín rim",
        price: tzs(23000),
      },
      {
        name: "Rooftop Cosmopolitan",
        description: "Vodka, triple sec, cranberry, fresh lime",
        price: tzs(21000),
      },
    ],
  },
  {
    id: "classics",
    title: "Classics & Spirits",
    eyebrow: "The Bar",
    items: [
      { name: "Whisky, Neat or on the Rocks", description: "Ask your server for the current selection", price: tzs(20000) },
      { name: "Mojito", description: "White rum, mint, lime, soda", price: tzs(19000) },
      { name: "Margarita", description: "Tequila, triple sec, fresh lime", price: tzs(20000) },
      { name: "Gin & Tonic", description: "Premium gin, botanical tonic, citrus", price: tzs(18000) },
      { name: "Draft Beer", description: "Ask your server for the current selection", price: tzs(9000) },
    ],
  },
  {
    id: "wine",
    title: "Wine List",
    eyebrow: "By the Glass or Bottle",
    items: [
      { name: "House Red / White", description: "By the glass", price: tzs(15000) },
      { name: "South African Cabernet Sauvignon", description: "Bottle", price: tzs(85000) },
      { name: "South African Chenin Blanc", description: "Bottle", price: tzs(75000) },
      { name: "Prosecco", description: "Bottle", price: tzs(95000) },
    ],
  },
  {
    id: "mocktails",
    title: "Non-Alcoholic",
    eyebrow: "Mocktails & More",
    items: [
      { name: "Virgin Sundowner", description: "Passionfruit, lime, rosemary, soda", price: tzs(12000) },
      { name: "Fresh Juice", description: "Passion, mango, or watermelon", price: tzs(9000) },
      { name: "Sparkling Water", description: "Still or sparkling", price: tzs(6000) },
      { name: "Soft Drinks", description: "Ask your server for the current selection", price: tzs(6000) },
    ],
  },
];
