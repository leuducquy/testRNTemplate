// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import { bhxhqtIcon } from './Image';
import { heightScreen, widthScreen } from '../Utils/dimension';
import ImagePicker from 'react-native-image-crop-picker';
import { connect,useDispatch,useSelector } from 'react-redux';
import { getHomeDataAction } from '../../reduxFile/action/home';

const UploadImageComponent = ({onDataFromChild,uploadImageData,defaultImage}) => {

 


  async function getPhotoFromGallery() {
    try {
      const photo = await ImagePicker.openPicker({
        width: widthScreen,
        height: heightScreen,
     
        includeBase64: true,
        mediaType: 'photo',
        maxFiles: 10,
        avoidEmptySpaceAroundImage: true,
        cropperToolbarTitle: 'Crop Image',
      });
    
      const {imgWidth, imgHeight} = await new Promise((resolve) => {
        Image.getSize(photo.path, (width, height) => {
          resolve({imgWidth: width, imgHeight: height});
        });
      });
      console.log('iamge width', imgWidth);
      onDataFromChild({
        source:photo.path,
        ratio:imgWidth / imgHeight
      })
    
    } catch (error) {
      console.log('error photo', error);
      //Error Loading Images
    }
  }

  return (
    <TouchableOpacity
          onPress={() => {
            getPhotoFromGallery()
          }}>
          {uploadImageData && uploadImageData.source !== "" ?    <Image
            resizeMode="contain"
            source={{uri: uploadImageData.source}}
            style={{ 
              aspectRatio: uploadImageData.ratio,
              width: widthScreen - 30,

              height:  undefined
             
            }}
          />
          :
          <Image
            resizeMode="contain"
            source={ defaultImage}
            style={{ 
           
              width: widthScreen - 30,

              height: 
                Image.resolveAssetSource(defaultImage).height,
            }}
          /> }
        </TouchableOpacity>
  );
};


export default connect(null,null)(UploadImageComponent);
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
