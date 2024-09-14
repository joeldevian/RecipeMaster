document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const favoritesList = document.getElementById('favoritesList');
    const shareForm = document.getElementById('shareForm');
    const recipeName = document.getElementById('recipeName');
    const recipeDescription = document.getElementById('recipeDescription');

    searchButton.addEventListener('click', () => {
        alert(`Buscando recetas para: ${searchInput.value}`);
    });

    shareForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = recipeName.value;
        const description = recipeDescription.value;
        const recipeItem = document.createElement('div');
        recipeItem.className = 'recipe-item';
        recipeItem.innerHTML = `<h3>${name}</h3><p>${description}</p>`;
        favoritesList.appendChild(recipeItem);
        recipeName.value = '';
        recipeDescription.value = '';
    });
});
