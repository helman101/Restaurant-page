let showContact = () => {
  let displayDiv = document.querySelector('#display');
  let displayPara = document.createElement('p');

  displayPara.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie tincidunt neque, sit amet egestas mi volutpat id. Quisque vel rutrum nisl, ut tempus neque.';
  displayPara.classList.add('about-para');
  displayDiv.innerHTML = '';
  
  displayDiv.appendChild(displayPara);
}

export default showContact