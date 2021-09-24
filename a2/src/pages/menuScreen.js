import * as React from "react";
import { useContext, useEffect, useCallback } from "react";
import {RestaurantAnswer} from "../dataUitls/restaurant";
import {ButtonBar} from "../components/buttonGroup";
import {styles} from "../styles/styles";
import {MenuItem} from "../components/menuItem";
import {ScrollView, SafeAreaView, View} from "react-native";
import {ShoppingAnswer} from "../buisinessUtils/shoppingCart";
import { ShoppingCart } from "../components/shoppingCartDisplay";

/* Displays menu items and shopping cart on the screen */

export const MenuScreen = ({route, navigation}) => {
    const { foodMenu, drinksMenu } = useContext(RestaurantAnswer);
    const { type } = route.params;
    const { addItem } = useContext(ShoppingAnswer);

    //retrieve menu from data layer
    let currentMenu = []
    useEffect(() => {
        currentMenu = foodMenu;
    }, [foodMenu])


    const callback = (item, quantity) => {
        addItem(item, quantity);
    };

    //Display food or drink menu
    if (type == 'food') {
        console.disableYellowBox = true;
        return (
            <View style={styles.container}>
                <View style={styles.menuContainer}>
                    <ShoppingCart/>
                    <SafeAreaView style={{flex: 1}}>
                        <View style={styles.listBox}>
                            <ScrollView>
                                {
                                    foodMenu.map((item, i) => {
                                        return <MenuItem item={item} key={i} parentCallback={callback}/>
                                    })
                                }
                            </ScrollView>
                        </View>
                    </SafeAreaView>
                </View>
                <ButtonBar/>
            </View>
        )
    }
    else {
        console.disableYellowBox = true;
        return (
            <View style={styles.container}>
                <View style={styles.menuContainer}>
                    <ShoppingCart/>
                    <SafeAreaView style={{flex: 1}}>
                        <View style={styles.listBox}>
                            <ScrollView>
                                {
                                    drinksMenu.map((item, i) => {
                                        return <MenuItem item={item} key={i} parentCallback={callback}/>
                                    })
                                }
                            </ScrollView>
                        </View>
                    </SafeAreaView>
                </View>
                <ButtonBar/>
            </View>
        )
    }

}
