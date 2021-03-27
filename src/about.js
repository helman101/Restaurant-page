let showAbout = () => {
  let displayDiv = document.querySelector('#display');
  let displayPara = document.createElement('p');

  displayPara.textContent = 'Welcome to Criollo Flavor, we are specialists in colombian food, so take a look to our menu a let the flavor take you to another country';
  
  displayDiv.innerHTML = '';
  displayDiv.appendChild(displayPara)
}

export default showAbout