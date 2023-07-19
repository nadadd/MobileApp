import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingScreen from '../screens/ListingScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{   headerShown: false }} >
     <Stack.Screen name='Listings' component={ListingScreen} />
     <Stack.Screen name='ListingDetails' component={ListingDetailsScreen}
        options={{ headerShown: false }} />
  </Stack.Navigator>
);
 
export default FeedNavigator;
