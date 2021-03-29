const showAbout = () => {
  const displayDiv = document.querySelector('#display');
  const displayPara = document.createElement('p');

  displayDiv.classList.remove('flex-wrap');

  displayPara.classList.add('para');
  displayPara.textContent = 'Welcome to Criollo Flavor, we are specialists in colombian food, so take a look to our menu a let the flavor take you to another country.';

  displayDiv.innerHTML = '';
  displayDiv.appendChild(displayPara);
};

export default showAbout;