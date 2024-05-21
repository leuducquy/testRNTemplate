// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component

import React, {useState, useCallback, useEffect} from 'react';
import {Text,Alert,Linking,Platform, Dimensions} from 'react-native';
import {StyleSheet, View, Modal, SafeAreaView,TouchableWithoutFeedback,TouchableOpacity,Image} from 'react-native';
import {
  CameraRoll,
  PhotoIdentifier,
} from '@react-native-camera-roll/camera-roll';
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
import ImagePicker from 'react-native-image-crop-picker';
import Permissions, {PERMISSIONS} from 'react-native-permissions';
const PhotoScreen = (props: any) => {
  const [photos, setPhotos] = useState<PhotoIdentifier[]>([]);
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const openSettingsAlert = useCallback(({title}: {title: string}) => {
    Alert.alert(title, '', [
      {
        isPreferred: true,
        style: 'default',
        text: 'Open Settings',
        onPress: () => Linking?.openSettings(),
      },
      {
        isPreferred: false,
        style: 'destructive',
        text: 'Cancel',
        onPress: () => {},
      },
    ]);
  }, []);
  const fetchPhotos = useCallback(async () => {
    const res = await CameraRoll.getPhotos({
      first: 10,
      assetType: 'Photos',
    });
    console.log("photo",res.edges)
    setPhotos(res?.edges);
  }, []);

  
  const checkPermission = useCallback(async () => {
    if (Platform.OS === 'ios') {
      const permission = await Permissions.check(PERMISSIONS.IOS.PHOTO_LIBRARY);
      if (
        permission === Permissions.RESULTS.GRANTED ||
        permission === Permissions.RESULTS.LIMITED
      ) {
        setHasPermission(true);
        return;
      }
      const res = await Permissions.request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      if (
        res === Permissions.RESULTS.GRANTED ||
        res === Permissions.RESULTS.LIMITED
      ) {
        setHasPermission(true);
      }
      if (res === Permissions.RESULTS.BLOCKED) {
        openSettingsAlert({
          title: 'Please allow access to the photo library from settings',
        });
      }
    } else if (Platform.OS === 'android') {
      // checkAndroidPermissions();
    }
  }, [openSettingsAlert]);

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);
  useEffect(() => {
    if (hasPermission) {
      fetchPhotos();
    }
  }, [fetchPhotos]);
  useEffect(() => {
   if(photos.length > 0) {
    console.log("shjopw modal")
    setShowModal(true)
   }
  }, [photos]);
  const renderChangeExampleModal =()=> {
   
    return (
      <Modal
      style={{
        backgroundColor:"white"
      }}
       visible={showModal} transparent>
        <TouchableWithoutFeedback
          onPress={() => setShowModal(true)}>
          <View style={styles.modalScrim}>
            <SafeAreaView>
              <View style={styles.modalInner}>
                {photos.map((photo, index) => (
                  <TouchableOpacity
                  onPress={() =>
                     {}
                  }>
                  <Image
                style={{width: width / 2, height:100}}
                source={{uri: photo.node.image.uri}}
                resizeMode='cover'
              />
                  </TouchableOpacity>
                ))}
              </View>
            </SafeAreaView>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  return (
    <View style={{
      flex:1,
      backgroundColor:"transparent"
    }}>
    {photos && photos.length > 0 &&   renderChangeExampleModal()}
      {/* {photos?.map(item => {
        return (
          <Text
          style={{
            color:"red"
          }}
           key={item?.node?.image?.uri}>{item?.node?.image?.uri}</Text>
        );
      })} */}
    </View>
  );
};

export default PhotoScreen;

const styles = StyleSheet.create({
  modalScrim: {
    flex: 1,
    backgroundColor: '#00000080',
  },
  flex1: {
    flex: 1,
  },
  modalInner: {
    margin: 20,
    backgroundColor: '#fff',
  },
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
