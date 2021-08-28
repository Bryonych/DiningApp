import React, { useState, createContext } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthenticationAnswer = createContext([]);

export const AuthenticationProvider = ({ children }) => {
    //const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    //const [error, setError] = useState(null);

    // auth().onAuthStateChanged((user) => {
    //     if (user) {
    //         setUser(user);
    //         setIsLoading(false);
    //     }
    // });
    //
    // const loginRequest = (email, password) =>
    //     auth().signInWithEmailAndPassword(email, password);
    //
    // const onLogin = (email, password) => {
    //     setIsLoading(true);
    //     loginRequest(email, password).then((person) => {
    //         setUser(person);
    //         setIsLoading(false);
    //     }).catch((err) => {
    //         setIsLoading(false);
    //         setError(err.toString());
    //     });
    // };
    //
    // const onRegister = (email, password, reconfirmPassword) => {
    //     setIsLoading(true);
    //     if (password !== reconfirmPassword) {
    //         setError('Re-entered password does not match original');
    //         return;
    //     }
    //
    //     auth().createUserWithEmailAndPassword(email, password).then((client) => {
    //         setUser(client);
    //         setIsLoading(false);
    //     }).catch((err) => {
    //         setIsLoading(false);
    //         setError(err.toString());
    //     });
    // };
    //
    // const onLogout = () => {
    //     setUser(null);
    //     auth().signOut().then(async r => await auth().signOut());
    // };

    // return (
    //     <AuthenticationAnswer.Provider value={{
    //         isAuthenticated: !!user,
    //         isLoading,
    //         user,
    //         error,
    //         onLogin,
    //         onRegister,
    //         onLogout
    //     }}>
    //         {children}
    //     </AuthenticationAnswer.Provider>
    // );

    return (
        <AuthenticationAnswer.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch (e) {
                        console.log(e);
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log(e);
                    }
                },
            }}>
            {children}
        </AuthenticationAnswer.Provider>
    )
}

// export const withAuth = (Child) => (props) => (
//     <AuthenticationAnswer.Consumer>
//         {(context) => <Child {...props} {...context} /> }
//     </AuthenticationAnswer.Consumer>
// );
