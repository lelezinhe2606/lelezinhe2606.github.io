const txt = document.querySelector('#txt')
const divImg = document.querySelector('.divImg')

function bordaDiv() {
    divImg.style.border= '2px solid black'
}

divImg.addEventListener('click',bordaDiv)


txt.onclick = () => {
    alert('Campo de texto clicado!')
}


const clicked = () => {
    console.log('botão Clicado ')
}

txt.addEventListener('keypress',()=>{
    alert('Tecla pressionada!')
})

divImg.addEventListener('mouseout',()=>{
    divImg.style.opacity = '1'
})

divImg.addEventListener('mouseover',()=>{
    divImg.style.opacity = '0.5'
})