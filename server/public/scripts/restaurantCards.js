document.addEventListener('DOMContentLoaded', () => {
  const restaurantContainer = document.querySelector('.restaurant-cards');

  // Function to delete a restaurant by ID
  function deleteRestaurantCard(id) {
    fetch(`/api/restaurants/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        // After deleting, re-fetch the restaurant data and re-render the cards
        renderRestaurantCards();
      } else {
        console.error('Failed to delete restaurant');
      }
    })
    .catch(err => console.error('Error:', err));
  }

  // Function to render all restaurant cards
  function renderRestaurantCards() {
    fetch('/api/restaurants')  // Fetch all restaurant data from the server
      .then(response => response.json())
      .then(restaurants => {
        // Clear the current restaurant cards
        restaurantContainer.innerHTML = '';

        // Render each restaurant as a card
        restaurants.forEach(restaurant => {
          const card = document.createElement('div');
          card.classList.add('restaurant-card');
          card.innerHTML = `
            <img src="${restaurant.photo}" alt="${restaurant.name}">
            <h2>${restaurant.name}</h2>
            <p>Phone: ${restaurant.phone}</p>
            <p>Address: ${restaurant.address}</p>
            <button class="delete-btn" data-id="${restaurant.id}">Delete</button>
          `;

          // Add event listener to the delete button
          card.querySelector('.delete-btn').addEventListener('click', () => {
            const id = card.querySelector('.delete-btn').getAttribute('data-id');
            deleteRestaurantCard(id);
          });

          restaurantContainer.appendChild(card);  // Append the card to the container
        });
      })
      .catch(err => console.error('Error fetching restaurants:', err));
  }

  // Initially render restaurant cards when the page loads
  renderRestaurantCards();
});
