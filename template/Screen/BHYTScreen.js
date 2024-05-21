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
  ScrollView
} from 'react-native';
import {heightScreen, widthScreen} from './Utils/dimension';
import {
  InsIcon,
  bhxhqtIcon,
  bhytIcon,
  inforBenefitIcon,
  qtttIcon,
} from './Components/Image';
import ImagePicker from 'react-native-image-crop-picker';
import UploadImageComponent from './Components/UploadImageComponent';
import { useDispatch, useSelector ,connect} from 'react-redux';
import { getBhytImageDataAction } from '../reduxFile/action/image';
const dataSouce = [
  {
    id: 1,
    uri: bhytIcon,
    title: 'THẺ BHYT',
  },
  {
    id: 2,
    uri: qtttIcon,
    title: 'QUÁ TRÌNH THAM GIA',
  },
];
const BHYTScreen = () => {
  const imageBhytData = useSelector(state => state.imageReducer.imageBhytData)

  useEffect(()=>{

  },[imageBhytData])
const dispatch = useDispatch()
  const getDataFromChildHandler = (data) => {
  
    dispatch(getBhytImageDataAction(data))
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
           onDataFromChild={getDataFromChildHandler}
           uploadImageData={imageBhytData}
            defaultImage={bhxhqtIcon} />
       
      </ScrollView>
   
          </View>
    </SafeAreaView>
  );
};

export default connect(null,null)(BHYTScreen);
