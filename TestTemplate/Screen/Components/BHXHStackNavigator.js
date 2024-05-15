// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import NavigationDrawerHeader from './NavigationDrawerHeader';
// import ServiceScreen from "../ServiceScreen";
// import SettingScreen from "../InDetailScreen";
// import BHXHScreen from "../BHXHScreen";
// import JoinDetailScreen from "../JoinDetailScreen";

// const Stack = createStackNavigator();

// const screenOptionStyle = {
//   headerStyle: {
//     backgroundColor: "#9AC4F8",
//   },
//   headerTintColor: "white",
//   headerBackTitle: "Back",
// };

// const BHXHStackNavigator = ({navigation}) => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen
//         options={{
//           title: 'QUÁ TRÌNH THAM GIA', //Set Header Title

//         }}
//        name="BHXHScreen" component={BHXHScreen} />
//        <Stack.Screen
//         options={{
//           title: 'Chi Tiết', //Set Header Title

//         }}
//        name="JoinDetailScreen" component={JoinDetailScreen} />
//     </Stack.Navigator>
//   );
// }
// export { BHXHStackNavigator };
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';
import {CardStyleInterpolators} from '@react-navigation/stack';
import JoinDetailScreen from '../JoinDetailScreen';
import BHXHScreen from '../BHXHScreen';
import {arrrowLeftIcon} from './Image';
import {TouchableOpacity, Image, Platform} from 'react-native';
import {baseGreen, baseGreenMenu, titleGreen} from '../Utils/colorsUtil';
const RootStack = createNativeStackNavigator();
const ModalStack = createNativeStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: 'transparent', //Set Header color
  },
  headerTitleAlign: 'center',
  headerTintColor: '#9AC4F8', //Set Header text color
  headerTitleStyle: {
    fontWeight: 'bold', //Set Header text style
    color: '#9AC4F8',
  },

  headerShown: false,
};
const ModalStackView = () => (
  <ModalStack.Navigator screenOptions={[screenOptionStyle]}>
    <ModalStack.Screen
      name="Chi Tiết"
      component={JoinDetailScreen}
      options={({navigation, route}) => ({
        headerTintColor: titleGreen, //Set Header text color
        headerShadowVisible: false, // applied here

        headerTitleStyle: {
          fontWeight: '600',
          color: titleGreen,
        },
        headerLeft: () => (
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              resizeMode="contain"
              source={arrrowLeftIcon}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        ),
      })}
    />
  </ModalStack.Navigator>
);

const BHXHStackNavigator = () => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <RootStack.Screen name="BHXHScreen" component={BHXHScreen} />
    <RootStack.Screen
      name="ModalStackView"
      component={ModalStackView}
      options={{
        presentation: 'fullScreenModal',
        headerShown: false,
      }}
    />
  </RootStack.Navigator>
);

export default BHXHStackNavigator;
