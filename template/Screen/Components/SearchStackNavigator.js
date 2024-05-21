import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "../SearchScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  
  },
  headerTitleAlign: "center",
 
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const SearchStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{
          title: 'TRA CỨU', //Set Header Title
         
        }}
       name="Home" component={SearchScreen} />
      
    </Stack.Navigator>
  );
}
export { SearchStackNavigator };