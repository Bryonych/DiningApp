import React, {useContext, useEffect} from "react";
import {RestaurantAnswer} from "../utils/restaurant";
import {Text, View} from "react-native";
import {styles} from "../styles/styles";


export function Blurb() {

    const { name } = useContext(RestaurantAnswer);
    let restName;
    useEffect(() => {
        restName = name;
    }, [name])

    if (name == "Pete's Burger Joint") {
        return (
            <View>
                <Text style={styles.instructionText}>Welcome to Pete's Burgers! We pride ourselves on making the best burgers in town.</Text>
                <Text style={styles.blurb}>Made with the freshest ingredients and the utmost care, our burgers are more than just an
                eating experience - they're a lifestyle. Also on offer, we stock some of Wellington's finest
                craft beer and local wines, as well as a large range of non-alcoholic drinks.</Text>
                <Text style={styles.instructionText}>We hope you enjoy the experience as much as we enjoy bringing it to you. Please select
                    the menu above to begin.</Text>
            </View>
        );

    }
}
