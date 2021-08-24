import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Easy Order' }}
                />
                <Stack.Screen name="MyProfile" component={MyProfileScreen} />
                <Stack.Screen name="MyHistory" componenet={MyHistoryScreen} />
                <Stack.Screen name="AboutUs" component={AboutUsScreen} />
                <Stack.Screen name="RestaurantHome" component={RestaurantHomeScreen} />
                <Stack.Screen name="FoodOrder" component={FoodOrderScreen} />
                <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} />
                <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
                <Stack.Screen name="Payment" component={PaymentScreen} />
                <Stack.Screen name="OrderProcessing" component={OrderProcessingScreen} />
                <Stack.Screen name="OrderConfirmed" component={OrderConfirmedScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}