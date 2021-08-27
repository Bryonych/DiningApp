import React, { useState, useContext } from 'react';
import { AuthenticationAnswer } from '../utils/authentication';
import { Button } from "react-native-elements";
import { TextInput, View, Text, Checkbox } from "react-native";
import { styles } from '../styles/styles';
import { Formik } from 'formik';
import * as yup from 'yup';

const RegSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    confirmEmail: yup.string().email().required().test('emails-match', 'Emails do not match', function(confirmEmail) {
        return confirmEmail === this.options.context.email;
    }),
    phone: yup.string().required().min(7).test('is-num', 'Must enter a valid phone number', (val) => {
        return parseInt(val) > 1000000 && parseInt(val) < 10000000;
    }),
    password: yup.string().required(),
    reconfirmPassword: yup.string().required().test('passwords-match', 'Passwords do not match', function (reconfirmPassword) {
        return reconfirmPassword === this.options.context.password;
    }),
    agreeTCs: yup.boolean().oneOf([true], 'You must accept the terms and conditions to proceed'),
})

export const RegistrationScreen = ({navigation}) => {
    const { onRegister, isLoading, error } = useContext(AuthenticationAnswer);

    return(
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.instructionText}>Contact Details</Text>
            <Formik
                initialValues={{name: '', email: '', confirmEmail: '', phone: '',
                password: '', reconfirmPassword: '', agreeTCs: false }}
                validationSchema={RegSchema}
                onSubmit={(values, actions) => {
                    onRegister(email, password, reconfirmPassword)
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
                            placeholder='Password'
                            onChangeText={props.handleChange('password')}
                            value={props.values.password}
                            onBlur={props.handleBlur('password')}
                        />
                        <Text style={styles.error}>{ props.touched.password && props.errors.password }</Text>
                        <TextInput
                            style={styles.textBox}
                            placeholder='Reconfirm Password'
                            onChangeText={props.handleChange('reconfirmPassword')}
                            value={props.values.reconfirmPassword}
                            onBlur={props.handleBlur('reconfirmPassword')}
                        />
                        <Text style={styles.error}>{ props.touched.reconfirmPassword && props.errors.reconfirmPassword }</Text>
                        <Checkbox
                           // constainerStyle={styles.checkBoxContainer}
                            //checkedIcon='check-box'
                            //iconType='material'
                            //uncheckedIcon='check-box-outline-blank'
                            //title='I agree to the terms and conditions'
                            value={props.values.agreeTCs}
                            onChange={() => props.setFieldValue('agreeTCs', !props.values.agreeTCs)}
                        >I agree to the terms and conditions</Checkbox>
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

    );

};
