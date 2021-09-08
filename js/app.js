const cards = document.getElementById('cards')
const templateCard = document.getElementById('template-card').content
// const templateCard2 = document.getElementById('template-card-2').content
const templateModal = document.getElementById('template-modal').content
const items = document.getElementById('items')
const fragment = document.createDocumentFragment();
const fondoModal = document.getElementById('fondo')
let lista = document.querySelectorAll('.lista li')
let ventana = document.querySelector('body')
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

cards.addEventListener('click', e => {
    // addCarrito(e)
    capturaDatos(e)
})

const fetchData = async () => {
    try {
        const res = await fetch('js/app.json')
        const data = await res.json()
        // console.log(data);
        pintarCards(data)

    } catch (error) {
        console.log(error)
    }
}

const pintarCards = data => {

    const opcion1 = () => {
        let maquinariaPesada = data.filter(function (el) {
            return (el.categoria == 1)
        })
        console.log(maquinariaPesada)

        maquinariaPesada.forEach(producto => {
       
            templateCard.querySelector('h5').textContent = producto.title
            templateCard.querySelector('img').setAttribute('src', producto.imagen)
            templateCard.querySelector('.btn-warning').dataset.id = producto.id
            templateCard.querySelectorAll('p')[0].textContent = producto.detalle.textoUno
            templateCard.querySelectorAll('p')[1].textContent = producto.detalle.textoDos
            templateCard.querySelectorAll('p')[2].textContent = producto.detalle.textoTres
            templateCard.querySelectorAll('p')[3].textContent = producto.detalle.textoCuatro
            templateCard.querySelectorAll('p')[4].textContent = producto.detalle.textoCinco
            templateCard.querySelectorAll('p')[5].textContent = producto.detalle.textoSeis
            templateCard.querySelectorAll('p')[6].textContent = producto.detalle.textoSiete

            for (let i = 0; i < templateCard.querySelectorAll('p').length; i++) {

                templateCard.querySelectorAll('p')[i].style.height = '0px'
                templateCard.querySelectorAll('p')[i].style.display = 'none'


            }
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
        });
        cards.appendChild(fragment)
    }
    const opcion2 = () => {
        let montacargas = data.filter(function (el) {
            return (el.categoria == 2)
        })
        console.log(montacargas)

        montacargas.forEach(producto => {

            templateCard2.querySelector('h5').textContent = producto.title
            templateCard2.querySelector('img').setAttribute('src', producto.imagen)
            templateCard2.querySelector('.btn-warning').dataset.id = producto.id

            templateCard2.querySelectorAll('p')[0].textContent = producto.detalle.textoUno
            templateCard2.querySelectorAll('p')[1].textContent = producto.detalle.textoDos
            templateCard2.querySelectorAll('p')[2].textContent = producto.detalle.textoTres
            templateCard2.querySelectorAll('p')[3].textContent = producto.detalle.textoCuatro
            templateCard2.querySelectorAll('p')[4].textContent = producto.detalle.textoCinco
            templateCard2.querySelectorAll('p')[5].textContent = producto.detalle.textoSeis
            templateCard2.querySelectorAll('p')[6].textContent = producto.detalle.textoSiete
            

            for (let i = 0; i < templateCard2.querySelectorAll('p').length; i++) {

                // templateCard2.querySelectorAll('p')[i].style.visibility = 'none'
                templateCard2.querySelectorAll('p')[i].style.height = '0px'
                templateCard2.querySelectorAll('p')[i].style.display = 'none'


            }
            const clone = templateCard2.cloneNode(true)
            fragment.appendChild(clone)
        });
        cards.appendChild(fragment)
    }
  

    opcion1()


}
const capturaDatos = e => {
    // console.log(e.target)

    if (e.target.classList.contains('btn-warning')) {
        tomarDatos(e.target.parentElement)
    }
    // e.stopPropagation()
}

const tomarDatos = obejeto => {

    console.log(obejeto);

    const producto = {
        imagen: obejeto.querySelector('img').getAttribute('src', obejeto),
        id: obejeto.querySelector('.btn-warning').dataset.id,
        title: obejeto.querySelector('h5').textContent,
        textoUno: obejeto.querySelectorAll('p')[0].textContent,
        textoDos: obejeto.querySelectorAll('p')[1].textContent,
        textoTres: obejeto.querySelectorAll('p')[2].textContent,
        textoCuatro: obejeto.querySelectorAll('p')[3].textContent,
        textoCinco: obejeto.querySelectorAll('p')[4].textContent,
        textoSeis: obejeto.querySelectorAll('p')[5].textContent,
        textoSiete: obejeto.querySelectorAll('p')[6].textContent,
    }

    console.log(producto);

    carrito[producto.id] = {
        ...producto
    }
    pintarProductos();
}

const pintarProductos = () => {

    items.innerHTML = ''
    items.style.display = 'block'
    items.style.position = 'fixed'
    fondoModal.style.background = "rgba(0,0,0,0.8)"
    fondoModal.style.width = '100vw'
    fondoModal.style.height = '100vh'
    fondoModal.style.display = 'block'
    fondoModal.style.zIndex = '99'
    fondoModal.style.position = 'fixed'


    Object.values(carrito).forEach(producto => {
        templateModal.querySelector('h5').textContent = producto.title
        templateModal.querySelector('img').setAttribute('src', producto.imagen)
        templateModal.querySelectorAll('p')[0].textContent = producto.textoUno
        templateModal.querySelectorAll('p')[1].textContent = producto.textoDos
        templateModal.querySelectorAll('p')[2].textContent = producto.textoTres
        templateModal.querySelectorAll('p')[3].textContent = producto.textoCuatro
        templateModal.querySelectorAll('p')[4].textContent =  producto.textoCinco
        templateModal.querySelectorAll('p')[5].textContent =  producto.textoSeis
        templateModal.querySelectorAll('p')[6].textContent =  producto.textoSiete

        const clone = templateModal.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}


fondoModal.addEventListener('click', function () {
    carrito = {}
    // console.log(this);
    // pintarProductos()
    // items.innerHTML = ''
    fondoModal.style.background = "none"
    fondoModal.style.width = '0'
    fondoModal.style.height = '0'
    fondoModal.style.display = 'none'
    fondoModal.style.position = 'relative'
    fondoModal.style.zIndex = '0'
    
})