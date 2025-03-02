document.addEventListener("DOMContentLoaded", function() {
    // Cargar el archivo JSON con las imágenes
    fetch('images.json')
        .then(response => response.json())
        .then(data => {
            // Obtener el contenedor de la galería
            const galleryContainer = document.getElementById('gallery');
            
            // Recorrer los datos del JSON
            data.forEach(item => {
                // Crear un elemento <img> para cada imagen
                const imgElement = document.createElement('img');
                imgElement.src = item.src;   // Establecer la ruta de la imagen
                imgElement.alt = item.alt;   // Establecer el texto alternativo
                imgElement.classList.add('gallery-img'); // Agregar una clase para estilos adicionales

                // Agregar la imagen al contenedor de la galería
                galleryContainer.appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });

    // Inicializar el mapa centrado en Nueva York
    var map = L.map('map').setView([40.7128, -74.0060], 12); // Coordenadas de Nueva York y nivel de zoom

    // Agregar capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Agregar un marcador en Nueva York
    L.marker([40.7128, -74.0060]).addTo(map)
        .bindPopup('¡Estamos en Nueva York!')
        .openPopup();
});
