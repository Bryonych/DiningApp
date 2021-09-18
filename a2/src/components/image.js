import React, {useContext, useEffect} from "react";
import {RestaurantAnswer} from "../utils/restaurant";
import {images} from "../styles/settings";
import {Image, View} from "react-native";
import {styles} from "../styles/styles";


export function MainImage() {

    const { name } = useContext(RestaurantAnswer);
    let restName;
    useEffect(() => {
        restName = name;
    }, [name])

    if (name == "Pete's Burger Joint") {
        return (
            <View style={styles.menuAlign}>
                <Image style={styles.mainImage} source={images.images.petesFood}/>
                <Image style={styles.mainImage} source={images.images.petesDrink}/>
            </View>
        );

    }
}
