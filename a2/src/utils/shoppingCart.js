import React, {useState, createContext, useEffect} from 'react';


export const ShoppingAnswer = createContext({});

export const ShoppingProvider = ({ children }) => {
    const [ items, setItems ] = useState([]);
    let total = 0;

    return (
        <ShoppingAnswer.Provider
            value={{
                items,
                setItems,
                addItem: (item, quantity) => {
                    for (let i = 0; i < quantity; i++){
                        items.push(item);
                        total += item.price;
                    }
                },
                removeItem: (item) => {
                    let index = items.indexOf(item);
                    items.splice(index);
                    total -= item.price;
                },

            }}>
            {children}
        </ShoppingAnswer.Provider>
    );
}
