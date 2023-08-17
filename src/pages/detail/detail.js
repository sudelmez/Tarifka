/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import MealService from '../../services/data_service';
import styles from './detail.style';
import InfoCardComponent from '../../component/recipeCard/recipeCard';
import ButtonCustom from '../../component/button/custom_button';
import { useNavigation } from '@react-navigation/native';


function DetailView({ route }) {
    const { item } = route.params;
    const [food, setFood] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            const data = await MealService.lookupByID(item.id);
            setFood(data);
        };
        fetchData();
    }, [item]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {food && (
                    <View>
                        <InfoCardComponent
                            title={food.name}
                            image={food.image}
                            description={food.instructions}
                        />
                        <ButtonCustom title="Watch Now!" onPress={() => navigation.navigate('WEB', { url: food.youtubeLink })} />
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );

}

export default DetailView;
