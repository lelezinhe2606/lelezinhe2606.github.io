const itensMenu = [
    {nome: 'Inicio ', url: 'index.html'},
    {nome: 'Sobre', url: 'sobre.html'},
    {nome: 'contato', url: 'contato.html' }
];

const menu = () => {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const body = document.createElement('body');
    header.appendChild(nav);
    nav.appendChild(ul);
    body.prepend(header);

};

function adicionarLi (){
    const ul = document.querySelector('ul');
    itensMenu.forEach(item=>{
      const li = document.createElement('li');
      const a = document.createElement('a')
      a.setAttribute('href', item.url)
      a.textContent = item.nome.toUpperCase();
      ul.appendChild(ul);
      li.appendChild(li);
      a.style.textDecoration = 'none';
      a.style.color = 'white'
    })
}
function estilizacao (){
    const header = document.querySelector('header')
    const ul = document.querySelector('ul')
    header.style.background = '#07D41'
    header.style.fontFamily= 'arial'
    ul.style.header = '40px'
    ul.style.listStyle
}
menu()
adicionarLi()