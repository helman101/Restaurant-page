let showContact = () => {
  let displayDiv = document.querySelector('#display');
  let displayPara = document.createElement('p');

  displayPara.textContent = 'Contact';
  displayDiv.innerHTML = '';
  displayDiv.appendChild(displayPara);
}

export default showContact