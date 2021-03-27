let pageLoad = () => {
  const container = document.querySelector('#content');
  const btnsDiv = document.createElement('div');
  const displayDiv = document.createElement('div');
  const aboutBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  document.body.style = 'background-image: url(../src/img/restaurant-homepage.jpg)';
  document.body.classList.add('body');

  aboutBtn.textContent = 'About';
  menuBtn.textContent = 'Menu';
  contactBtn.textContent = 'Contact';

  aboutBtn.classList.add('btns');
  menuBtn.classList.add('btns');
  contactBtn.classList.add('btns');

  aboutBtn.setAttribute('id', 'about');
  menuBtn.setAttribute('id', 'menu');
  contactBtn.setAttribute('id', 'contact');

  displayDiv.setAttribute('id', 'display');

  aboutBtn.autofocus = true;

  displayDiv.classList.add('display');

  container.classList.add('content');

  btnsDiv.appendChild(aboutBtn);
  btnsDiv.appendChild(menuBtn);
  btnsDiv.appendChild(contactBtn);
  container.appendChild(btnsDiv);
  container.appendChild(displayDiv);
}

export default pageLoad 