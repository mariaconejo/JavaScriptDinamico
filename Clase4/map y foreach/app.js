const listItems = document.querySelectorAll('#myList li');
// Selecciona todos los elementos <li> dentro del <ul> con id "myList"

listItems.forEach(function (item) {
    item.style.backgroundColor = 'lightblue';
    item.style.fontSize = '45px';
    // Cambia el color de fondo de cada elemento <li>
});


const names = ['María', 'Juan', 'Ana', 'Carlos','Mariana']; // Array de nombres

const array = names.map(function(name) {
    const li = document.createElement('li'); // Crea un nuevo elemento <li>
    li.textContent = name; // Establece el texto del elemento <li>
    return li; // Retorna el elemento <li>
});

const nameList = document.getElementById('nameList'); 
// Selecciona el <ul> con id "nameList"

array.forEach(function(item) {
    nameList.appendChild(item); // Añade cada <li> al <ul>
});