import * as React from "react";
import { useContext, useEffect, useCallback } from "react";
import {RestaurantAnswer} from "../utils/restaurant";
import {Button} from "react-native-elements";
import {styles} from "../styles/styles";
import {MenuItem} from "../components/menuItem";
import {ScrollView, SafeAreaView, View} from "react-native";
import {ShoppingAnswer} from "../utils/shoppingCart";
import { ShoppingCart } from "../components/shoppingCartDisplay";


export const MenuScreen = ({route, navigation}) => {
    const { foodMenu, drinksMenu } = useContext(RestaurantAnswer);
    const { type } = route.params;
    const { addItem } = useContext(ShoppingAnswer);

    let currentMenu = []
    useEffect(() => {
        currentMenu = foodMenu;
    }, [foodMenu])


    const callback = (item, quantity) => {
        addItem(item, quantity);
    };


    if (type == 'food') {
        return (
            <View style={styles.menuContainer}>
                <ShoppingCart/>
                <SafeAreaView style={{flex: 1}}>
                    <View style={styles.listBox}>
                        <ScrollView>
                            {
                                foodMenu.map(item => {
                                    return <MenuItem item={item} key={item.id} parentCallback={callback}/>
                                })
                            }
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
    else {
        return (
            <View style={styles.menuContainer}>
                <ShoppingCart/>
                <SafeAreaView style={{flex: 1}}>
                    <View style={styles.listBox}>
                        <ScrollView>
                            {
                                drinksMenu.map(item => {
                                    return <MenuItem item={item} key={item.id} parentCallback={callback}/>
                                })
                            }
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </View>
        )
    }

}
