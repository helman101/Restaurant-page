let showMenu = () => {
  let displayDiv = document.querySelector('#display');
  let displayPara = document.createElement('p');

  displayPara.textContent = 'Menu';
  displayDiv.innerHTML = '';
  displayDiv.appendChild(displayPara);
}

export default showMenu