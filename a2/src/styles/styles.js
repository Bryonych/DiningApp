import {colours} from './settings';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.light,
        paddingTop: 100,
    },
    buttonStyle: {
        width: 180,
        justifyContent: 'center',
        backgroundColor: colours.medGreen,
        borderWidth: 2,
        borderColor: colours.darkGreen,
        elevation: 4,
    },
    buttonTitleStyle: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: "bold",
    },
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: 'Zocial',
        fontWeight: 'bold',
        fontSize: 90,
        color: colours.apricot,
        letterSpacing: 2,
        textShadowColor: colours.darkGreen,
        textShadowRadius: 5,
        textShadowOffset: { height: 3, width: 3 },
        paddingBottom: 10,
    },
    headerImage: {
        height: '100%',
        width: '100%',
        opacity: 0.8,
    },
    textBox: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: colours.darkGreen,
        padding: 15,
        margin: 10,
        width: 500,
        height: 70,
        fontSize: 30,
        alignSelf: 'center',

    },
    instructionText: {
        fontSize: 30,
        alignItems: 'flex-start',
    },
    logo: {
        width: 500,
        height: 250,
        borderColor: colours.darkGreen,
        borderWidth: 1,
        alignSelf: 'center',
    },
    box: {
        width: 500,
        height: 800,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    form: {
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    error: {
        fontSize: 20,
    },
});


