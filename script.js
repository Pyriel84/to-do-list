// Variables simples
const input = document.querySelector('.input');
const addButton = document.querySelector('.addButton');
const todoList = document.querySelector('.todoList');
const toDos = [];

// Fonctions
function displayToDos() {
    // Vider la liste avant de la recréer
    todoList.innerHTML = '';

    // Gérer la visibilité du bouton "Vider la liste"
    if (toDos.length > 0) {
        controls.style.display = 'block';
    } else {
        controls.style.display = 'none';
    }
    
    // Parcourir tous les éléments et les afficher
    toDos.forEach((element, index) => {
        const newElement = document.createElement('li');
        newElement.innerHTML = `${element} <button onclick="removeToDoFromArray(${index})">Supprimer</button>`;
        todoList.appendChild(newElement);
    });
}

function addToDoToArray() {
    if (input.value.trim() !== '') {
        toDos.push(input.value.trim());
        input.value = ''; // vider l'input après l'ajout
        displayToDos(); // Réafficher la liste mise à jour
    }
}

function removeToDoFromArray(index) {
    if (index >= 0 && index < toDos.length) {
        toDos.splice(index, 1);
        displayToDos(); // Réafficher la liste mise à jour
    }
}

function emptyList() {
    todoList.innerHTML = '';
    toDos.length = 0; // vider l'array
    displayToDos(); // Réafficher (liste vide)
}

// Event listeners
addButton.addEventListener('click', () => {
    addToDoToArray();
});

// Permettre d'ajouter avec la touche Entrée
input.addEventListener('keypress', (element) => {
    if (element.key === 'Enter') {
        addToDoToArray();
    }
});

// Affichage initial (liste vide)
displayToDos();
