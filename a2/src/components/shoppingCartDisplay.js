import React, {useState, createContext, useEffect, useContext, useRef} from 'react';
import {ShoppingAnswer} from "../utils/shoppingCart";
import { View, Image, Text } from "react-native";
import {styles} from "../styles/styles";
import {Button} from "react-native-elements";

export function ShoppingCart ({navigation}) {
    const { items }  = useContext(ShoppingAnswer);
    const [ number, setNumber] = useState(0);
    //const number = useRef(0);

    useEffect(() => {
        setNumber(items.length);
    }, []);
    useEffect(() => {
        console.log(number)
    }, [items]);

    return (
        <View style={styles.shoppingCart}>
            <Image style={styles.cartImage} source={require('../assets/images/cup.jpg')}/>
            <View style={{flexDirection: 'column'}}>
                <Text style={styles.instructionText}>{number} Items selected</Text>
                <Button
                    titleStyle={styles.buttonTitleStyle}
                    buttonStyle={styles.cartButton}
                    title="Place Order"
                    onPress={() => {
                        navigation.navigate('OrderDetails');
                    }
                    }
                />
            </View>
        </View>
    )

}
