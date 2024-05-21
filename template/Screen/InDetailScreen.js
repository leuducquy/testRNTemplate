// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useEffect, useState} from 'react';
import {View, Image, SafeAreaView, TouchableOpacity, FlatList, Text,StyleSheet, ScrollView} from 'react-native';
import {heightScreen, widthScreen} from './Utils/dimension';
import {InsIcon, arrrowIconright, bhytIcon, imageCardIcon, inforBenefitIcon, qtttIcon, useCardIcon} from './Components/Image';
import ImagePicker from 'react-native-image-crop-picker';

import { baseGreen } from './Utils/colorsUtil';
import UploadImageComponent from './Components/UploadImageComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getInsImageDataAction } from '../reduxFile/action/image';
const dataSouce = [
  {
  id:1,
  uri:bhytIcon,
  title:"THẺ BHYT",
}, 
{
  id:2,
  uri:qtttIcon,
  title:"QUÁ TRÌNH THAM GIA",
}
]
const InDetailScreen = () => {
  const inImageData = useSelector(state => state.imageReducer.imageInsData)
  useEffect(()=>{

  },[inImageData])
const dispatch = useDispatch()
  const getDataFromChildHandler = (data) => {

    dispatch(getInsImageDataAction(data))
   };
  
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1, padding: 16, paddingTop: 20,
      backgroundColor:"white"}}>
       <UploadImageComponent
       uploadImageData={inImageData}
          onDataFromChild={getDataFromChildHandler}
        defaultImage={InsIcon}/>
        <Image
            resizeMode="contain"
            source={inforBenefitIcon}
            style={{
              marginTop:10,
            
              width: widthScreen -30,

              height: 
                Image.resolveAssetSource(inforBenefitIcon).height,
              marginBottom:20
            }}
          />
          
      </ScrollView>
      <View style={styles.bottomView}>
              <View style={styles.bottomBarDetail}>
                <Image source={useCardIcon} resizeMode='contain' /> 
                <Text style={styles.text}>{'Sử dụng thẻ'}</Text>
              </View>
              <View style={styles.bottomBarDetail}>
                <Image source={imageCardIcon} resizeMode='contain' /> 
                <Text style={styles.text}>{'Hình ảnh thẻ'}</Text>
              </View>
          </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  bottomView:{
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: 'center',
    height: 44,
   
    paddingHorizontal:15,
    backgroundColor: "#FFFFFF"


  },
  text:{
    textAlign: "center",
    color:baseGreen,
    paddingLeft: 5
  },
  bottomBarDetail:{
   flexDirection: "row",
   alignItems: 'center'
  }
});

export default InDetailScreen;
