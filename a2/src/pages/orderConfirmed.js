import {styles} from "../styles/styles";
import {Button} from "react-native-elements";
import React from "react";
import {View, Text} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {colours} from '../styles/settings';

/* Displays confirmation of order message */

export const OrderConfirmedScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.orderConfirm}>
                <Text style={{fontSize: 40, fontWeight: 'bold', color: colours.darkGreen}}>Order Confirmed!</Text>
                <Text style={styles.instructionText}>Your food will be with you shortly. Enjoy your meal!</Text>
                <Button
                    buttonStyle={styles.modalButton}
                    titleStyle={styles.buttonTitleStyle}
                    title="OK"
                    onPress={() => {navigation.navigate('Home')}}
                />
            </View>
        </View>
    )
}
