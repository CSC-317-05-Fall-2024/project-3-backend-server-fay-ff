const header = document.querySelector('header');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');

header.innerHTML = `<h1>Bei Jing</h1>`;

nav.innerHTML = `
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/attractions">Attractions</a></li>
    <li><a href="/restaurants">Restaurants</a></li>
    <li><a href="/new-restaurant">New Restaurant</a></li>
  </ul>
`;

footer.innerHTML = `<p>&copy; Fay-ff. All rights reserved.</p>`;
