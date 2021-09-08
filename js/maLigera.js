


    const cardsLigera = document.getElementById('cards_ligera')
    // const templateCardLigera = document.getElementById('template-card').content
    const templateCardLigera = document.getElementById('template-card-ligera').content
    const templateModalLigera = document.getElementById('template-modal-ligera').content
    const itemsLigera = document.getElementById('items_ligera')
    const fondoModalLigera = document.getElementById('fondo_ligera')
    
    const fragmentligera = document.createDocumentFragment();
    

    document.addEventListener('DOMContentLoaded', () => {
        fetchDataLigera();
    })
    
    cardsLigera.addEventListener('click', e => {
        // addCarrito(e)
        capturaDatosLigera(e)
    }) 
    
    const fetchDataLigera = async () => {
        try {
            const res = await fetch('js/app.json')
            const data = await res.json()
            console.log(data);
            pintarCardsLigera(data)
    
        } catch (error) {
            console.log(error)
        }
    }
    
    
    const pintarCardsLigera = data => {
    
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
    
        
            let ligera = data.filter(function (el) {
                return (el.categoria == 4)
            })
            console.log(ligera)
    
            ligera.forEach(producto => {
                // console.log(producto);
                templateCardLigera.querySelector('h5').textContent = producto.title
                templateCardLigera.querySelector('img').setAttribute('src', producto.imagen)
                templateCardLigera.querySelector('.btn-warning').dataset.id = producto.id
    
                templateCardLigera.querySelectorAll('p')[0].textContent = producto.detalle.textoUno
                templateCardLigera.querySelectorAll('p')[1].textContent = producto.detalle.textoDos
                templateCardLigera.querySelectorAll('p')[2].textContent = producto.detalle.textoTres
                templateCardLigera.querySelectorAll('p')[3].textContent = producto.detalle.textoCuatro
                // templateCardLigera.querySelectorAll('p')[4].textContent = producto.detalle.textoCinco
                // templateCardLigera.querySelectorAll('p')[5].textContent = producto.detalle.textoSeis
    
    
    
                for (let i = 0; i < templateCardLigera.querySelectorAll('p').length; i++) {
    
                    // templateCardLigera.querySelectorAll('p')[i].style.visibility = 'none'
                    templateCardLigera.querySelectorAll('p')[i].style.height = '0px'
                    templateCardLigera.querySelectorAll('p')[i].style.display = 'none'
    
                }
                const clone = templateCardLigera.cloneNode(true)
                fragmentligera.appendChild(clone)
            });
            cardsLigera.appendChild(fragmentligera)
        
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
    const capturaDatosLigera = e => {
        // console.log(e.target)
    
        if (e.target.classList.contains('btn-warning')) {
            tomarDatosLigera(e.target.parentElement)
        }
        // e.stopPropagation()
    }
    
    const tomarDatosLigera = obejeto => {
    
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
        pintarProductosLigera();
    }
    
    const pintarProductosLigera = () => {
    
        // // console.log(carrito);
        itemsLigera.innerHTML = ''
        itemsLigera.style.display = 'block'
    
        // items.style.zIndex = '999999'    
        itemsLigera.style.position = 'fixed'
        fondoModalLigera.style.background = "rgba(0,0,0,0.8)"
        fondoModalLigera.style.width = '100vw'
        fondoModalLigera.style.height = '100vh'
        fondoModalLigera.style.display = 'block'
        fondoModalLigera.style.zIndex = '99'
        fondoModalLigera.style.position = 'fixed'
    
    
        Object.values(carrito).forEach(producto => {
            templateModalLigera.querySelector('h5').textContent = producto.title
            templateModalLigera.querySelector('img').setAttribute('src', producto.imagen)
            templateModalLigera.querySelectorAll('p')[0].textContent = producto.textoUno
            templateModalLigera.querySelectorAll('p')[1].textContent = producto.textoDos
            templateModalLigera.querySelectorAll('p')[2].textContent = producto.textoTres
            templateModalLigera.querySelectorAll('p')[3].textContent = producto.textoCuatro
            // templateModalLigera.querySelectorAll('p')[4].textContent =  producto.textoCinco
            // templateModalLigera.querySelectorAll('p')[5].textContent =  producto.textoSeis
            const clone = templateModalLigera.cloneNode(true)
            fragmentligera.appendChild(clone)
        })
        itemsLigera.appendChild(fragmentligera)
    }
    
    
    fondoModalLigera.addEventListener('click', function () {
        carrito = {}
        console.log(this);
        pintarProductosLigera()
        itemsLigera.innerHTML = ''
    
        fondoModalLigera.style.background = "none"
        fondoModalLigera.style.width = '0'
        fondoModalLigera.style.height = '0'
        fondoModalLigera.style.display = 'none'
        fondoModalLigera.style.position = 'relative'
        fondoModalLigera.style.zIndex = '0'
    
    })
