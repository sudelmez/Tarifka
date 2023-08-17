/* eslint-disable prettier/prettier */

class MealDBAPI {
    constructor() {
        this.API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';
        this.ENDPOINTS = {
            CATEGORIES: 'categories.php',
            FILTER: 'filter.php?c=',
            LIST: 'list.php?c=list',
            LOOKUP: 'lookup.php?i=',
        };
    }

    getCategoryURL() {
        return `${this.API_BASE_URL}${this.ENDPOINTS.CATEGORIES}`;
    }

    getFilterURL(category) {
        return `${this.API_BASE_URL}${this.ENDPOINTS.FILTER}${category}`;
    }

    getListURL() {
        return `${this.API_BASE_URL}${this.ENDPOINTS.LIST}`;
    }

    getLookupURL(id) {
        return `${this.API_BASE_URL}${this.ENDPOINTS.LOOKUP}${id}`;
    }
}

export default MealDBAPI;
