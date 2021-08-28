import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../pages/loginScreen';
import { RegistrationScreen } from '../pages/registrationScreen';
import { HeaderTitle } from '../components/header';
import {colours} from "../styles/settings";
import { HeaderImage } from '../styles/settings'
import { Keyboard, TouchableWithoutFeedback } from "react-native";


const LoginStack = createNativeStackNavigator();

export const AppLoginStack = () => {
    return (
        <LoginStack.Navigator initialRouteName="Login"
        screenOptions={ {
            headerTitleAlign: 'center',
            headerTitle: () => <HeaderTitle />,
            headerStyle: {
                backgroundColor: colours.lightGreen,
                height: 200,
            },
            headerTintColor: colours.darkGreen,

        }}>
            <LoginStack.Screen
                name="Login"
                component={ LoginScreen }
            />
            <LoginStack.Screen
                name="Registration"
                component={ RegistrationScreen }
            />
        </LoginStack.Navigator>
    );
};
