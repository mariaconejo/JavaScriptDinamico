document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10'; // URL de la API de TheCatAPI
    const getCatsBtn = document.getElementById('get-cats-btn');
    const catContainer = document.getElementById('cat-container');

    // Función para obtener datos de la API
    const fetchCatsData = () => {
        return fetch(apiUrl)
            .then(response => {
                if (!response.ok)  { // SI NO ESTA BIEN POR EL ! QUE SIGNIFICA NO
                    throw new Error('Network response was not ok');
                }
                return response.json();
            });
    };

    // Función para mostrar las imágenes en la página
    const displayCats = (cats) => {
        catContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas imágenes
        cats.forEach(cat => {
            const catItem = document.createElement('div');
            catItem.className = 'cat-item';
            const catImg = document.createElement('img');
            catImg.src = cat.url;
            catItem.appendChild(catImg);
            catContainer.appendChild(catItem);
        });
    };

    // Manejar el evento de clic del botón
    getCatsBtn.addEventListener('click', () => {
        fetchCatsData()
            .then(data => {
                displayCats(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                catContainer.textContent = 'Hubo un problema al obtener las imágenes.';
            });
    });
});
