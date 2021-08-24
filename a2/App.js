/**
 *
 */

import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import {Navigation} from "./src/navigation";

function App() {
    // const [initializing, setInitializing] = useState(true);
    // const [user, setUser] = useState();
    //
    // function onAuthStateChanged(user) {
    //     setUser(user);
    //     if (initializing) setInitializing(false);
    // }
    //
    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(OnAuthStateChanged);
    //     return subscriber;
    // }, []);
    //
    // if (initializing) return null;

    // if (!user) {
    //     return (
    //         <Navigation>
    //             <LoginNavigation />
    //         </Navigation>
    //     );
    // }

    return (
        <Navigation />

    );
}


export default App;
