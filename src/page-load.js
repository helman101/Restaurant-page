const container = document.querySelector('#content');

let pageLoad = () => {
  let homepageImg = document.createElement('img');
  let description = document.createElement('p');
  
  homepageImg.setAttribute('src', '../src/img/restaurant-homepage.jpg');
  description.textContent = 'Welcome to Criollo Flavor, we are specialists in colombian food, so take a look to our menu a let the flavor take you to another country';

  document.body.appendChild(homepageImg);
  container.appendChild(description);
}

export default pageLoad 