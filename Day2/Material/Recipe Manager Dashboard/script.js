// script.js

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const recipesContent = document.getElementById('recipes-content');
    const recipeSummary = document.getElementById('recipe-summary');

    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const title = searchInput.value.trim();
        if (title) {
            try {
                await fetchRecipes(title);
            } catch (error) {
                console.error('Error fetching recipe data:', error);
                alert('Failed to fetch recipe data. Please try again.');
            }
        }
    });

    const fetchRecipes = async (title) => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Recipe data fetch failed');

            const data = await response.json();
            if (data.meals === null) throw new Error('No recipes found');

            displayRecipes(data.meals);
            displaySummary(data.meals);
        } catch (error) {
            throw error;
        }
    };

    const displayRecipes = (recipes) => {
        recipesContent.innerHTML = '';
        recipes.forEach(recipe => {
            recipesContent.innerHTML += `
                <div class="recipe-card">
                    <img src="${recipe.strMealThumb}" alt="${recipe.strMeal} Image">
                    <h3>${recipe.strMeal}</h3>
                    <p>Category: ${recipe.strCategory}</p>
                    <p>Area: ${recipe.strArea}</p>
                </div>
            `;
        });
    };

    const displaySummary = (recipes) => {
        recipeSummary.innerHTML = '';
        const recipesByCategory = recipes.reduce((acc, recipe) => {
            acc[recipe.strCategory] = (acc[recipe.strCategory] || 0) + 1;
            return acc;
        }, {});

        recipeSummary.innerHTML = Object.entries(recipesByCategory)
            .map(([category, count]) => `<li>${category}: ${count}</li>`)
            .join('');

        const totalRecipes = recipes.length;
        const averageIngredients = Math.round(
            recipes.reduce((sum, recipe) => sum + Object.keys(recipe).filter(key => key.startsWith('strIngredient') && recipe[key]).length, 0) / totalRecipes
        );
        
        recipeSummary.innerHTML += `
            <li>Total Recipes: ${totalRecipes}</li>
            <li>Average Ingredients per Recipe: ${averageIngredients || '-'}</li>
        `;
    };
});
