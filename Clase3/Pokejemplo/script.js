document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    const getPokemonBtn = document.getElementById('get-pokemon-btn');
    const pokemonContainer = document.getElementById('pokemon-container');

    // Función para obtener detalles de cada Pokémon
    const fetchPokemonDetails = (url) => {
        return fetch(url)
            .then(response => response.json());
    };

    // Función para obtener datos de la API
    const fetchPokemonData = () => {
        return fetch(apiUrl)
            .then(response => {
                if (!response.ok) { // NO ESTA BIEN POR ALGUNA RAZON
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Crear una promesa para cada URL de Pokémon
                const promises = data.results.map(pokemon => fetchPokemonDetails(pokemon.url));
                return Promise.all(promises);
            });
    };

    // Función para mostrar los datos en la página
    const displayPokemons = (pokemons) => {
        pokemonContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas tarjetas
        pokemons.forEach(pokemon => {
            const pokemonCard = document.createElement('div');
            pokemonCard.className = 'pokemon-card';

            const pokemonImg = document.createElement('img');
            pokemonImg.src = pokemon.sprites.front_default || 'https://via.placeholder.com/100'; // Imagen alternativa si no hay sprite
            pokemonCard.appendChild(pokemonImg);

            const pokemonName = document.createElement('h2');
            pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            pokemonCard.appendChild(pokemonName); 

            const pokemonType = document.createElement('p');
            pokemonType.textContent = `Tipo: ${pokemon.types.map(type => type.type.name).join(', ')}`;
            pokemonCard.appendChild(pokemonType); 
            const pokemonHeight = document.createElement('p');
            pokemonHeight.textContent = `Altura: ${pokemon.height / 10} m`; // La altura se da en decímetros
            pokemonCard.appendChild(pokemonHeight);

            const pokemonWeight = document.createElement('p');
            pokemonWeight.textContent = `Peso: ${pokemon.weight / 10} kg`; // El peso se da en hectogramos
            pokemonCard.appendChild(pokemonWeight);

            pokemonContainer.appendChild(pokemonCard);
        });
    };

    // Manejar el evento de clic del botón
    getPokemonBtn.addEventListener('click', () => {
        fetchPokemonData()
            .then(data => {
                displayPokemons(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                pokemonContainer.textContent = 'Hubo un problema al obtener los datos.';
            });
    });
});
