import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationDrawerHeader from './NavigationDrawerHeader';
import HomeScreen from "../HomeScreen";
import InDetailScreen from "../InDetailScreen";
import JoinDetailScreen from "../JoinDetailScreen";
import { TopTabStackNavigator } from "./TopTabStackNavigator";
import { CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitleAlign: "center",
};
const headerStyle= {
  headerStyle: {
    backgroundColor: '#307ecc', //Set Header color
  },
  headerTintColor: '#fff', //Set Header text color
  headerTitleStyle: {
    fontWeight:"400"
  },
}
const HomeStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{
          title: 'QUẢN LÝ CÁ NHÂN', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
         ...headerStyle
        }}
       name="Home" component={HomeScreen} />
      <Stack.Screen 
       options={{
          title: 'THẺ BẢO HIỂM Y TẾ', //Set Header Title
          headerBackTitleVisible: false,
          ...headerStyle
        }}
      name="InDetailScreen" component={InDetailScreen} />
      
       <Stack.Screen 
       options={{
          title: 'QUÁ TRÌNH THAM GIA', //Set Header Title
          headerBackTitleVisible: false,
          ...headerStyle,
          cardStyleInterpolator: ({ current, layouts }) => ({
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            }),
        }}
      name="TopTabStack" component={TopTabStackNavigator} />
    </Stack.Navigator>
  );
}
export { HomeStackNavigator };