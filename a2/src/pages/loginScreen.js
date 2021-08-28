import React, { useState, useContext } from 'react';
import { AuthenticationAnswer } from '../utils/authentication';
import { Button } from "react-native-elements";
import {View, Text, TextInput, Image, Keyboard, TouchableWithoutFeedback} from "react-native";
import { styles } from '../styles/styles';
import { AppLoginStack } from '../navigation/LoginNavigation';


export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading, error } = useContext(AuthenticationAnswer);

    return (
        <TouchableWithoutFeedback onPress={() =>{
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                {/*<Text style={styles.instructionText}>Enter email:</Text>*/}
                <View style={styles.box}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/images/logo2.jpg')}
                    />
                    <TextInput
                        style={styles.textBox}
                        placeholder='Email'
                        onChangeText={(val) => setEmail(val)}
                    />
                    {/*<Text style={styles.instructionText}> Enter password:</Text>*/}
                    <TextInput
                        style={styles.textBox}
                        secureTextEntry={true}
                        placeholder='Password'
                        onChangeText={(val) => setPassword(val)}
                    />
                    <Button
                        titleStyle={styles.buttonTitleStyle}
                        buttonStyle={styles.buttonStyle}
                        title="Login"
                        onPress={() => {
                            login(email, password)
                            }
                        }
                    />
                    <Button
                        titleStyle={styles.buttonTitleStyle}
                        buttonStyle={styles.buttonStyle}
                        title="Register"
                        onPress={() => {
                            navigation.navigate('Registration')
                        }
                        }
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};
