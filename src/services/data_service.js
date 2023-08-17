/* eslint-disable prettier/prettier */
// MealService.js

import axios from 'axios';
import JsonMealService from './json_service';
import MealDBAPI from './data_urls.js';

const api = new MealDBAPI();

const MealService = {
    getCategoriesInfo: async () => {
        try {
            const response = await axios.get(api.getCategoryURL);
            return JsonMealService.extractCategoriesInfo(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    },

    filterByCategory: async (category) => {
        try {
            const response = await axios.get(api.getFilterURL(category));
            console.log('Raw API Response:', response.data);
            return JsonMealService.extractMealRecipes(response.data);
        } catch (error) {
            console.error(`Error fetching meals for category ${category}:`, error);
            throw error;
        }
    },

    getList: async () => {
        try {
            const response = await axios.get(api.getListURL());
            return JsonMealService.extractMealCategories(response.data);
        } catch (error) {
            console.error('Error fetching list:', error);
            throw error;
        }
    },

    lookupByID: async (id) => {
        try {
            const response = await axios.get(api.getLookupURL(id));
            return JsonMealService.extractMealDetails(response.data);
        } catch (error) {
            console.error(`Error fetching meal with id ${id}:`, error);
            throw error;
        }
    },
};

export default MealService;
