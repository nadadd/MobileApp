import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import AuthNavigator from "./AuthNavigator";
import FeedNavigator from './FeedNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewListingButton from './NewListingButton';


import navigation from './rootNavigation';
import useNotifications from '../hooks/useNotifications';




const Tab = createBottomTabNavigator();

const AppNavigator = ( ) => {
   useNotifications();

  return (
  <Tab.Navigator>
     <Tab.Screen
     name="Listings"
     component={FeedNavigator}
     options={{
        tabBarIcon: ({ color, size}) => (
        <MaterialCommunityIcons name='home' color={color} size={size} />
        ),
       }} />

     <Tab.Screen name="ListingEdit" component={ListingEditScreen}
     options={({ navigation}) => ({
      tabBarButton: () =>
           <NewListingButton onPress={() => navigation.navigate("ListingEdit")} />,
      tabBarIcon: ({ color, size}) =>
      <MaterialCommunityIcons name='circle-plus' color={color} size={size} />
     })}
     />

     <Tab.Screen name="Account" component={AuthNavigator}
     options={{
      tabBarIcon: ({ color, size}) =>
      <MaterialCommunityIcons name='account' color={color} size={size} />
     }}
     />
  </Tab.Navigator>
  );
    };

export default AppNavigator;
