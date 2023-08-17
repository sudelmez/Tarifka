/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './card.style';

const CardComponent = (props) => {
    const handlePress = () => {
        console.log('Kart tıklandı!');
        if (props.onPress) {props.onPress();}
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <Image source={{ uri: props.image }} style={styles.image} />
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CardComponent;
