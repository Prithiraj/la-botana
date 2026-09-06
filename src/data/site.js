export const business = {
  name: 'La Botana',
  address: '2415 State Road 60 E, Lake Wales, FL 33898',
  shortAddress: '2415 State Road 60 E · Lake Wales, FL',
  phone: '(863) 679-3335',
  phoneHref: 'tel:+18636793335',
  hoursLabel: '6:00 AM–9:00 PM daily',
  hoursNote: 'Current public listings show 6:00 AM–9:00 PM daily. Holiday hours may vary; call if timing is critical.',
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=La+Botana%2C+2415+State+Road+60+E%2C+Lake+Wales%2C+FL+33898',
  googleMapsPlaceUrl: 'https://www.google.com/maps/place/La+Botana/@27.8934504,-81.5583171,16.42z/data=!4m6!3m5!1s0x88dd085226a84231:0xa8b69c2c8d0c60f!8m2!3d27.8945634!4d-81.5494433!16s%2Fg%2F1tfn3k44',
  doordashUrl: 'https://www.doordash.com/store/la-botana-lake-wales-27975109/',
  uberEatsUrl: 'https://www.ubereats.com/store/la-botana/JaIp3oCMXCidKw6xbIcUBg',
  photos: {
    storefront: {
      src: 'https://static3.grubbio.com/707g-albums-1.jpg',
      alt: 'Bright green La Botana storefront on State Road 60 in Lake Wales.',
      source: 'La Botana public Grubbio listing'
    },
    food: {
      src: 'https://static3.grubbio.com/707g-albums-4.jpg',
      alt: 'Food photographed at La Botana in Lake Wales.',
      source: 'La Botana public Grubbio listing'
    },
    collage: {
      src: 'https://s6.localdatacdn.com/images/3567373/m_la_botana_photo.jpg',
      alt: 'Collage showing La Botana tacos, its green storefront, and a diner.',
      source: 'Restaurantji public listing imagery'
    }
  }
};

export const menuCategories = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    intro: 'Shareable counter favorites and quick starts.',
    items: [
      ['Tamales', 'Homemade masa with pork or chicken; red or green salsa.'],
      ['Gorditas', 'Meat of choice with cream, tomato, lettuce and cotija cheese.'],
      ['Empanadas', 'Fried masa filled with meat of choice and melted mozzarella.'],
      ['Asada Fries', 'Seasoned fries with grilled steak or meat of choice, cheese, cream, jalapeños, tomato and onion.'],
      ['Nachos', 'Tortilla chips with cheese, beans, cream, meat, lettuce, jalapeño, avocado and salsa.']
    ]
  },
  {
    id: 'burritos',
    name: 'Burritos',
    intro: 'Large flour tortillas with rice, beans and La Botana fillings.',
    items: [
      ['Burrito Carne Asada', 'Grilled steak.'],
      ['Burrito de Pollo', 'Seasoned pulled chicken.'],
      ['Burrito de Al Pastor', 'Marinated pork.'],
      ['Burrito de Barbacoa', 'Marinated beef cheek.'],
      ['Burrito de Lengua', 'Beef tongue.'],
      ['Botana Burrito', 'Steak, nacho cheese, cream, Flamin’ Hot Cheetos, onion, jalapeño and seasoned fries.'],
      ['Chimichanga', 'Fried steak or chicken burrito with beans, rice and mozzarella.'],
      ['Breakfast Burrito', 'Egg with a choice of meat, rice, beans and queso fresco.']
    ]
  },
  {
    id: 'tacos',
    name: 'Tacos',
    intro: 'Corn-tortilla tacos served in the familiar counter style.',
    items: [
      ['Taco de Carne Asada', 'Grilled steak.'],
      ['Taco de Chorizo', 'Mexican spiced sausage.'],
      ['Taco de Pollo', 'Seasoned pulled chicken.'],
      ['Taco de Al Pastor', 'Marinated pork.'],
      ['Taco de Barbacoa', 'Marinated beef cheek.'],
      ['Taco de Lengua', 'Beef tongue.'],
      ['Deluxe Taco', 'Flour tortilla with cream, cheese, tomato and lettuce.']
    ]
  },
  {
    id: 'entrees',
    name: 'Entrées',
    intro: 'Full plates for a sit-down meal or a substantial takeout order.',
    items: [
      ['Fajitas', 'Grilled steak or chicken with sautéed peppers and onions, cream and guacamole.'],
      ['Costillas de Puerco', 'Pork ribs in red or green sauce.'],
      ['Chile Relleno', 'Roasted poblano pepper stuffed with queso fresco, battered and fried.'],
      ['Bistek Ranchero', 'A current delivery-menu favorite; check today’s platform menu for availability.']
    ]
  },
  {
    id: 'caldos',
    name: 'Caldos',
    intro: 'Hearty soups served with tortillas.',
    items: [
      ['Caldo de Res', 'Beef soup; a frequently ordered current menu item.'],
      ['Menudo', 'Traditional tripe soup.'],
      ['Caldo de Camarón', 'Shrimp soup.']
    ]
  },
  {
    id: 'more',
    name: 'More from the counter',
    intro: 'The current menu also includes tostadas, mariscos, tortas, sides and drinks.',
    items: [
      ['Tostadas', 'Crisp flat tortillas with beans, lettuce, tomato, queso fresco and salsa.'],
      ['Mariscos', 'Seafood selections vary; check the current ordering menu.'],
      ['Tortas', 'Mexican sandwiches with lettuce, tomato, jalapeño, avocado and queso fresco.'],
      ['Sides & Drinks', 'Rice, beans, chips, bottled drinks and other counter staples.']
    ]
  }
];
