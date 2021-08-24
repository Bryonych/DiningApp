import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../pages/loginScreen';

const LoginStack = createNativeStackNavigator();

export const AppLoginStack = () => {
    return (
            <LoginStack.Navigator>
                <LoginStack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: 'Easy Order' }}
                />
                {/*<LoginStack.Screen*/}
                {/*    name="Registration"*/}
                {/*    component={RegistrationScreen}*/}
                {/*    options={{ title: 'Easy Order' }}*/}
                {/*/>*/}
            </LoginStack.Navigator>
    );
};