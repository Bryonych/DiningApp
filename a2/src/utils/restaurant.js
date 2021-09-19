import React, {useState, createContext, useEffect} from 'react';
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
    const [ foodMenu, setFoodMenu ] = useState([])
    const [ drinksMenu, setDrinksMenu ] = useState([])

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
                foodMenu,
                setFoodMenu,
                drinksMenu,
                setDrinksMenu,
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
                    const query = firestore().collection('Menus').where('restaurantId', '==', parseInt(restaurant))
                        .where('type', '==', 'food');
                    let items = [];
                    query.get().then(querySnapshot => {
                        querySnapshot.forEach(documentSnapshot => {
                            items.push(documentSnapshot.data());
                        });
                    });
                    setFoodMenu(items)
                },
                getDrinksMenu: () => {
                    const query = firestore().collection('Menus').where('restaurantId', '==', parseInt(restaurant))
                        .where('type', '==', 'drink');
                    let items = [];
                    query.get().then(querySnapshot => {
                        querySnapshot.forEach(documentSnapshot => {
                            items.push(documentSnapshot.data());
                        });
                    });
                    setDrinksMenu(items)
                },
            }}>
            {children}
        </RestaurantAnswer.Provider>
    );

};
