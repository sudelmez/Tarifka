/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Category_list from '../../component/categoryList/category_list';
import MealService from '../../services/data_service';
import styles from './recipes.style';

function RecipesView({ route }) {
    const { item } = route.params;
    useEffect(() => {
        const fetchData = async () => {
            const data = await MealService.filterByCategory(item);
            console.log('Transformed Data:', data);

        };
        fetchData();
    }, [item]);
    return <SafeAreaView style={styles.container}>
        <Category_list fetchFunction={() => MealService.filterByCategory(item)} navigationString={'RECIPE DETAIL'} />

    </SafeAreaView>;
}

export default RecipesView;
