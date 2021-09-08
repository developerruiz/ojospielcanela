const cardsPlataforma = document.getElementById('cards_plataforma')
// const templateCardPlataforma = document.getElementById('template-card').content
const templateCardPlataforma = document.getElementById('template-card-pltaforma').content
const templateModalPlataforma = document.getElementById('template-modal-plataforma').content
const itemsPlataforma = document.getElementById('items_plataforma')
const fondoModalPlataforma = document.getElementById('fondo_plataforma')

const fragment_plataforma = document.createDocumentFragment();




document.addEventListener('DOMContentLoaded', () => {
    fetchDataPlataforma();
})

cardsPlataforma.addEventListener('click', e => {
    // addCarrito(e)
    capturaDatosPlataforma(e)
})

const fetchDataPlataforma = async () => {
    try {
        const res = await fetch('js/app.json')
        const data = await res.json()
        console.log(data);
        pintarCardsPlataforma(data)

    } catch (error) {
        console.log(error)
    }
}


const pintarCardsPlataforma = data => {

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


    let montacargas = data.filter(function (el) {
        return (el.categoria == 2)
    })
    console.log(montacargas)

    montacargas.forEach(producto => {
        // console.log(producto);
        templateCardPlataforma.querySelector('h5').textContent = producto.title
        templateCardPlataforma.querySelector('img').setAttribute('src', producto.imagen)
        templateCardPlataforma.querySelector('.btn-warning').dataset.id = producto.id

        templateCardPlataforma.querySelectorAll('p')[0].textContent = producto.detalle.textoUno
        templateCardPlataforma.querySelectorAll('p')[1].textContent = producto.detalle.textoDos
        templateCardPlataforma.querySelectorAll('p')[2].textContent = producto.detalle.textoTres
        templateCardPlataforma.querySelectorAll('p')[3].textContent = producto.detalle.textoCuatro
        // templateCardPlataforma.querySelectorAll('p')[4].textContent = producto.detalle.textoCinco
        // templateCardPlataforma.querySelectorAll('p')[5].textContent = producto.detalle.textoSeis



        for (let i = 0; i < templateCardPlataforma.querySelectorAll('p').length; i++) {

            // templateCardPlataforma.querySelectorAll('p')[i].style.visibility = 'none'
            templateCardPlataforma.querySelectorAll('p')[i].style.height = '0px'
            templateCardPlataforma.querySelectorAll('p')[i].style.display = 'none'


        }
        const clone = templateCardPlataforma.cloneNode(true)
        fragment_plataforma.appendChild(clone)
    });
    cardsPlataforma.appendChild(fragment_plataforma)

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
const capturaDatosPlataforma = e => {
    // console.log(e.target)

    if (e.target.classList.contains('btn-warning')) {
        tomarDatosPlataforma(e.target.parentElement)
    }
    // e.stopPropagation()
}

const tomarDatosPlataforma = obejeto => {

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
    pintarProductosPlataforma();
}

const pintarProductosPlataforma = () => {

    // // console.log(carrito);
    itemsPlataforma.innerHTML = ''
    itemsPlataforma.style.display = 'block'

    // items.style.zIndex = '999999'    
    itemsPlataforma.style.position = 'fixed'
    fondoModalPlataforma.style.background = "rgba(0,0,0,0.8)"
    fondoModalPlataforma.style.width = '100vw'
    fondoModalPlataforma.style.height = '100vh'
    fondoModalPlataforma.style.display = 'block'
    fondoModalPlataforma.style.zIndex = '99'
    fondoModalPlataforma.style.position = 'fixed'


    Object.values(carrito).forEach(producto => {
        templateModalPlataforma.querySelector('h5').textContent = producto.title
        templateModalPlataforma.querySelector('img').setAttribute('src', producto.imagen)
        templateModalPlataforma.querySelectorAll('p')[0].textContent = producto.textoUno
        templateModalPlataforma.querySelectorAll('p')[1].textContent = producto.textoDos
        templateModalPlataforma.querySelectorAll('p')[2].textContent = producto.textoTres
        templateModalPlataforma.querySelectorAll('p')[3].textContent = producto.textoCuatro
        // templateModalPlataforma.querySelectorAll('p')[4].textContent =  producto.textoCinco
        // templateModalPlataforma.querySelectorAll('p')[5].textContent =  producto.textoSeis
        const clone = templateModalPlataforma.cloneNode(true)
        fragment_plataforma.appendChild(clone)
    })
    itemsPlataforma.appendChild(fragment_plataforma)
}


fondoModalPlataforma.addEventListener('click', function () {
    carrito = {}
    console.log(this);
    pintarProductosPlataforma()
    itemsPlataforma.innerHTML = ''

    fondoModalPlataforma.style.background = "none"
    fondoModalPlataforma.style.width = '0'
    fondoModalPlataforma.style.height = '0'
    fondoModalPlataforma.style.display = 'none'
    fondoModalPlataforma.style.position = 'relative'
    fondoModalPlataforma.style.zIndex = '0'

})