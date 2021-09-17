import React, { useState, createContext } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthenticationAnswer = createContext({});

export const AuthenticationProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    return (
        <AuthenticationAnswer.Provider
            value={{
                user,
                setUser,
                errorMessage,
                setErrorMessage,
                doLogin: async (email, password) => {
                    setErrorMessage(null);
                    await auth().signInWithEmailAndPassword(email, password).then(() => {
                        console.log('Signed in');
                    }).catch(error => {
                        if (error.code === 'auth/user-not-found') {
                            alert('No such user');
                        }
                        else if (error.code === 'auth/wrong-password') {
                            alert('Invalid email/password combination');
                        }
                        console.error(error);
                    })
                },
                doRegister: async (email, password) => {
                    setErrorMessage(null);
                    await auth().createUserWithEmailAndPassword(email, password).then(() => {
                        console.log('User created');
                    }).catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                            alert('That email is already in use');
                        }
                        if (error.code === 'auth/invalid-email') {
                            alert('That email address is invalid');
                        }
                        console.error(error);
                    });

                },
                doLogout: async () => {
                    setErrorMessage(null);
                    await auth().signOut().then(() => setUser(null))
                        .catch(error => {
                            alert('Failed to logout: ' + error);
                            console.error(error);
                        });
                },
            }}>
            {children}
        </AuthenticationAnswer.Provider>
    )
}
