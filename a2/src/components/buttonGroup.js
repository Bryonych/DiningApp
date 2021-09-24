import { ButtonGroup, Button } from "react-native-elements";
import {styles} from "../styles/styles";
import React, { useState, useContext } from 'react';
import { AuthenticationAnswer } from '../dataUitls/authentication';
import { useNavigation } from '@react-navigation/native';

/* Button group along the bottom of the screens*/

export const ButtonBar = () => {
    const { doLogout } = useContext(AuthenticationAnswer);
    const navigation = useNavigation();

    const comp1 = () =>
        <Button
            titleStyle={styles.buttonTitleStyle}
            buttonStyle={styles.buttonBarButton}
            title="Home"
            onPress={() => {
                navigation.navigate('Home');
                }
            }
        />

    const comp2 = () =>
        <Button
            titleStyle={styles.buttonTitleStyle}
            buttonStyle={styles.buttonBarButton}
            title="My Profile"
            onPress={() => {
                //navigation.navigate('MyProfile');
                }
            }
        />

    const comp3 = () =>
        <Button
            titleStyle={styles.buttonTitleStyle}
            buttonStyle={styles.buttonBarButton}
            title="Logout"
            onPress={() => {
                doLogout();
                }
            }
        />

    const buttons = [{element:comp1}, {element:comp2}, {element:comp3}]

    return (
        <ButtonGroup
            containerStyle={styles.buttonBar}
            buttons={buttons}
        />
    )
}
