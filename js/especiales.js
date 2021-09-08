


    const cardsEspeciales = document.getElementById('cards_especiales')
    // const templateCardEspeciales = document.getElementById('template-card').content
    const templateCardEspeciales = document.getElementById('template-card-especial').content
    const templateModalEspeciales = document.getElementById('template-modal-especial').content
    const itemsEspeciales = document.getElementById('items_especiales')
    const fondoModalEspeciales = document.getElementById('fondo_especiales')
    
    const fragmentespecial = document.createDocumentFragment();
    

    document.addEventListener('DOMContentLoaded', () => {
        fetchDataEspecial();
    })
    
    cardsEspeciales.addEventListener('click', e => {
        // addCarrito(e)
        capturaDatosEspecial(e)
    }) 
    
    const fetchDataEspecial = async () => {
        try {
            const res = await fetch('js/app.json')
            const data = await res.json()
            console.log(data);
            pintarCardsEspeciales(data)
    
        } catch (error) {
            console.log(error)
        }
    }
    
    
    const pintarCardsEspeciales = data => {
    
        // const opcion1 = () => {
        //     let maquinariaPesada = data.filter(function (el) {
        //         return (el.categoria == 1)
        //     })
        //     // console.log(maquinariaPesada)
    
        //     maquinariaPesada.forEach(producto => {
        //         // console.log(producto);
        //         templateCard.querySelector('h5').textContent = producto.title
        //         templateCard.querySelector('img').setAttribute('src', producto.imagen)
        //         templateCard.querySelector('.btn-warning').dataset.id = producto.id
    
        //         templateCard.querySelectorAll('p')[0].textContent = producto.detalle.textoUno
        //         templateCard.querySelectorAll('p')[1].textContent = producto.detalle.textoDos
        //         templateCard.querySelectorAll('p')[2].textContent = producto.detalle.textoTres
        //         templateCard.querySelectorAll('p')[3].textContent = producto.detalle.textoCuatro
        //         // templateCard.querySelectorAll('p')[4].textContent = producto.detalle.textoCinco
        //         // templateCard.querySelectorAll('p')[5].textContent = producto.detalle.textoSeis
    
    
    
        //         for (let i = 0; i < templateCard.querySelectorAll('p').length; i++) {
    
        //             // templateCard.querySelectorAll('p')[i].style.visibility = 'none'
        //             templateCard.querySelectorAll('p')[i].style.height = '0px'
        //             templateCard.querySelectorAll('p')[i].style.display = 'none'
    
    
        //         }
        //         const clone = templateCard.cloneNode(true)
        //         fragment.appendChild(clone)
        //     });
        //     cards.appendChild(fragment)
        // }
    
        
            let especial = data.filter(function (el) {
                return (el.categoria == 3)
            })
            console.log(especial)
    
            especial.forEach(producto => {
                // console.log(producto);
                templateCardEspeciales.querySelector('h5').textContent = producto.title
                templateCardEspeciales.querySelector('img').setAttribute('src', producto.imagen)
                templateCardEspeciales.querySelector('.btn-warning').dataset.id = producto.id
    
                templateCardEspeciales.querySelectorAll('p')[0].textContent = producto.detalle.textoUno
                templateCardEspeciales.querySelectorAll('p')[1].textContent = producto.detalle.textoDos
                templateCardEspeciales.querySelectorAll('p')[2].textContent = producto.detalle.textoTres
                templateCardEspeciales.querySelectorAll('p')[3].textContent = producto.detalle.textoCuatro
                // templateCardEspeciales.querySelectorAll('p')[4].textContent = producto.detalle.textoCinco
                // templateCardEspeciales.querySelectorAll('p')[5].textContent = producto.detalle.textoSeis
    
    
    
                for (let i = 0; i < templateCardEspeciales.querySelectorAll('p').length; i++) {
    
                    // templateCardEspeciales.querySelectorAll('p')[i].style.visibility = 'none'
                    templateCardEspeciales.querySelectorAll('p')[i].style.height = '0px'
                    templateCardEspeciales.querySelectorAll('p')[i].style.display = 'none'
    
                }
                const clone = templateCardEspeciales.cloneNode(true)
                fragmentespecial.appendChild(clone)
            });
            cardsEspeciales.appendChild(fragmentespecial)
        
        // const opcion3 = () => {
        //     let vehiculosEspeciales = data.filter(function (el) {
        //         return (el.categoria == 3)
        //     })
        //     console.log(vehiculosEspeciales)
    
        //     vehiculosEspeciales.forEach(producto => {
        //         // console.log(producto);
        //         templateCard.querySelector('h5').textContent = producto.title
        //         templateCard.querySelector('img').setAttribute('src', producto.imagen)
        //         templateCard.querySelector('.btn-warning').dataset.id = producto.id
    
        //         templateCard.querySelectorAll('p')[0].textContent = producto.detalle.textoUno
        //         templateCard.querySelectorAll('p')[1].textContent = producto.detalle.textoDos
        //         templateCard.querySelectorAll('p')[2].textContent = producto.detalle.textoTres
        //         templateCard.querySelectorAll('p')[3].textContent = producto.detalle.textoCuatro
        //         // templateCard.querySelectorAll('p')[4].textContent = producto.detalle.textoCinco
        //         // templateCard.querySelectorAll('p')[5].textContent = producto.detalle.textoSeis
    
    
    
        //         for (let i = 0; i < templateCard.querySelectorAll('p').length; i++) {
    
        //             // templateCard.querySelectorAll('p')[i].style.visibility = 'none'
        //             templateCard.querySelectorAll('p')[i].style.height = '0px'
        //             templateCard.querySelectorAll('p')[i].style.display = 'none'
    
    
        //         }
        //         const clone = templateCard.cloneNode(true)
        //         fragment.appendChild(clone)
        //     });
        //     cards.appendChild(fragment)
        // }
        // const opcion4 = () => {
        //     let maquinariaLigera = data.filter(function (el) {
        //         return (el.categoria == 4)
        //     })
        //     console.log(maquinariaLigera)
    
        //     maquinariaLigera.forEach(producto => {
        //         // console.log(producto);
        //         templateCard.querySelector('h5').textContent = producto.title
        //         templateCard.querySelector('img').setAttribute('src', producto.imagen)
        //         templateCard.querySelector('.btn-warning').dataset.id = producto.id
    
        //         templateCard.querySelectorAll('p')[0].textContent = producto.detalle.textoUno
        //         templateCard.querySelectorAll('p')[1].textContent = producto.detalle.textoDos
        //         templateCard.querySelectorAll('p')[2].textContent = producto.detalle.textoTres
        //         templateCard.querySelectorAll('p')[3].textContent = producto.detalle.textoCuatro
        //         // templateCard.querySelectorAll('p')[4].textContent = producto.detalle.textoCinco
        //         // templateCard.querySelectorAll('p')[5].textContent = producto.detalle.textoSeis
    
    
    
        //         for (let i = 0; i < templateCard.querySelectorAll('p').length; i++) {
    
        //             // templateCard.querySelectorAll('p')[i].style.visibility = 'none'
        //             templateCard.querySelectorAll('p')[i].style.height = '0px'
        //             templateCard.querySelectorAll('p')[i].style.display = 'none'
    
    
        //         }
        //         const clone = templateCard.cloneNode(true)
        //         fragment.appendChild(clone)
        //     });
        //     cards.appendChild(fragment)
        // }
        // console.log(data)
        // FUNCIONES PARA LLAMARA A CADA VEHICULO
    
        // opcion1()
        // opcion2()
        // opcion3()
        // opcion4()
    
    
    
    }
    const capturaDatosEspecial = e => {
        // console.log(e.target)
    
        if (e.target.classList.contains('btn-warning')) {
            tomarDatosEspecial(e.target.parentElement)
        }
        // e.stopPropagation()
    }
    
    const tomarDatosEspecial = obejeto => {
    
        console.log(obejeto);
    
        const producto = {
            imagen: obejeto.querySelector('img').getAttribute('src', obejeto),
            id: obejeto.querySelector('.btn-warning').dataset.id,
            title: obejeto.querySelector('h5').textContent,
            textoUno: obejeto.querySelectorAll('p')[0].textContent,
            textoDos: obejeto.querySelectorAll('p')[1].textContent,
            textoTres: obejeto.querySelectorAll('p')[2].textContent,
            textoCuatro: obejeto.querySelectorAll('p')[3].textContent,
            // textoCinco: obejeto.querySelectorAll('p')[4].textContent,
            // textoSeis: obejeto.querySelectorAll('p')[5].textContent,
            // detalle: obejeto.querySelectorAll('p')[0]
        }
    
        console.log(producto);
        
        carrito[producto.id] = {
            ...producto
        }
        pintarProductosEspecial();
    }
    
    const pintarProductosEspecial = () => {
    
        // // console.log(carrito);
        itemsEspeciales.innerHTML = ''
        itemsEspeciales.style.display = 'block'
    
        // items.style.zIndex = '999999'    
        itemsEspeciales.style.position = 'fixed'
        fondoModalEspeciales.style.background = "rgba(0,0,0,0.8)"
        fondoModalEspeciales.style.width = '100vw'
        fondoModalEspeciales.style.height = '100vh'
        fondoModalEspeciales.style.display = 'block'
        fondoModalEspeciales.style.zIndex = '99'
        fondoModalEspeciales.style.position = 'fixed'
    
    
        Object.values(carrito).forEach(producto => {
            templateModalEspeciales.querySelector('h5').textContent = producto.title
            templateModalEspeciales.querySelector('img').setAttribute('src', producto.imagen)
            templateModalEspeciales.querySelectorAll('p')[0].textContent = producto.textoUno
            templateModalEspeciales.querySelectorAll('p')[1].textContent = producto.textoDos
            templateModalEspeciales.querySelectorAll('p')[2].textContent = producto.textoTres
            templateModalEspeciales.querySelectorAll('p')[3].textContent = producto.textoCuatro
            // templateModalEspeciales.querySelectorAll('p')[4].textContent =  producto.textoCinco
            // templateModalEspeciales.querySelectorAll('p')[5].textContent =  producto.textoSeis
            const clone = templateModalEspeciales.cloneNode(true)
            fragmentespecial.appendChild(clone)
        })
        itemsEspeciales.appendChild(fragmentespecial)
    }
    
    
    fondoModalEspeciales.addEventListener('click', function () {
        carrito = {}
        console.log(this);
        pintarProductosEspecial()
        itemsEspeciales.innerHTML = ''
    
        fondoModalEspeciales.style.background = "none"
        fondoModalEspeciales.style.width = '0'
        fondoModalEspeciales.style.height = '0'
        fondoModalEspeciales.style.display = 'none'
        fondoModalEspeciales.style.position = 'relative'
        fondoModalEspeciales.style.zIndex = '0'
    
    })
