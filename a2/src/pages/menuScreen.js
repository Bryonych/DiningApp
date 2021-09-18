import React, {useContext, useEffect} from "react";
import {RestaurantAnswer} from "../utils/restaurant";
import {Button} from "react-native-elements";
import {styles} from "../styles/styles";


export const MenuScreen = ({navigation}) => {
    const { menu } = useContext(RestaurantAnswer);

    let currentMenu = {}
    useEffect(() => {
        currentMenu = menu;
    }, [menu])

    //console.log(menu)

    return (
        <Button
            titleStyle={styles.buttonTitleStyle}
            buttonStyle={styles.menuButton}
            title="Food Menu"
            onPress={() => {
                navigation.navigate('FoodOrder')
            }
            }
        />
    )

}
