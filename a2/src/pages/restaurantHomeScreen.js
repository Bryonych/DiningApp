
import {View, Text, TextInput, Image, Keyboard, TouchableWithoutFeedback} from "react-native";
import {Button} from "react-native-elements";
import {styles} from "../styles/styles";
import React, {useContext, useEffect, useState} from "react";
import {ButtonBar} from "../components/buttonGroup";
import {RestaurantAnswer} from "../utils/restaurant";
import Modal from "react-native-modal";
import firestore from "@react-native-firebase/firestore";
import _ from 'lodash';


export const RestaurantHomeScreen = ({navigation}) => {

    const { name } = useContext(RestaurantAnswer);
    const [ isModalVisible, setIsModalVisible ] = useState(true);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);
    const { setTableNumber } = useContext(RestaurantAnswer);
    const { tableNumber } = useContext(RestaurantAnswer);
    const { tableNumbers } = useContext(RestaurantAnswer);

    let options = []
    useEffect(() => {
        options = tableNumbers;
    }, [tableNumbers])

    let number = -1;
    useEffect(() => {
        number = tableNumber;
    }, [tableNumber])

    const handleTableNumber = () => {
        console.log(tableNumber)
        if (_.indexOf(tableNumbers, parseInt(tableNumber)) > -1) {
            setIsModalVisible(false);
        }
        else {
            alert('Invalid table number');
        }
    }


    return (
        <View style={styles.container}>
            <Button
                titleStyle={styles.buttonTitleStyle}
                buttonStyle={styles.buttonStyle}
                title="Food Menu"
                onPress={() => {
                    navigation.navigate('FoodOrder')
                }
                }
            />
            <Button
                titleStyle={styles.buttonTitleStyle}
                buttonStyle={styles.buttonStyle}
                title="Drinks Menu"
                onPress={() => {
                    navigation.navigate('FoodOrder')
                }
                }
            />
            <Modal isVisible={isModalVisible} style={styles.popup} anymationType='slide'>
                <View style={styles.modal}>
                <Text style={{...styles.instructionText, alignSelf: 'center'}}>Please enter your table number</Text>
                    <TextInput style={styles.textBox}
                        placeholder="Table Number"
                        keyboardType="numeric"
                        onChangeText={(val) => setTableNumber(parseInt(val))
                        }
                    />
                    <Button
                        buttonStyle={{...styles.buttonStyle, alignSelf: 'Center'}}
                        titleStyle={styles.buttonTitleStyle}
                        title="Enter"
                        onPress={() => handleTableNumber()}/>
                </View>
            </Modal>
            <ButtonBar/>
        </View>
    )
}
