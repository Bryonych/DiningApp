import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../pages/homeScreen';
import { RestaurantHomeScreen } from "../pages/restaurantHomeScreen";
import { MenuScreen } from "../pages/menuScreen";
import { HeaderTitle } from "../components/header";
import { colours } from "../styles/settings";
import { RestaurantProvider } from "../utils/restaurant";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();

export const AppStack = ({navigation}) => {


    return (
        <RestaurantProvider>
            <Stack.Navigator initialRouteName="Home"
                             screenOptions={ {
                                 headerTitleAlign: 'center',
                                 headerTitle: () => <HeaderTitle />,
                                 headerStyle: {
                                     backgroundColor: colours.black,
                                     height: 200,
                                 },
                                 headerTintColor: colours.darkGreen,

                             }}>
                <Stack.Screen
                    name="Home"
                    component={ HomeScreen }
                />
                {/*<Stack.Screen name="MyProfile" component={MyProfileScreen} />*/}
                {/*<Stack.Screen name="AboutUs" component={AboutUsScreen} />*/}
                <Stack.Screen
                    name="RestaurantHome"
                    component={ RestaurantHomeScreen }
                />
                <Stack.Screen
                    name="Menu"
                    component={MenuScreen}
                />
                {/*<Stack.Screen name="ItemDetails" component={ItemDetailsScreen} />*/}
                {/*<Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />*/}
                {/*<Stack.Screen name="Payment" component={PaymentScreen} />*/}
                {/*<Stack.Screen name="OrderProcessing" component={OrderProcessingScreen} />*/}
                {/*<Stack.Screen name="OrderConfirmed" component={OrderConfirmedScreen} />*/}
            </Stack.Navigator>
        </RestaurantProvider>
    )
}
