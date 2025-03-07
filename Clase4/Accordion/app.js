document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '1479ffffa506a41bde7aef1da1bbe63e'; // Reemplaza 'TU_API_KEY' con tu clave de la API de TMDb
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;

    const accordionContainer = document.getElementById('accordion');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const movies = data.results.slice(0, 40); // Obtener solo 40 registros
            let accordionHtml = '';

            movies.forEach(movie => {
                accordionHtml += `
                    <div class="accordion-item">
                        <div class="accordion-title">
                            ${movie.title}
                            <span>+</span>
                        </div>
                        <div class="accordion-content">
                            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                            <p><strong>Título:</strong> ${movie.title}</p>
                            <p><strong>Fecha de lanzamiento:</strong> ${movie.release_date}</p>
                            <p><strong>Resumen:</strong> ${movie.overview}</p>
                        </div>
                    </div>
                `;
            });

            accordionContainer.innerHTML = accordionHtml;

            const accordionTitles = document.querySelectorAll('.accordion-title');
            accordionTitles.forEach(title => {
                title.addEventListener('click', function() {
                    const content = this.nextElementSibling;
                    const isActive = content.classList.contains('show');

                    document.querySelectorAll('.accordion-content.show').forEach(element => {
                        element.classList.remove('show');
                        element.style.maxHeight = null;
                    });

                    if (!isActive) {
                        content.classList.add('show');
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                });
            });
        })
        .catch(error => console.error('Error:', error));
});
