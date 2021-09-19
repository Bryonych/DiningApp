import * as React from "react";
import { useContext, useEffect } from "react";
import {RestaurantAnswer} from "../utils/restaurant";
import {Button} from "react-native-elements";
import {styles} from "../styles/styles";
import {MenuItem} from "../components/menuItem";
import {ScrollView, SafeAreaView, View} from "react-native";
import {ShoppingAnswer} from "../utils/shoppingCart";


export const MenuScreen = ({route, navigation}) => {
    const { foodMenu, drinksMenu } = useContext(RestaurantAnswer);
    const { type } = route.params;
    const { addItem } = useContext(ShoppingAnswer);

    let currentMenu = []
    useEffect(() => {
        currentMenu = foodMenu;
    }, [foodMenu])

    const handleCallback = (item, quantity) => {
        addItem(item, quantity);
    }

    if (type == 'food') {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.listBox}>
                    <ScrollView>
                        {
                            foodMenu.map(<MenuItem parentCallback={handleCallback}/>, i => {
                                return <div key={i}></div>
                            })
                        }
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
    else {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.listBox}>
                    <ScrollView>
                        {
                            drinksMenu.map(MenuItem, i => {
                                return <div key={i}></div>
                            })
                        }
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }

}
