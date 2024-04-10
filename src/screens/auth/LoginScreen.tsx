import {View, Image, StyleSheet, Switch, Alert} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../styles/globalStyles';
import {
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponents,
  TextComponent,
} from '../../components';
import {Lock, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';
import ButtonComponent from '../../components/ButtonComponent';
import SocialLogin from './components/SocialLogin';
import authenticationAPI from '../../api/authApi';
import {AxiosError} from 'axios';
import {addAuth} from '../../redux/reducers/authReducer';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

const LoginScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  const [isDisable, setIsDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  console.log('remmember', isRemember);

  const handleLogin = async () => {
    console.log('email', email, 'password', password /*  */);
    try {
      const data = await authenticationAPI.HandleAuthentication(
        '/login',
        {
          email: email,
          password: password,
        },
        'post',
      );
      console.log('data - login', data);
      dispatch(addAuth(data.data));
      await AsyncStorage.setItem(
        'auth',
        isRemember ? JSON.stringify(data.data) : JSON.stringify(email),
      );
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 75,
        }}>
        <Image
          source={require('../../assets/images/text-logo.png')}
          style={{width: 162, height: 114, marginBottom: 30}}
        />
      </SectionComponent>

      <SectionComponent>
        <TextComponent size={24} title text="Sign in" />
        <SpaceComponents height={21} />
        {/* email */}
        <InputComponent
          value={email}
          placeholder="Email"
          onChange={val => setEmail(val)}
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        />
        {/* password */}
        <InputComponent
          value={password}
          placeholder="Password"
          onChange={val => setPassword(val)}
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
        />
        <RowComponent justify="space-between">
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              trackColor={{true: appColors.primary}}
              thumbColor={appColors.white}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
            />
            <SpaceComponents width={4} />
            <TextComponent text="Remember me" />
          </RowComponent>
          <ButtonComponent
            text="Forgot Password?"
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
            type="text"
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponents height={16} />

      <SectionComponent>
        <ButtonComponent
          // disable={isLoading || isDisable}
          onPress={handleLogin}
          text="SIGN IN"
          type="primary"
          color={appColors.primary}
        />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Don’t have an account? " />
          <ButtonComponent
            type="link"
            text="Sign up"
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </RowComponent>
      </SectionComponent>
      {/* <LoadingModal visible={isLoading} /> */}
    </ContainerComponent>
  );
};

export default LoginScreen;

// const styles = StyleSheet.create({
// sectionStyle: {
//   justifyContent: 'center',
//   alignContent: 'center',
//   marginTop: 75,
// },
// });
