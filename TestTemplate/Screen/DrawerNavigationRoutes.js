// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens

import CustomSidebarMenu from './Components/CustomSidebarMenu';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
import {HomeStackNavigator} from './Components/HomeStackNavigator';
import {ServiceStackNavigator} from './Components/ServiceStackNavigator';
import {SearchStackNavigator} from './Components/SearchStackNavigator';
import {HelpStackNavigator} from './Components/HelpStackNavigator';
import {
  helpIcon,
  profileIcon,
  searchIcon,
  serviceIcon,
} from './Components/Image';
import {Image} from 'react-native';
import { baseGreen } from './Utils/colorsUtil';
import { widthScreen } from './Utils/dimension';

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" 
    screenOptions={
      {headerShown: false,
        tabBarActiveTintColor: baseGreen,
    tabBarInactiveTintColor: 'gray',
      }
      }>
      <Tab.Screen
        options={{
          tabBarIcon: tabInfo => <Image source={profileIcon} />,
        }}
        name="QL cá nhân"
        component={HomeStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: tabInfo => <Image source={serviceIcon} />,
          tabBarActiveTintColor: 'gray',
    tabBarInactiveTintColor: 'gray',
        }}
        name="Dịch vụ công"
        component={ServiceStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: tabInfo => <Image source={searchIcon} />,
          tabBarActiveTintColor: 'gray',
    tabBarInactiveTintColor: 'gray',
        }}
        name="Tra cứu"
        component={SearchStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: tabInfo => <Image source={helpIcon} />,
          tabBarActiveTintColor: 'gray',
    tabBarInactiveTintColor: 'gray',
        }}
        name="Trợ giúp"
        component={HelpStackNavigator}
      />
    </Tab.Navigator>
  );
}
const DrawerNavigatorRoutes = props => {
 
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: baseGreen,
        color: baseGreen,
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
        drawerStyle: {
          width: widthScreen / 1.5,
          overflow:"hidden",
        
        },
        drawerType: 'front',
        headerShown: false,
      }}
      drawerContent={(propsQuy)  =>{
        
        return <CustomSidebarMenu props={props} />
      }}
      >
      <Drawer.Screen
        name="HomeScreenStack"
        options={{drawerLabel: 'Home Screen'}}
        component={MyTabs}
      />
      {/* <Drawer.Screen
        name="SettingScreenStack"
        options={{drawerLabel: 'Setting Screen'}}
        component={settingScreenStack}
      />
       <Drawer.Screen
        name="PhotoScreenStack"
        options={{drawerLabel: 'Photo Screen'}}
        component={photoScreenStack}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
