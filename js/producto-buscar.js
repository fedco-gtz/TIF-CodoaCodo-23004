document.addEventListener('keyup', e => {
    if(e.target.matches('#buscador')){
        document.querySelectorAll('.prod').forEach(producto => {
        //    if ((producto.textContent.toLocaleLowerCase().includes(e.target.value)) == true){
        //         producto.classList.remove('filtro')
        //    } else {
        //         producto.classList.add('filtro')
        //    }
        
           producto.textContent.toLocaleLowerCase().includes(e.target.value.toLowerCase())
           ? producto.classList.remove('filtro')
           : producto.classList.add('filtro');
        })
    }
})