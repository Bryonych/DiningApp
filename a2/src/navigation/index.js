import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppNavigation';
import { AppLoginStack } from './LoginNavigation';
import { AuthenticationAnswer } from '../utils/authentication';
import auth from '@react-native-firebase/auth';
import { Alert } from "react-native";

export const Navigation = () => {

    const [ initializing, setInitializing ] = useState(true);
    const [ user, setUser ] = useState();

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);


    if (initializing) return null; //change to loading page later

    return (
        <NavigationContainer>
            { user? <AppStack /> : <AppLoginStack />}
        </NavigationContainer>
    );
};
