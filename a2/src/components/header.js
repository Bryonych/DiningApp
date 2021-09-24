import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import { colours, images } from "../styles/settings";
import { styles } from '../styles/styles';
import React, {useState, createContext, useEffect, useRef, useContext} from 'react';
import { RestaurantAnswer } from '../dataUitls/restaurant';

/* Creates a header image based on the current state of the restaurant in the data layer*/

export function HeaderTitle() {

    const { header } = useContext(RestaurantAnswer);
    let image;
    useEffect(() => {
        image = header;
    }, [header])

    if (header != null) {
        if (header == 'petesHeader') {
            return (
                <ImageBackground source={images.headers.petesHeader} style={styles.headerImage}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}></Text>
                    </View>
                </ImageBackground>
            )
        }
    }

    return (
        <ImageBackground source={images.headers.homeHeader} style={styles.headerImage}>
            <View style={styles.header}>
                <Text style={styles.headerText}></Text>
            </View>
        </ImageBackground>
    )
}


