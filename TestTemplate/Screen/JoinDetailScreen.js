// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  View,

  SafeAreaView,
 
} from 'react-native';

import {
  
  bhytDetailIcon,

} from './Components/Image';

import {connect, useDispatch, useSelector} from 'react-redux';
import {getJoinImageDataAction} from '../reduxFile/action/image';
import UploadImageComponent from './Components/UploadImageComponent';

const JoinDetailScreen = ({navigation}) => {
  const imageJoinDetailData = useSelector(
    state => state.imageReducer.imageJoinDetailData,
  );

  useEffect(() => {}, [imageJoinDetailData]);
  const dispatch = useDispatch();
  const getDataFromChildHandler = data => {
    dispatch(getJoinImageDataAction(data));
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          padding: 16,
          paddingTop: 15,

          backgroundColor: 'white',
        }}>
        <UploadImageComponent
          defaultImage={bhytDetailIcon}
          uploadImageData={imageJoinDetailData}
          onDataFromChild={getDataFromChildHandler}
        />
      </View>
    </SafeAreaView>
  );
};

export default connect(null, null)(JoinDetailScreen);
