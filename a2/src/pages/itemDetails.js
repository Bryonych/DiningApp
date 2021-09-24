import * as React from "react";
import { useContext, useEffect } from "react";
import {RestaurantAnswer} from "../dataUitls/restaurant";
import {Button} from "react-native-elements";
import {styles} from "../styles/styles";
import {View} from 'react-native';
import {EnlargeMenuItem} from "../components/menuItem";

/* Displays more information about a menu item */

export const ItemDetailsScreen = ({route, navigation}) => {
    const { type } = route.params;

    return (
        <View style={styles.container}>
            <EnlargeMenuItem />
        </View>
    )
}
