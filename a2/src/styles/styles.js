import {colours} from './settings';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.light,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        width: 150,
        justifyContent: 'center',
        backgroundColor: colours.medGreen,
    },
    buttonTitleStyle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: "bold",
    },
    headingStyle: {
        backgroundColor: colours.darkGreen,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40,
        fontWeight: "bold",
    }
});


