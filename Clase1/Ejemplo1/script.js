
const boton = document.getElementById('miBoton');
const texto = document.getElementById('miTexto');
boton.addEventListener('click', () => {
    texto.style.color = texto.style.color === 'rgb(251, 230, 229)' ? 'rgb(175, 28, 67)' : 'rgb(251, 230, 229)';
});
