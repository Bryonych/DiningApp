
import {View, Text, TextInput, Image, Keyboard, TouchableWithoutFeedback} from "react-native";
import {Button} from "react-native-elements";
import {styles} from "../styles/styles";
import {images, text} from "../styles/settings";
import React, {useContext, useEffect, useState} from "react";
import {ButtonBar} from "../components/buttonGroup";
import {RestaurantAnswer} from "../utils/restaurant";
import Modal from "react-native-modal";
import firestore from "@react-native-firebase/firestore";
import _ from 'lodash';
import { MainImage } from "../components/image";
import { Blurb } from "../components/textBlock";


export const RestaurantHomeScreen = ({navigation}) => {

    const { name } = useContext(RestaurantAnswer);
    const [ isModalVisible, setIsModalVisible ] = useState(true);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);
    const { setTableNumber } = useContext(RestaurantAnswer);
    const { tableNumber } = useContext(RestaurantAnswer);
    const { tableNumbers } = useContext(RestaurantAnswer);
    const { getFoodMenu } = useContext(RestaurantAnswer);
    const { getDrinksMenu } = useContext(RestaurantAnswer);


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
            <View style={styles.boxBig}>
                <View style={styles.menuAlign}>
                    <Button
                        titleStyle={styles.buttonTitleStyle}
                        buttonStyle={styles.menuButton}
                        title="Food Menu"
                        onPress={() => {
                            getFoodMenu()
                            navigation.navigate('Menu')
                        }
                        }
                    />
                    <Button
                        titleStyle={styles.buttonTitleStyle}
                        buttonStyle={styles.menuButton}
                        title="Drinks Menu"
                        onPress={() => {
                            getDrinksMenu()
                            navigation.navigate('Menu')
                        }
                        }
                    />
                </View>
                <MainImage/>
                <Blurb/>
            </View>
            <Modal isVisible={isModalVisible} style={styles.popup} anymationType='slide'>
                <View style={styles.modal}>
                    <Text style={styles.modalText}>Please enter your table number</Text>
                    <TextInput style={styles.textBox}
                        placeholder="Table Number"
                        keyboardType="numeric"
                        onChangeText={(val) => setTableNumber(parseInt(val))
                        }
                    />
                    <Button
                        buttonStyle={styles.modalButton}
                        titleStyle={styles.buttonTitleStyle}
                        title="Enter"
                        onPress={() => handleTableNumber()}/>
                </View>
            </Modal>
            <ButtonBar/>
        </View>
    )
}
