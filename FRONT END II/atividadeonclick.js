const miniaturas = document.querySelector('.miniatura')
const imgAmpliada = document.querySelector('.imgAmpliado')

miniaturas.forEach(miniatura=> {
    miniaturas.addEventListener('click', ()=>{
        const src = miniatura.src;
        console.log(src)
    })
    
})