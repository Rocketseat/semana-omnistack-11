import React from "react";
import {useNavigation, useRoute} from '@react-navigation/native';
import { WebView } from 'react-native-webview';

    export default function MoreInfo(){
        const navigation = useNavigation();
        const route = useRoute();
        const info = route.params.link_info;
        function navigateBack(){
            navigation.goBack();
    }

    return (

        <WebView style={{ flex: 1 }} source={{uri: info}} />
);

    } 