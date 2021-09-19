import React, { useState, useContext } from 'react';
import { RestaurantAnswer } from '../utils/restaurant';
import { Button } from "react-native-elements";
import {View, Text, TextInput, Image, Keyboard, TouchableWithoutFeedback} from "react-native";
import { styles } from '../styles/styles';
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import { ButtonBar } from '../components/buttonGroup';

export const HomeScreen = ({navigation}) => {

    const { loadRestaurant } = useContext(RestaurantAnswer);
    const { getFoodMenu, getDrinksMenu } = useContext(RestaurantAnswer);
    const [ id, setId ] = useState(0);

    const onSuccess = e => {
        const restCode = e.data.substring(e.data.length-3, e.data.length);
        loadRestaurant(restCode);
        getFoodMenu();
        getDrinksMenu();
    }

    const handleSubmit = () => {
        try {
            loadRestaurant(id);
        } catch (e) {
            alert('Invalid code');
        }
    }

    return(
        <TouchableWithoutFeedback onPress={() =>{
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <View style={styles.boxBig}>
                    <View style={styles.qrInstruction}>
                        <Text style={styles.qrText}>Scan QR Code to Begin</Text>
                        <Image
                            style={styles.cameraIcon}
                            source={require('../assets/images/camera.png')}
                        />
                    </View>
                    <View style={styles.qrScanner}>
                        <QRCodeScanner
                            containerStyle={styles.qrBox}
                            cameraStyle={styles.qrScanner}
                            cameraStyle={styles.qrScanner}
                            onRead={onSuccess}
                            flashMode={RNCamera.Constants.FlashMode.torch}
                            reactivate={true}
                        />
                    </View>
                    <View>
                        <Text style={styles.instructionText}>Or Enter Code</Text>
                        <TextInput
                            style={styles.textBox}
                            placeholder='Code'
                            onChangeText={(val) => setId(parseInt(val))}
                            keyboardType='numeric'
                            onSubmitEditing={() => handleSubmit()}
                        />
                    </View>
                </View>
                <ButtonBar />
            </View>
        </TouchableWithoutFeedback>
    );
};
