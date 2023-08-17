/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, View } from 'react-native';
import styles from './custom_button.style';

const ButtonCustom = (props) => {
    return (
        <View style={styles.container}>
            <Button style={styles.text} onPress={props.onPress} title={props.title} />
        </View>
    );
};

export default ButtonCustom;