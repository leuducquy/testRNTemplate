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
import {heightScreen, widthScreen} from './Utils/dimension';
import {bhxhqtIcon} from './Components/Image';

import UploadImageComponent from './Components/UploadImageComponent';
import { getBhtnImageDataAction } from '../reduxFile/action/image';
import { useDispatch, useSelector,connect } from 'react-redux';

const BHTNScreen = () => {
  
  const imageBhtnData = useSelector(state => state.imageReducer.imageBhtnData)

  useEffect(()=>{

  },[imageBhtnData])
const dispatch = useDispatch()
  const getDataFromChildHandler = (data) => {
  
    dispatch(getBhtnImageDataAction(data))
   };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    <View style={{
      flex: 1
    }}>
      <ScrollView
        style={{
          padding: 16,
          paddingTop: 0,
        
       
          backgroundColor: 'white',
        }}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
        >
          <UploadImageComponent 
       
          uploadImageData={imageBhtnData}
          onDataFromChild={getDataFromChildHandler}
        defaultImage={bhxhqtIcon}

        />
       
      </ScrollView>
   
          </View>
    </SafeAreaView>
  );
};

export default connect(null,null)(BHTNScreen);
