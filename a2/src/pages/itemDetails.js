import * as React from "react";
import { useContext, useEffect } from "react";
import {RestaurantAnswer} from "../utils/restaurant";
import {Button} from "react-native-elements";
import {styles} from "../styles/styles";
import {View} from 'react-native';
import {EnlargeMenuItem} from "../components/menuItem";

export const ItemDetailsScreen = ({route, navigation}) => {
    const { type } = route.params;

    return (
        <View style={styles.container}>
            <EnlargeMenuItem />
        </View>
    )
}
