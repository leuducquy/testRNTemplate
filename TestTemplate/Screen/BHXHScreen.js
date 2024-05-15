// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';
import {
  heightScreen,
  ratioHeight,
  ratioHwidth,
  widthScreen,
} from './Utils/dimension';
import {
  InsIcon,
  arrrowIconright,
  bhytIcon,
  inforBenefitIcon,
  bhxhqtIcon,
} from './Components/Image';
import ImagePicker from 'react-native-image-crop-picker';
import UploadImageComponent from './Components/UploadImageComponent';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getBhxhImageDataAction } from '../reduxFile/action/image';

const BHXHScreen = ({navigation}) => {
  const imageBhxnData = useSelector(state => state.imageReducer.imageBhxnData)

  useEffect(()=>{

  },[imageBhxnData])
const dispatch = useDispatch()
  const getDataFromChildHandler = (data) => {
  
    dispatch(getBhxhImageDataAction(data))
   };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
        }}>
        <ScrollView
          style={{
            padding: 16,
            paddingTop: 0,

            backgroundColor: 'white',
          }}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-start'}}>
          <UploadImageComponent
          uploadImageData={imageBhxnData}
          onDataFromChild={getDataFromChildHandler}
           defaultImage={bhxhqtIcon} />
       
        </ScrollView>
        <TouchableOpacity
          style={{
            width: 40,
            height: 50,

            position: 'absolute',
            alignSelf: 'flex-end',

            right: 25 * ratioHwidth,
            top: 50 * ratioHeight,
          }}
          onPress={() => {
            navigation.navigate('ModalStackView');
          }}></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default connect(null,null)(BHXHScreen);
