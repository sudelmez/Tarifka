/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5, // Android için
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 18,
        margin: 10,
        fontWeight: 'bold',
    },
    description: {
        marginHorizontal: 10,
        marginBottom: 10,
    },
});

export default styles;
