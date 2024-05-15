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
  StyleSheet,
  ScrollView
} from 'react-native';
import {heightScreen, widthScreen} from './Utils/dimension';
import {InsIcon, arrrowIconright, bhytIcon, qtttIcon, skcbIcon, tthIcon} from './Components/Image';
import ImagePicker from 'react-native-image-crop-picker';
import { baseGray } from './Utils/colorsUtil';
import UploadImageComponent from './Components/UploadImageComponent';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getHomeDataAction } from '../reduxFile/action/home';
import { getHomeImageDataAction } from '../reduxFile/action/image';

const dataSouce = [
  {
    id: 1,
    uri: bhytIcon,
    title: 'THẺ BHYT',
    goto: 'InDetailScreen',
  },
  {
    id: 2,
    uri: qtttIcon,
    title: 'QUÁ TRÌNH THAM GIA',
    goto: 'TopTabStack',
  },
  {
    id: 3,
    uri: tthIcon,
    title: 'THÔNG TIN HƯỞNG',
    goto: '',
  },
  {
    id: 4,
    uri: skcbIcon,
    title: 'SỔ KHÁM CHỮA BỆNH',
    goto: '',
  },
];
const HomeScreen = ({navigation}) => {
  const homeData = useSelector(state => state.imageReducer.imageHomeData)
  useEffect(()=>{
    console.log("homedata",homeData)
  },[homeData])
const dispatch = useDispatch()
  listItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if(index=== 0 || index === 1){
            navigation.navigate(item.goto);
          }
         
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 44,
            width: '100%',
            backgroundColor: 'white',
            marginBottom: 10,
          }}>
          <Image source={item.uri} resizeMode="contain" />
          <View
            style={{
              flexDirection: 'row',
              height: 44,
              justifyContent: 'space-between',
              flex: 1,
              alignItems: 'center',
              marginLeft: 10,
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
            }}>
            <Text style={styles.text}>{item.title}</Text>
            <Image source={arrrowIconright} resizeMode="contain" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const getDataFromChildHandler = (data) => {
  
   dispatch(getHomeImageDataAction(data))
  };
  return (
    <SafeAreaView style={{flex: 1}}>
     <ScrollView
        style={{
          padding: 16,
          paddingTop: 20,
        
       
          backgroundColor: 'white',
        }}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
        >
     
      <UploadImageComponent 
         defaultImage={InsIcon}
         uploadImageData={homeData}
         onDataFromChild={getDataFromChildHandler}
        />
        <FlatList
        scrollEnabled={false}
          keyExtractor={(item, index) => item + index}
          data={dataSouce}
          style={{paddingTop: 8}}
          renderItem={listItem}
          onEndReachedThreshold={0.1}
        />
        <View style={{height: 50}}></View>
    </ScrollView>
    </SafeAreaView>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    imageSource: state.homeReducer
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  
  return {
  
    loginInfo: data => 
      dispatch(loginAction(data))
   
  }
}
export default connect(null,null)(HomeScreen);
const styles = StyleSheet.create({
  text: {
   fontSize: 18,
   color:baseGray
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