/* eslint-disable prettier/prettier */
class Category {
    constructor(idCategory, strCategory, strCategoryThumb, strCategoryDescription) {
        this.idCategory = idCategory;
        this.strCategory = strCategory;
        this.strCategoryThumb = strCategoryThumb;
        this.strCategoryDescription = strCategoryDescription;
    }

    toString() {
        return `Category: ${this.strCategory}`;
    }
}
class Categories {
    constructor(categoriesData) {
        this.categories = categoriesData.categories.map(catData => new Category(
            catData.idCategory,
            catData.strCategory,
            catData.strCategoryThumb,
            catData.strCategoryDescription
        ));
    }

    getCategoryById(idCategory) {
        return this.categories.find(category => category.idCategory === idCategory);
    }

    getAllCategories() {
        return this.categories;
    }

    toString() {
        return `Categories: ${this.categories.map(cat => cat.strCategory).join(', ')}`;
    }
}
