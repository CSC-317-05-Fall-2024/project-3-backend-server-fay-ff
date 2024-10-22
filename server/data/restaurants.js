// Restaurant data array
export let restaurantData = [
  {
    id: 0,
    name: "My Restaurant",
    phone: "(415) 123222",
    address: "63th, changan street",
    photo: "https://picsum.photos/150/150"
  },
  {
    id: 1,
    name: "Another Restaurant",
    phone: "(415) 123-4567",
    address: "123 Main St, San Francisco, CA 94132",
    photo: "https://picsum.photos/150/150"
  }
];


function getNextId() {
  return restaurantData.length ? restaurantData[restaurantData.length - 1].id + 1 : 0;
}

// Get all restaurants
export function getRestaurants() {
  return restaurantData;
}

// Get a restaurant by ID
export function getRestaurant(id) {
  return restaurantData.find(restaurant => restaurant.id === id);
}

// Create a new restaurant
export function createRestaurant(newRestaurant) {
  const id = getNextId(); 
  const restaurant = { id, ...newRestaurant };
  restaurantData.push(restaurant);  
  return restaurant;
}

// Delete a restaurant by ID
export function deleteRestaurant(id) {
  restaurantData = restaurantData.filter(restaurant => restaurant.id !== id);
  return restaurantData;
}
