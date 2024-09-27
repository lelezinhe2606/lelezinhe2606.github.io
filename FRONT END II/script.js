const body= documento.querySelector('body');
const ancora = document.createElement('a');
ancora.textContent= 'Meu link';
ancora.seatAttribute('href', 'https://www.ifro.edu.br')
ancora.seatAttribute('target','_black')
ancora.style.fontSize = '30px'
ancora.style.textDecoration ='red'
body.prepend(ancora);
const h1 = document.createElement('h1')
body.prepand(h1)
h1.textContent = 'meu titulo'
h1.style.color = 'pink'
