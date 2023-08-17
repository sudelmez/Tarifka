/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './recipeCard.style';

const InfoCardComponent = ({ title, image, description }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

export default InfoCardComponent;
