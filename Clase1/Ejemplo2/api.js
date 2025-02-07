document.addEventListener('DOMContentLoaded', () => {
    const userCard = document.getElementById('userCard');

    // URL de la API
    const apiURL = 'https://jsonplaceholder.typicode.com/users/1';

    // Obtener datos del usuario
    fetch(apiURL)
        .then(response => response.json())
        .then(user => {
            // Crear elementos
            const userImage = document.createElement('img');
            userImage.src = 'https://i.pravatar.cc/'; // Imagen de ejemplo
            userImage.alt = 'Foto de perfil';

            const userName = document.createElement('h2');
            userName.textContent = user.name;

            const userEmail = document.createElement('p');
            userEmail.textContent = `📧 ${user.email}`;

            const userPhone = document.createElement('p');
            userPhone.textContent = `📞 ${user.phone}`;

            // Agregar elementos a la tarjeta
            userCard.appendChild(userImage);
            userCard.appendChild(userName);
            userCard.appendChild(userEmail);
            userCard.appendChild(userPhone);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
            userCard.innerHTML = '<p>Error al cargar los datos del usuario.</p>';
        });
});
