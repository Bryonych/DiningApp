import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {colours} from "../styles/settings";
import { getHeaderTitle } from '@react-navigation/elements';
import { styles } from '../styles/styles';

export function HeaderTitle() {
    return (
        <ImageBackground source={require('../assets/images/headerBackground3.jpg')} style={styles.headerImage}>
             <View style={styles.header}>
                 <Text style={styles.headerText}>Easy Order</Text>
             </View>
        </ImageBackground>
    )
}


