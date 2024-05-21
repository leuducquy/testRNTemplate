// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, StyleSheet,TouchableOpacity,Dimensions,Image, StatusBar} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { heightScreen } from '../Utils/dimension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { arrowMenuIcon, changePassMenuIcon, helpMenuIcon, logoutIcon, managerIcon, menuAvatarIcon, newsIcon, notiIcon, searchMenuIcon, serviceMenuIcon, settingMenuIcon } from './Image';
import { baseGreenMenu } from '../Utils/colorsUtil';
const   dataSouce = [
  {
    id: 1,
    uri: notiIcon,
    title: 'Thông báo',
    goto: 'InDetailScreen',
  },
  {
    id: 2,
    uri: newsIcon,
    title: 'Tin tức',
    goto: 'TopTabStack',
  },
  {
    id: 3,
    uri: managerIcon,
    title: 'Quản lý cá nhân',
    goto: '',
  },
  {
    id: 4,
    uri: serviceMenuIcon,
    title: 'Dịch vụ công',
    goto: '',
  },
  {
    id: 5,
    uri: searchMenuIcon,
    title: 'Tra cứu',
    goto: '',
  },
  {
    id: 6,
    uri: helpMenuIcon,
    title: 'Trợ giúp',
    goto: '',
  },
  {
    id: 7,
    uri: settingMenuIcon,
    title: 'Cài đặt',
    goto: '',
  },
  {
    id: 8,
    uri: changePassMenuIcon,
    title: 'Đổi mật khẩu',
    goto: '',
  },
  {
    id: 9,
    uri: logoutIcon,
    title: 'Đăng xuất',
    goto: '',
  },
];
const CustomSidebarMenu = ({props} ) => {

  const route = useRoute();
 const [dataLogin ,setDateLogin] = useState({})
 
//  const {userEmail = '',userPassword = ''}  = route.params
 useEffect(() => {
 
    const retrieveData = async () => {
      try {
       const valueString=  await AsyncStorage.getItem('user_id')
        const value = JSON.parse(valueString);
       console.log('value',value)
       setDateLogin(value)
       
    
     
      } catch (error) {
        console.log(error);
      }
    };
    retrieveData()
  

}, []);
listItem = ({item, index}) => {
  return (
    <TouchableOpacity
      onPress={() => {
       if(index === dataSouce.length - 1){
        AsyncStorage.clear();
                    props.navigation.replace('Auth');
       }
       
       
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 44,
          width: '100%',
          backgroundColor: baseGreenMenu,
          marginBottom: item.id === 7 ? 40 : 10,
          paddingLeft:5
        }}>
        <Image  style={{marginTop:5,backgroundColor:baseGreenMenu}} source={item.uri} resizeMode="contain" />
        <View
          style={{
            flexDirection: 'row',
            height: 44,
            justifyContent: 'space-between',
            flex: 1,
            alignItems: 'center',
            marginLeft: 10,
            borderBottomColor: 'white',
            borderBottomWidth: 0.5,
            paddingRight:10
          }}>
          <Text style={{
            textAlign:'center',
            color:"white",
            fontWeight:"400"
          }}>{item.title}</Text>
          <Image  source={arrowMenuIcon} resizeMode="contain" />
        </View>
      </View>
    </TouchableOpacity>
  );
};
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
          <Image  style={{marginTop:5,backgroundColor:baseGreenMenu}} source={menuAvatarIcon} resizeMode="contain" />
        <View style={{
          marginTop:15
        }}>
        <Text style={[stylesSidebar.profileHeaderText,{marginBottom:10}]}>{dataLogin &&dataLogin.userEmail ? dataLogin.userEmail : ''} </Text>
        <Text style={stylesSidebar.profileHeaderText}>{dataLogin &&dataLogin.userPassword ? dataLogin.userPassword : ''} </Text>
        </View>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

     
    
      {/* <Image
        source={require('../../Image/menuImage.png')}
        resizeMode="contain"
        style={{
          marginTop: -Dimensions.get('window').height * 0.2,
          width:"100%"  ,
          height: Dimensions.get('window').height * 0.9 ,
          overflow: 'hidden',
        }}
     
      /> */}
      <FlatList
          keyExtractor={(item, index) => item + index}
          data={dataSouce}
          style={{paddingTop: 8}}
          renderItem={listItem}
          onEndReachedThreshold={0.1}
        />
    <View style={stylesSidebar.bottomView}>
    <Text style={{
            lineHeight:30 ,
            color:"white",
            fontWeight:"400",
            textAlign:"left"
          }}>{'Phiên bản 1.6.8'}</Text>
           <Text style={{
            textAlign:'center',
            color:"white",
            fontWeight:"400",
            textAlign:"left",
            lineHeight:20 ,
          }}>{'@ Bản quyền thuộc về Bảo hiểm xã hội Việt Nam'}</Text>
    </View>
       
      {/* <TouchableOpacity onPress={getPhotoFromGallery}>
          <Text>Upload Image</Text>
        </TouchableOpacity>
        <DrawerItem
          label={({color}) => <Text style={{color: '#d8d8d8'}}>Logout</Text>}
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.replace('Auth');
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        /> */}
      
    </View>
  );
};

export default CustomSidebarMenu


const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: baseGreenMenu,
    paddingTop:  Platform.select({
      android: StatusBar.currentHeight,
      ios: 40,
      default: 0,
  }),
   
    overflow: 'hidden',
  },
  profileHeader: {
  justifyContent: "center",
  alignItems: "center",
    backgroundColor: baseGreenMenu,
    paddingTop: 10,
   paddingBottom: 10,
    shadowColor: '#000',
  
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.2,
    shadowRadius: 1,
    elevation: 2,
  
   
  },
  shadowView:{
   overflow: "hidden",
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
    height: 1,
    flex:1,
    marginTop:10
  },
  bottomView:{


 padding:20,
 paddingBottom: 40
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
   
    marginTop: 5,
  },
});
