/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

export default function WebViewPage({ route }) {
    const { url } = route.params;
    const [embedUrl, setEmbedUrl] = useState('');

    function convertToEmbedURL(youtubeURL) {
        if (!youtubeURL) {return null;}

        const videoId = youtubeURL.split('v=')[1];
        if (!videoId) {
            return null;
        }
        const ampersandPosition = videoId.indexOf('&');
        if (ampersandPosition !== -1) {
            return `https://www.youtube.com/embed/${videoId.substring(0, ampersandPosition)}`;
        }
        return `https://www.youtube.com/embed/${videoId}`;
    }

    useEffect(() => {
        console.log(url);
        const convertedUrl = convertToEmbedURL(url);
        if (convertedUrl) {
            setEmbedUrl(convertedUrl);
        }
    }, [url]);

    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: embedUrl }}
                style={{ marginTop: 20 }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
            />
        </View>
    );
}
