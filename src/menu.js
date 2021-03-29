class Foods {
  constructor(name, price, image)  {
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

const bandejaPaisa = new Foods('Bandeja Paisa', '5', '../src/img/bandeja-paisa.jpeg');
const ajiaco = new Foods('Ajiaco', '3', '../src/img/ajiaco.jpg');
const tamal= new Foods('Tamal', '2', '../src/img/tamal.jpg');
const arepa = new Foods('Arepa', '1.50', '../src/img/arepa.jpg');

const menuArray = [bandejaPaisa, ajiaco, tamal, arepa]

let showMenu = () => {
  let displayDiv = document.querySelector('#display');
  displayDiv.innerHTML = '';
  displayDiv.classList.add('flex-wrap')
  for(let i = 0; i < menuArray.length; i+=1){
    const div = document.createElement('div');
    let name = document.createElement('div');
    div.classList.add('food');
    name.textContent = menuArray[i].name;
    div.appendChild(name);
    div.style.backgroundImage = `url(${menuArray[i].image})`;
    

    displayDiv.appendChild(div);
  }
}

export default showMenu