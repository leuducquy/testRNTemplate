// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState} from 'react';
import {View, Image, SafeAreaView, TouchableOpacity, FlatList, Text} from 'react-native';
import {heightScreen, widthScreen} from './Utils/dimension';
import {InsIcon, arrrowIconright, bhytIcon, inforBenefitIcon, qtttIcon} from './Components/Image';
import ImagePicker from 'react-native-image-crop-picker';
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
const BHTNLDBNNScreen = () => {
  const [uriImage, setURI] = useState('');
  async function getPhotoFromGallery() {
    try {
      const photo = await ImagePicker.openPicker({
        width: widthScreen,
        height: heightScreen,
        cropping: true,
        includeBase64: true,
        mediaType: 'photo',
        maxFiles: 10,
        avoidEmptySpaceAroundImage: true,
        cropperToolbarTitle: 'Crop Image',
      });
      console.log('photo', photo.path);
      setURI(photo.path);
    } catch (error) {
      console.log('error photo', error);
      //Error Loading Images
    }
  }
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16, paddingTop: 40,
      backgroundColor:"white"}}>
       
      </View>
    </SafeAreaView>
  );
};

export default BHTNLDBNNScreen;
