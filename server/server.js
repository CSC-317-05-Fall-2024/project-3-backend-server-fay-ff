import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from './data/restaurants.js';
import apiRoutes from './routes/api.js';

const app = express();
const PORT = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  

// Route to serve the home page
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});

// Route to serve the attractions page
app.get('/attractions', (req, res) => {
  res.sendFile('attractions.html', { root: path.join(__dirname, 'public') });
});

// Route to render the form for adding a new restaurant
app.get('/new-restaurant', (req, res) => {
  res.render('newRestaurant'); 
});

// Route to render all restaurants (Frontend)
app.get('/restaurants', (req, res) => {
  const restaurants = getRestaurants();  
  res.render('restaurants', { restaurants });  
});

// Route to render a single restaurant by its ID (Frontend)
app.get('/restaurants/:id', (req, res) => {
  const id = parseInt(req.params.id);  
  const restaurant = getRestaurant(id);  
  if (restaurant) {
    res.render('restaurant-details', { restaurant });  
  } else {
    res.status(404).send('Restaurant not found');
  }
});


app.use('/api', apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


app.post('/submit-restaurant', (req, res) => {
  const newRestaurant = {
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    photo: req.body.photo || 'https://via.placeholder.com/150',  
  };

  createRestaurant(newRestaurant);  
  res.redirect('/restaurants');  
});

