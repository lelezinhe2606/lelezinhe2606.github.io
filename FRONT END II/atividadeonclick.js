const miniaturas = document.querySelectorAll('.miniatura')
const imgAmpliada = document.querySelector('#imgAmpliado')

miniaturas.forEach(miniatura=> {
    miniaturas.addEventListener('click', ()=>{
        miniaturas.forEach(miniatura=>{
            miniatura.style.opacity = '0.4';
        })
        miniatura.computedStyleMap.opacity= '1';
        imgAmpliada.src = miniatura.src;
        imgAmpliada.style.display = 'block';

    });
    
});