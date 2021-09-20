import React, { useContext, useEffect, useCallback } from "react";
import {ShoppingAnswer} from "../utils/shoppingCart";
import { styles } from '../settings/styles';
import { View, Text } from "react-native";
import CheckboxList from 'rn-checkbox-list';
import {MenuItem} from "../components/menuItem";

export const OrderDetailsScreen = ({navigation}) => {
    const { items, removeItem, itemNames } = useContext(ShoppingAnswer);


    return (
        <View styles={styles.container}>
            <View styles={styles.orderBox}>
                <Text style={styles.instructionText}>Order Details:</Text>
                <CheckboxList
                    listItems={itemNames}
                    checkboxProp={{boxType: 'square'}}
                />
            </View>

        </View>
    )
}
