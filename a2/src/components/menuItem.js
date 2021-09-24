import {styles} from "../styles/styles";
import {View, Text, Image, TouchableOpacity} from "react-native";
import React, {useContext, useCallback, useState} from 'react';
import {colours, images} from '../styles/settings.js';
import Modal from "react-native-modal";
import {Button} from "react-native-elements";
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';

/* Displays a menu item on the screen. Sends purchase information back to MenuScreen parent to be passed
to business layer */

export function MenuItem ({item, key, parentCallback}) {

    const [ isModalVisible, setIsModalVisible ] = useState(false);
    const [ quantity, setQuantity ] = useState(0);
    const [ dropdown, setDropdown ] = useState(null);


    let img;
    switch(item.image){
        case 'petesCheese' : img = images.images.petesCheese;
            break;
        case 'petesFood' : img = images.images.petesFood;
            break;
        case 'petesChicken' : img = images.images.petesChicken;
            break;
        case 'petesChips' : img = images.images.petesChips;
            break;
        case 'petesFish' : img = images.images.petesFish;
            break;
        case 'petesHaloumi' : img = images.images.petesHaloumi;
            break;
        case 'petesIpa' : img = images.images.petesIpa;
            break;
        case 'petesLarger' : img = images.images.petesLarger;
            break;
        case 'petesRed' : img = images.images.petesRed;
            break;
        case 'petesWhite' : img = images.images.petesWhite;
            break;
    }

    const dropdownValues = [
        {label: 'None', value: 0},
        {label: 'One', value: 1},
        {label: 'Two', value: 2},
        {label: 'Three', value: 3},
    ];

    const pressHandler = () => {
        setIsModalVisible(true);
    }

    return (
        <View>
            <TouchableOpacity onPress={() => pressHandler()}>
                <View style={styles.menuItem}>
                    <Image style={styles.menuImage} source = {img}/>
                    <Text style={styles.foodDescription}>{item.itemName}</Text>
                    <Text style={styles.foodDescription}>${item.price}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.inBetween}/>
            <Modal isVisible={isModalVisible} style={styles.popup} anymationType='slide'>
                <View style={styles.largeItem}>
                    <Image style={styles.largeMenuImage} source = {img}/>
                    <Text style={styles.instructionText}>{item.itemName}</Text>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                    <Text style={styles.instructionText}>${item.price}</Text>
                    <Dropdown style={styles.picker}
                        data={dropdownValues}
                        labelField="label"
                        valueField="value"
                        placeholder="Quantity"
                        value={dropdown}
                        onChange={item => {
                            setDropdown(item.value);
                            setQuantity(item.value);
                        }}
                    />
                    <View style={styles.menuAlign}>
                        <Button
                            buttonStyle={styles.modalButton}
                            titleStyle={styles.buttonTitleStyle}
                            title="Confirm"
                            onPress={() => {
                                parentCallback(item, quantity);
                                setIsModalVisible(false);
                            }}
                            />
                        <Button
                            buttonStyle={styles.modalButton}
                            titleStyle={styles.buttonTitleStyle}
                            title="Back"
                            onPress={() => {
                                setIsModalVisible(false);
                            }}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}



