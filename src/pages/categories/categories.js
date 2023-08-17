/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView } from 'react-native';

import Category_list from '../../component/categoryList/category_list';
import MealService from '../../services/data_service';
import styles from './categories.style';


function CategoriesView() {
    return <SafeAreaView style={styles.container}>
        <Category_list fetchFunction={MealService.getList} navigationString={'RECIPES'}/>
    </SafeAreaView>;
}

export default CategoriesView;
