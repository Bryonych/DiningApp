import React, { useState, useContext } from 'react';
import { AuthenticationAnswer } from '../dataUitls/authentication';
import { Button, CheckBox } from "react-native-elements";
import {TextInput, View, Text, Keyboard, TouchableWithoutFeedback} from "react-native";
import { styles } from '../styles/styles';
import { Formik } from 'formik';
import * as yup from 'yup';

/* Displays registration form on screen */

const RegSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    confirmEmail: yup.string().email().required().oneOf([yup.ref('email'), null], 'Email addresses do not match'),
    phone: yup.string().required().min(7).test('is-num', 'Must enter a valid phone number', (val) => {
        return parseInt(val) > 1000000 && parseInt(val) < 10000000000;
    }),
    password: yup.string().required(),
    reconfirmPassword: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords do not match'),
    check: yup.boolean().oneOf([true], 'You must accept the terms and conditions to proceed'),
})

export const RegistrationScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    const { doRegister } = useContext(AuthenticationAnswer);

    return(
        <TouchableWithoutFeedback onPress={() =>{
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <View style={styles.boxBig}>
                    <Text style={styles.instructionText}>Contact Details</Text>
                    <Formik
                        initialValues={{name: '', email: '', confirmEmail: '', phone: '',
                            password: '', reconfirmPassword: '', check: false }}
                        validationSchema={RegSchema}
                        onSubmit={(values, actions) => {
                            setEmail(values.email);
                            setPassword(values.password);
                            setRepeatedPassword(values.reconfirmPassword);
                            doRegister(values.email, values.password);
                        }}
                    >
                        {(props) => (
                            <View>
                                <TextInput
                                    style={styles.textBox}
                                    placeholder='Name'
                                    onChangeText={props.handleChange('name')}
                                    value={props.values.name}
                                    onBlur={props.handleBlur('name')}
                                />
                                <Text style={styles.error}>{ props.touched.name && props.errors.name }</Text>
                                <TextInput
                                    style={styles.textBox}
                                    placeholder='Email Address'
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.email}
                                    onBlur={props.handleBlur('email')}
                                />
                                <Text style={styles.error}>{ props.touched.email && props.errors.email }</Text>
                                <TextInput
                                    style={styles.textBox}
                                    placeholder='Confirm Email Address'
                                    onChangeText={props.handleChange('confirmEmail')}
                                    value={props.values.confirmEmail}
                                    onBlur={props.handleBlur('confirmEmail')}
                                />
                                <Text style={styles.error}>{ props.touched.confirmEmail && props.errors.confirmEmail }</Text>
                                <TextInput
                                    style={styles.textBox}
                                    placeholder='Phone Number'
                                    onChangeText={props.handleChange('phone')}
                                    value={props.values.phone}
                                    onBlur={props.handleBlur('phone')}
                                    keyboardType='numeric'
                                />
                                <Text style={styles.error}>{ props.touched.phone && props.errors.phone }</Text>
                                <Text style={styles.instructionText}>Password</Text>
                                <TextInput
                                    style={styles.textBox}
                                    secureTextEntry={true}
                                    placeholder='Password'
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password}
                                    onBlur={props.handleBlur('password')}
                                />
                                <Text style={styles.error}>{ props.touched.password && props.errors.password }</Text>
                                <TextInput
                                    style={styles.textBox}
                                    secureTextEntry={true}
                                    placeholder='Reconfirm Password'
                                    onChangeText={props.handleChange('reconfirmPassword')}
                                    value={props.values.reconfirmPassword}
                                    onBlur={props.handleBlur('reconfirmPassword')}
                                />
                                <Text style={styles.error}>{ props.touched.reconfirmPassword && props.errors.reconfirmPassword }</Text>
                                <CheckBox
                                    title='I agree to the terms and conditions'
                                    checkedTitle='You agreed to our terms and conditions'
                                    containerStyle={{padding: 2}}
                                    checked={props.values.check}
                                    onPress={() => props.setFieldValue('check', !props.values.check)}
                                >I agree to the terms and conditions</CheckBox>
                                <Text style={styles.error}>{ props.touched.check && props.errors.check }</Text>
                                <Button
                                    titleStyle={styles.buttonTitleStyle}
                                    buttonStyle={styles.buttonStyle}
                                    title="Register"
                                    onPress={props.handleSubmit}
                                />
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );

};
