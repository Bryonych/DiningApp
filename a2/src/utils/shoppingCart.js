import React, {useState, createContext, useEffect} from 'react';
import firestore from "@react-native-firebase/firestore";


export const ShoppingAnswer = createContext({});

export const ShoppingProvider = ({ children }) => {
    const [ items, setItems ] = useState([]);
    const [ numItems, setNumItems ] = useState(0);
    const [ itemNames, setItemNames ] = useState([])
    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        setNumItems(items.length);
    }, []);

    return (
        <ShoppingAnswer.Provider
            value={{
                items,
                setItems,
                itemNames,
                total,
                addItem: (item, quantity) => {
                    let runningTotal = total;
                    for (let i = 0; i < quantity; i++){
                        items.push(item);
                        runningTotal += item.price;
                        setTotal(runningTotal);
                        itemNames.push(item.itemName);
                    }
                },
                removeItem: (item) => {
                    let index = items.indexOf(item);
                    items.splice(index);
                    setTotal(total - item.price);
                    let i = itemNames.indexOf(item.itemName);
                    itemNames.splice(i);
                },

            }}>
            {children}
        </ShoppingAnswer.Provider>
    );
}
