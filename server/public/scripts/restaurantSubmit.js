document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');  // Select the form
  
    // Handle form submission
    function handleSubmit(event) {
      event.preventDefault();  // Prevent the form's default submission behavior
  
      // Get the form data
      const formData = new FormData(form);
      const restaurantData = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        photo: formData.get('photo') || 'https://via.placeholder.com/150'  // Default photo if none provided
      };
  
      // Send a POST request to the server to create a new restaurant
      fetch('/api/restaurants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(restaurantData),  // Convert the restaurant data to JSON
      })
      .then(response => response.json())
      .then(data => {
        console.log('Restaurant created:', data);
  
        // Navigate to the /restaurants page after successful creation
        window.location.href = '/restaurants';
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  
    // Attach the submit handler to the form
    form.addEventListener('submit', handleSubmit);
  });
  