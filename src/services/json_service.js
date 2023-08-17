/* eslint-disable prettier/prettier */

const JsonMealService = {
    extractMealCategories: (jsonData) => {
        return jsonData.meals && Array.isArray(jsonData.meals) ? jsonData.meals.map(meal => meal.strCategory) : [];
    },
    extractMealRecipes: (jsonData) => {
        return jsonData.meals && Array.isArray(jsonData.meals)
        ? jsonData.meals.map(meal => ({
            id: meal.idMeal,
            name: meal.strMeal,
          }))
        : [];
        },
    extractCategoriesInfo: (jsonData) => {
        return jsonData.categories && Array.isArray(jsonData.categories)
          ? jsonData.categories.map(category => ({
                idCategory: category.idCategory,
                strCategory: category.strCategory,
                strCategoryThumb: category.strCategoryThumb,
                strCategoryDescription: category.strCategoryDescription,
            }))
          : [];
    },
    extractMealDetails: (jsonData) => {
        if (jsonData.meals && Array.isArray(jsonData.meals) && jsonData.meals.length > 0) {
            const meal = jsonData.meals[0]; // Taking the first meal as the array suggests there's only one meal per lookup.
            return {
                id: meal.idMeal,
                name: meal.strMeal,
                category: meal.strCategory,
                area: meal.strArea,
                instructions: meal.strInstructions,
                image: meal.strMealThumb,
                tags: meal.strTags ? meal.strTags.split(',') : [],
                youtubeLink: meal.strYoutube,
                ingredients: Array.from({ length: 20 }, (_, i) => {
                    if (meal[`strIngredient${i + 1}`] && meal[`strIngredient${i + 1}`].trim() !== '') {
                        return {
                            ingredient: meal[`strIngredient${i + 1}`],
                            measure: meal[`strMeasure${i + 1}`],
                        };
                    }
                    return null;
                }).filter(Boolean),
                source: meal.strSource,
            };
        } else {
            return null;
        }
    },
};


export default JsonMealService;
