import React, {useContext, useEffect, useCallback, useState} from "react";
import {ShoppingAnswer} from "../utils/shoppingCart";
import {styles} from "../styles/styles";
import {View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import {colours} from "../styles/settings";
import {ShoppingCart} from "../components/shoppingCartDisplay";
import {Button} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import Modal from "react-native-modal";


export const OrderDetailsScreen = () => {
    const { items, removeItem, total } = useContext(ShoppingAnswer);
    const [ isModalVisible, setIsModalVisible ] = useState(false);

    const navigation = useNavigation();

    let currentItems = {}
    useEffect(() => {
        currentItems = items;
    }, [items])

    let runningTotal = 0;
    useEffect(() => {
        runningTotal = total;
    }, [total])

    return (
        <View style={styles.container}>
            <View style={styles.menuContainer}>
                <Text style={styles.instructionText}>Please confirm your order details:</Text>
                <SafeAreaView style={{flex: 1}}>
                    <View style={styles.listBox}>
                        <ScrollView>
                            {
                                items.map((item, i) => {
                                    return (
                                        <TouchableOpacity key={i} style={{flexDirection: 'row'}}>
                                            <CheckBox style={styles.checkBox} value={true} onValueChange={()=>{removeItem(item)}}/>
                                            <Text style={styles.listText}>{item.itemName}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                    <Text style={styles.price}>Total: ${total}</Text>
                </SafeAreaView>
                <View style={styles.menuAlign}>
                <Button
                    buttonStyle={styles.wideButton}
                    titleStyle={styles.buttonTitleStyle}
                    title="Confirm Order"
                    onPress={() => {navigation.navigate('OrderConfirmed')}}
                />
                <Button
                    buttonStyle={styles.wideButton}
                    titleStyle={styles.buttonTitleStyle}
                    title="Cancel"
                    onPress={() => {setIsModalVisible(true)}}
                />
                </View>
            </View>
            <Modal isVisible={isModalVisible} style={styles.popup} anymationType='slide'>
                <View style={styles.modal}>
                    <Text style={styles.modalText}>Are you sure you want to cancel?</Text>
                    <View style={styles.twoButtons}>
                    <Button
                        buttonStyle={styles.modalButton}
                        titleStyle={styles.buttonTitleStyle}
                        title="Yes"
                        onPress={() => {navigation.navigate('RestaurantHome')}}/>
                    <Button
                        buttonStyle={styles.modalButton}
                        titleStyle={styles.buttonTitleStyle}
                        title="No"
                        onPress={() => {
                            setIsModalVisible(false);
                            navigation.navigate('OrderDetails');
                        }}/>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
