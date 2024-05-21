import React from 'react';
import {Image, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import BHYTScreen from '../BHYTScreen';
import BHTNLDBNNScreen from '../BHTNLDBNNScreen';
import BHTNScreen from '../BHTNScreen';
import CTSScreen from '../CTSScreen';
import BHXHStackNavigator from './BHXHStackNavigator';
import {
  bhtnTopFocus,
  bhtnTopInIcon,
  bhtnldTopInIcon,
  bhxhTopFocus,
  bhxhtopInIcon,
  bhytTopFocus,
  bhytTiopInIcon,
  clTopInIcon,
} from './Image';
import {ratioHeight, ratioHwidth} from '../Utils/dimension';
import {baseGreen} from '../Utils/colorsUtil';
import {fontSize14} from '../Utils/fontSize';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: false,
        tabBarStyle: {
          borderBottomWidth: 0,
          borderWidth: 0,

          borderBottomColor: 'transparent',
          elevation: 0, // for Android
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
        },

        tabBarIndicatorStyle: {
          backgroundColor: 'white',
          borderBottomColor: 'transparent',
        },
        tabBarContentContainerStyle: {
          height: 100,
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingRight: 30,
          paddingTop: 20,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          height: 40,
        },

        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'BHXH') {
            iconName = focused ? bhxhTopFocus : bhxhtopInIcon;
          } else if (route.name === 'BHTN') {
            iconName = focused ? bhtnTopFocus : bhtnTopInIcon;
          } else if (route.name === 'BHTNLĐ-BNN') {
            iconName = focused ? bhtnldTopInIcon : bhtnldTopInIcon;
          } else if (route.name === 'BHYT') {
            iconName = focused ? bhytTopFocus : bhytTiopInIcon;
          } else if (route.name === 'C14-TS') {
            iconName = focused ? clTopInIcon : clTopInIcon;
          }
          return (
            <View
              style={{
                width: ratioHwidth * 100,
                height: ratioHeight * 60,
                marginTop: -20,
                alignItems: 'center',
              }}>
              <Image
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',

                  width:ratioHwidth * 120,
                  height:ratioHwidth *  120,
                  overflow: 'hidden',
                }}
                source={iconName}
                resizeMode="contain"
              />
              <Text
                style={{
                  color:
                    focused &&
                    (route.name === 'BHYT' ||
                      route.name === 'BHXH' ||
                      route.name === 'BHTN')
                      ? baseGreen
                      : 'gray',
                  fontSize: fontSize14,
                  textAlign: 'center',
                }}>
                {route.name}{' '}
              </Text>
            </View>
          );
        },
      })}>
      <Tab.Screen name="BHXH" component={BHXHStackNavigator} />
      <Tab.Screen name="BHTN" component={BHTNScreen} />
      <Tab.Screen name="BHTNLĐ-BNN" component={BHTNLDBNNScreen} />
      <Tab.Screen name="BHYT" component={BHYTScreen} />
      <Tab.Screen name="C14-TS" component={CTSScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTitleAlign: "center",
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const TopTabStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="TabStack"
        component={MyTabs}
        options={{title: '', headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export {TopTabStackNavigator};
