import React, { useState, createContext } from 'react';
import * as firebase from '@react-native-firebase/app';

export const AuthenticationAnswer = createContext({});

export const AuthenticationProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    firebase.auth().onAuthStateChanged((client) => {
        if (client) {
            setUser(client);
            setIsLoading(false);
        }
    });

    const loginRequest = (email, password) =>
        firebase.auth().signInWithEmailAndPassword(email, password);

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password).then((person) => {
            setUser(person);
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            setError(err.toString());
        });
    };

    const onRegister = (email, password, reenterPassword) => {
        setIsLoading(true);
        if (password !== reenterPassword) {
            setError('Re-entered password does not match original');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password).then((client) => {
            setUser(client);
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            setError(err.toString());
        });
    };

    const onLogout = () => {
        setUser(null);
        firebase.auth().signout();
    };

    return (
        <AuthenticationAnswer.Provider value={{
            isAuthenticated: !!user,
            isLoading,
            user,
            error,
            onLogin,
            onRegister,
            onLogout
        }}>
            {children}
        </AuthenticationAnswer.Provider>
    );
}