
for (let i = 1; i <= 6; i++) {
  const rollTemplate = document.getElementById('roll-template').content;
  const newRoll = rollTemplate.cloneNode(true);
  newRoll.querySelector('.number').innerText = i + '.';
  
  const image = newRoll.querySelector('.roll img');
  image.src = `${i}.png`;

  document.body.appendChild(newRoll);
}
  


















  
  
  
  
  
  
const byAlphabetical = (doggy1, doggy2) => doggy1.name > doggy2.name;

const alphabeticalDoggies = doggies.slice().sort(byAlphabetical);
const dogsOver25Pounds = doggies.filter((doggy) => doggy.weight > 25);
const greyDoggies = doggies.filter((doggy) => doggy.color === 'grey');


  

for (let i = 0; i < greyDoggies.length; i++) {
  const doggy = greyDoggies[i];
  addDoggy(doggy);
}


function addDoggy(doggy) {
  const doggyTemplate = document.getElementById('doggy').content;
  const newDoggy = doggyTemplate.cloneNode(true);
  
  newDoggy.querySelector('.name').innerText = doggy.name;
  newDoggy.querySelector('.color').innerText += doggy.color
  newDoggy.querySelector('.weight').innerText += doggy.weight
  
  document.body.appendChild(newDoggy);
}








// function addDoggy(doggy) {
//   const template = document.getElementById('doggy').content;
//   const newTemplate = template.cloneNode(true);
  
//   newTemplate.querySelector('.name').innerText = doggy.name;
//   newTemplate.querySelector('.color').innerText += doggy.color
//   newTemplate.querySelector('.weight').innerText += doggy.weight
  
//   document.body.appendChild(newTemplate);
// }
