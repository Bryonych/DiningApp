import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticationAnswer } from '../utils/authentication';
import { Button } from "react-native-elements";
import { View } from "react-native";
import {styles} from '../styles/styles';
import {colours} from '../styles/settings';

export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { onLogin, isLoading, error } = useContext(AuthenticationAnswer);

    return (
        <View style={styles.container}>

            <View style={styles.buttonStyle}>
                <Button
                    titleStyle={styles.buttonTitleStyle}
                    buttonStyle={styles.buttonStyle}
                    title="Login"
                    onPress={() => {
                        onLogin(email, password)
                        }
                    }
                />
            </View>
        </View>
    );
};