let pageLoad = () => {
  const container = document.querySelector('#content');
  container.classList.add('content')

  let description = document.createElement('p');
  
  document.body.style = 'background-image: url(../src/img/restaurant-homepage.jpg)'
  document.body.classList.add('background-img')

  description.textContent = 'Welcome to Criollo Flavor, we are specialists in colombian food, so take a look to our menu a let the flavor take you to another country';

  container.appendChild(description);
}

export default pageLoad 