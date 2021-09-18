import React, {useState, createContext, useEffect, useRef} from 'react';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { AppLoginStack } from '../navigation/LoginNavigation';

export const RestaurantAnswer = createContext({});

export const RestaurantProvider = ({ children }) => {
    const [ restaurant, setRestaurant ] = useState(null);
    const [ header, setHeader] = useState(null);
    const [ tableNumber, setTableNumber] = useState(0);
    const [ name, setName ] = useState(null);
    const [ tableNumbers, setTableNumbers ] = useState([])
    const [ menu, setMenu ] = useState({})

    useEffect(() => {
        setHeader(firestore().collection('Restaurants').doc(restaurant).get()["headerImage"])
    }, []);

    useEffect(() => {
        setName(firestore().collection('Restaurants').doc(restaurant).get()["Name"])
    }, []);

    useEffect(() => {
        setTableNumbers(firestore().collection('Restaurants').doc(restaurant).get()["TableNumbers"])
    }, []);


    const navigation = useNavigation();

    return (
        <RestaurantAnswer.Provider
            value={{
                restaurant,
                setRestaurant,
                header,
                setHeader,
                tableNumber,
                setTableNumber,
                name,
                setName,
                tableNumbers,
                setTableNumbers,
                menu,
                setMenu,
                loadRestaurant: async (restCode) => {
                    setRestaurant(restCode);
                    const currentRestaurant = firestore().collection('Restaurants').doc(restCode);
                    const doc = await currentRestaurant.get();
                    if (!doc.exists) {
                        alert("Code not recognised");
                    }
                    else {
                        setHeader(doc.data()["headerImage"]);
                        setName(doc.data()["Name"]);
                        setTableNumbers(doc.data()["TableNumbers"]);
                        navigation.navigate("RestaurantHome");
                    }
                },
                getFoodMenu: () => {
                    setMenu(firestore().collection('Menus').where('restaurantId', '==', restaurant)
                        .where('type', '==', 'food'))
                },
                getDrinksMenu: () => {
                    setMenu(firestore().collection('Menus').where('restaurantId', '==', restaurant)
                        .where('type', '==', 'drink'))
                },
            }}>
            {children}
        </RestaurantAnswer.Provider>
    );

};
