import {colours} from './settings';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.light,
        paddingTop: 70,
        justifyContent: 'space-between',
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
    },
    textBox: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: colours.darkGreen,
        padding: 15,
        margin: 10,
        width: deviceWidth * 0.7,
        height: 70,
        fontSize: 30,
        alignSelf: 'center',

    },
    instructionText: {
        fontSize: 30,
        alignItems: 'flex-start',
        paddingTop: 15,
        color: colours.darkGreen,
        fontWeight: 'bold',
    },
    logo: {
        width: deviceWidth * 0.7,
        height: 250,
        borderColor: colours.darkGreen,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 15,
    },
    box: {
        width: deviceWidth * 0.7,
        height: deviceHeight * 0.6,
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
        color: '#FF0000',
    },
    qrBox: {
        width: '100%',
        height: deviceHeight/2,
    },
    qrScanner: {
        width: '100%',
        height: deviceHeight/2,
        borderRadius: 5,
        borderWidth: 4,
    },
    cameraIcon: {
        width: 70,
        height: 50,
        alignSelf: 'center',
    },
    buttonBar: {
        height: 70,
        width: '100%',
        flexDirection: 'row'
    },
    boxBig: {
        width: deviceWidth * 0.7,
        height: deviceHeight * 0.75,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    qrInstruction: {
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    qrText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: colours.darkGreen,
        paddingBottom: 5,
    },
    buttonBarButton: {
        backgroundColor: colours.medGreen,
        width: deviceWidth / 3,
        height: 70,
    },
    popup: {
        margin: 70,
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: colours.white,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    modal: {
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        width: deviceWidth*0.8,
        height: deviceHeight*0.5,
    },
    modalButton: {
        width: 180,
        justifyContent: 'center',
        backgroundColor: colours.medGreen,
        borderWidth: 2,
        borderColor: colours.darkGreen,
        elevation: 2,
        marginTop: 20,
        alignSelf: 'center',
    },
    modalText: {
        fontSize: 30,
        alignItems: 'flex-start',
        paddingTop: 15,
        color: colours.darkGreen,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 20,
    },
    menuAlign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menuButton: {
        width: 230,
        justifyContent: 'center',
        backgroundColor: colours.medGreen,
        borderWidth: 2,
        borderColor: colours.darkGreen,
        elevation: 3,
    },
    mainImage: {
        width: 230,
        height: 230,
        borderRadius: 5,
        borderWidth: 2,
    },
    blurb: {
        fontSize: 30,
        color: colours.darkGreen,
        marginBottom: 12,
    }
});


