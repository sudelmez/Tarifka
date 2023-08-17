/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', borderRadius: 20, margin: 10, padding: 10,flexDirection: 'row',
    },
    title: {
        padding: 10,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    image: {
        width: 40, // Görsel genişliği
        height: 40, // Görsel yüksekliği
        borderRadius: 20, // Görseli yuvarlak yap
    }
}
);
export default styles;