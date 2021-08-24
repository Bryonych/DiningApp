
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppNavigation';
import { AppLoginStack } from './LoginNavigation';
import { AuthenticationAnswer } from '../utils/authentication';

export const Navigation = () => {
    const { isAuthenticated } = useContext(AuthenticationAnswer);

    return (
        <NavigationContainer>
            { isAuthenticated? <AppStack /> : <AppLoginStack />}
        </NavigationContainer>
    );
};