let botones=$('button')
let [caja1,caja2,caja3]=[$('#caja1'),$('#caja2'),$('#caja3')]

botones.on('click', function() {
    // Cambiado para verificar el valor del input de texto
    let inputTexto = $(this).closest('.cajaBusqueda').find('input[type="text"]');
    if(inputTexto.val() !== ""){ 
        let cajaBusqueda = $(this).closest('.cajaBusqueda');

        inputTexto.removeClass('placeholder-red-400');

        if (cajaBusqueda.attr('id') === 'caja1') {
            cajaBusqueda.toggleClass('bg-green-500');
            inputTexto.toggleClass('placeholder-black');
            inputTexto.toggleClass('bg-green-500'); 
        }
        if (cajaBusqueda.attr('id') === 'caja2') {
            cajaBusqueda.toggleClass('bg-yellow-500');
            inputTexto.toggleClass('placeholder-black');
            inputTexto.toggleClass('bg-yellow-500'); 
        }
        if (cajaBusqueda.attr('id') === 'caja3') {
            cajaBusqueda.toggleClass('bg-blue-500');
            inputTexto.toggleClass('placeholder-black');
            inputTexto.toggleClass('bg-blue-500'); 
        }
    }
})










