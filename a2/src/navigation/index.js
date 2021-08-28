
import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppNavigation';
import { AppLoginStack } from './LoginNavigation';
import { AuthenticationAnswer } from '../utils/authentication';
import auth from '@react-native-firebase/auth';

export const Navigation = () => {
    const { user, setUser } = useContext(AuthenticationAnswer);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    return (
        <NavigationContainer>
            { user? <AppStack /> : <AppLoginStack />}
        </NavigationContainer>
    );
};
