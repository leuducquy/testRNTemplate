// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { bindActionCreators } from 'redux';

import Loader from './Components/Loader';
import { isLoginAction, loginAction } from '../reduxFile/action/login';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { loginBgImage } from './Components/Image';
import { heightScreen, widthScreen ,ratioHeight,ratioHwidth} from './Utils/dimension';
const LoginScreen = ({navigation,loginInfo}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

 
  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    const params ={
      userEmail : userEmail,
      userPassword : userPassword
    }
    AsyncStorage.setItem('user_id',JSON.stringify(params));
    navigation.replace('DrawerNavigationRoutes',params);
    // setLoading(true);
    // let dataToSend = {user_email: userEmail, user_password: userPassword};
    // let formBody = [];
    // for (let key in dataToSend) {
    //   let encodedKey = encodeURIComponent(key);
    //   let encodedValue = encodeURIComponent(dataToSend[key]);
    //   formBody.push(encodedKey + '=' + encodedValue);
    // }
    // formBody = formBody.join('&');

    // fetch('https://aboutreact.herokuapp.com/login.php', {
    //   method: 'POST',
    //   body: formBody,
    //   headers: {
    //     //Header Defination
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.log(responseJson);
    //     // If server response message same as Data Matched
    //     if (responseJson.status == 1) {
    //       AsyncStorage.setItem('user_id', responseJson.data[0].user_id);
    //       console.log(responseJson.data[0].user_id);
         
    //     } else {
    //       setErrortext('Please check your email id or password');
    //       console.log('Please check your email id or password');
    //     }
    //   })
    //   .catch((error) => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.error(error);
    //   });
  };

  return (
    <View style={styles.mainBody}>
  
      <Loader loading={loading} />
      <View
        keyboardShouldPersistTaps="handled"
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
      
        }}>
       <ImageBackground
       
        source={loginBgImage} resizeMode="cover" style={styles.image}>
       <View>
          <KeyboardAvoidingView enabled>
            
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                placeholder="Mã số BHXH" //dummy@abc.com
                placeholderTextColor="grey"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.passStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                placeholder="Mật khẩu" //12345
                placeholderTextColor="grey"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}></Text>
            </TouchableOpacity>
           
          </KeyboardAvoidingView>
              </View>
        </ImageBackground>
      </View>
     
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    selectModalItem: state
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  
  return {
  
    loginInfo: data => 
      dispatch(loginAction(data))
   
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  image: {
   
  flex:1,
  marginBottom:20,
  marginTop:-10
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 35,
    marginTop: "65%",
    marginLeft: "15%",
    marginRight: 40,
   
   
   
  },
  passStyle: {
    flexDirection: 'row',
    height: 40,
   
    marginLeft: "15%",
    marginRight: 35,
   
    marginTop: 10,
    
   
  },
  buttonStyle: {
   
 
    height: 50,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 30,
    marginBottom: 25,
   
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    // borderWidth: 1,
    // borderRadius: 30,
    // borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
