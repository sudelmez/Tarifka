/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardComponent from '../../component/card/card';

const Category_list = ({ fetchFunction, navigationString }) => {
    const [list, setList] = useState([]);
    const navigation = useNavigation();


    const renderItems = ({ item }) => {
        const handlePress = () => {
            console.log(item);
            navigation.navigate(navigationString, { item });
        };
        return (
            <CardComponent onPress={handlePress} title={item.name ? item.name : item} />
        );
    };

    const handleFetchCategories = useCallback(async () => {
        try {
            const result = await fetchFunction();
            if (navigationString === 'DETAIL') {
                const recipeNames = result.map(recipe => recipe.name);
                setList(recipeNames);
            } else { setList(result); }

        } catch (error) {
            console.error('Failed to fetch categories:', error);
        }
    }, [fetchFunction, navigationString]);

    useEffect(() => {
        handleFetchCategories();
    }, [handleFetchCategories]);




    return (
        <FlatList
            data={list}
            renderItem={renderItems}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

export default Category_list;
