import { ButtonGroup, Button } from "react-native-elements";
import {styles} from "../styles/styles";
import React, { useState, useContext } from 'react';
import { AuthenticationAnswer } from '../utils/authentication';

export const ButtonBar = ({navigation}) => {
    const { doLogout } = useContext(AuthenticationAnswer);

    const comp1 = () =>
        <Button
            titleStyle={styles.buttonTitleStyle}
            buttonStyle={styles.buttonBarButton}
            title="My Profile"
            onPress={() => {
                navigation.navigate('MyProfile');
                }
            }
        />

    const comp2 = () =>
        <Button
            titleStyle={styles.buttonTitleStyle}
            buttonStyle={styles.buttonBarButton}
            title="About Us"
            onPress={() => {
                navigation.navigate('AboutUs');
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
