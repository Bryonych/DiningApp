/**
 *
 */


import React, { useState, useEffect } from 'react';
import { Navigation } from "./src/navigation";
import { AuthenticationProvider } from "./src/utils/authentication";

function App() {

    return (
        <AuthenticationProvider>
            <Navigation />
        </AuthenticationProvider>
    );
}


export default App;

