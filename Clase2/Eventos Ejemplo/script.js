const boton = document.getElementById("miBoton");

// Evento de clic (click)
boton.addEventListener("click", function() {
    alert("¡Has hecho clic en el botón!");
});

// Evento de carga de la página (load)
window.addEventListener("load", function() {
    console.log("La página se ha cargado completamente.");
    fetchRandomUser();
});

// Evento de teclado (keydown)
document.addEventListener("keydown", function(event) {
    console.log("Tecla presionada: " + event.key);
});

// Evento de mouse (mousemove)
document.addEventListener("mousemove", function(event) {
    console.log("Posición del mouse: X=" + event.clientX + ", Y=" + event.clientY);
});

// Evento de cambio en un campo de formulario (change)
document.getElementById("miInput").addEventListener("change", function() {
    alert("El valor del input ha cambiado.");
});

// Evento de envío de formulario (submit)
document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
    alert("Formulario enviado.");
});

// Evento de desplazamiento (scroll)
document.querySelector(".container").addEventListener("scroll", function() {
    console.log("Desplazamiento vertical en el contenedor: " + this.scrollTop);
});

// Evento de enfoque (focus)
document.getElementById("miInput").addEventListener("focus", function() {
    console.log("El input ha recibido el foco.");
});

// Función para obtener un usuario aleatorio de la API Random User
function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => { 
            const user = data.results[0];
            document.getElementById("userImage").src = user.picture.large;
            document.getElementById("userName").textContent = user.name.title +" "+user.name.first + " " + user.name.last;
            document.getElementById("userEmail").textContent = user.email;
            document.getElementById("userInfo").style.display = "block";
        })
        .catch(error => console.error('Error:', error));
}

