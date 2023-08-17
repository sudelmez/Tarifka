/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

export default function WebViewPage({ route }) {
    const { url } = route.params;
    const [embedUrl, setEmbedUrl] = useState('');

    useEffect(() => {
        console.log(url);
        setEmbedUrl(url);
    }, [url]);

    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: embedUrl }}
                style={{ marginTop: 20 }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                onError={(syntheticEvent) => {
                    const { nativeEvent } = syntheticEvent;
                    console.error('WebView error: ', nativeEvent);
                }}
            />
        </View>
    );
}
