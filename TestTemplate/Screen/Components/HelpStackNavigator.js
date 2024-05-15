import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "../SearchScreen";
import HelpScreen from "../HelpScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitleAlign: "center",
};

const HelpStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{
          title: 'Trợ giúp', //Set Header Title
        
        }}
       name="Home" component={HelpScreen} />
      
    </Stack.Navigator>
  );
}
export { HelpStackNavigator };