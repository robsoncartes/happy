const options = {
    dragging: false,
    touch: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
// create map
const map = L.map('mapid', options).setView([-23.2809389, -45.9021421], 15);

// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create and add marker
L.marker([-23.2809389, -45.9021421], {icon: icon})
    .addTo(map);

/* image gallery */

function selectImage(event) {

    const button = event.currentTarget;

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    console.log(buttons);

    function removeActiveClass(button) {
        button.classList.remove('active');
    }

    buttons.forEach(removeActiveClass);

    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualiza o container de imagem
    imageContainer.src = image.src;
    button.classList.add('active');

    // selecionar a imagem clicada
    // atualizar o container de imagem
    // adicionar a classe .active para o botão que foi clicado


}
