// create map
const map = L.map('mapid').setView([-23.2809389, -45.9021421], 15);

// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add markers

map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remover icon
    marker && map.removeLayer(marker);

    // add  icon layer
    marker = L.marker([lat, lng], {icon: icon}).addTo(map);
})

// adicionar o campo de fotos

function addPhotoField() {

    // pegar o container de fotos #images
    const container = document.querySelector('#images')

    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // verificar se o campo está vazio. Se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0];

    if (input.value === "") {
        return
    }

    input.value = "";

    //  limpar o campo antes de adicionar ao container de imagens
    newFieldContainer.children[0].value = "";

    // adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer);
}

function deleteField(event) {

    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    let fieldsLength = fieldsContainer.length - 1;
    console.log(fieldsLength)

    if (fieldsLength < 1) {
        // limpar o valor do campo
        span.parentNode.children[0].value = "";
        return
    }

    // deletar o campo
    span.parentNode.remove();
}

// selecionar sim ou não
function toggleSelect(event) {

    // retirar a classe .active dos botões
    document.querySelectorAll('.button-select button')
        .forEach(button => button.classList.remove('active'));

    // colocar a classe .active no botão clicado
    const button = event.currentTarget;
    button.classList.add('active')

    // atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value;
}