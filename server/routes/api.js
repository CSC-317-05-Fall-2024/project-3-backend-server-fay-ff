import express from 'express';
import { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from '../data/restaurants.js';  // Ensure you import getRestaurant

const router = express.Router();

// Get all restaurants (for API requests)
router.get('/restaurants', (req, res) => {
  res.json(getRestaurants());
});

// Get a specific restaurant by ID
router.get('/restaurants/:id', (req, res) => {
  const id = parseInt(req.params.id);  
  const restaurant = getRestaurant(id);  
  if (restaurant) {
    res.json(restaurant);  
  } else {
    res.status(404).send('Restaurant not found');  
  }
});

// Create a new restaurant
router.post('/restaurants', (req, res) => {
  const newRestaurant = req.body;
  const createdRestaurant = createRestaurant(newRestaurant);
  res.status(201).json(createdRestaurant);
});


// Delete a restaurant by ID
router.delete('/restaurants/:id', (req, res) => {
  const id = parseInt(req.params.id);
  deleteRestaurant(id);
  res.status(204).send();  
});


export default router;
