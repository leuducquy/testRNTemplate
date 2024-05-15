import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationDrawerHeader from './NavigationDrawerHeader';
import ServiceScreen from "../ServiceScreen";
import SettingScreen from "../InDetailScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTitleAlign: "center",
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const ServiceStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{
          title: 'DỊCH VỤ CÔNG', //Set Header Title
        
        }}
       name="Home" component={ServiceScreen} />
      
    </Stack.Navigator>
  );
}
export { ServiceStackNavigator };