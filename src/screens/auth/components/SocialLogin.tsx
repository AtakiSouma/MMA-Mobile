import React, {useState} from 'react';
import {SectionComponent, TextComponent} from '../../../components';
import {appColors} from '../../../constants/appColors';
import {fontFamilies} from '../../../constants/fontFamilies';
import ButtonComponent from '../../../components/ButtonComponent';
import {Facebook, Google} from '../../../assets/svgs';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {LoadingLogin} from '../../../modals';
import authenticationAPI from '../../../api/authApi';
import {addAuth} from '../../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Settings, LoginManager, Profile} from 'react-native-fbsdk-next';
GoogleSignin.configure({
  webClientId:
    '895533199407-aji85gdf6uo7ishlr99rl38999544f1u.apps.googleusercontent.com',
});
Settings.setAppID('1471118243816840');

const SocialLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const api = `/google-signin`;

  const dispatch = useDispatch();
  const handleLoginWithGoogle = async () => {
    setIsLoading(true);

    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const user = userInfo.user;
      const res: any = await authenticationAPI.HandleAuthentication(
        api,
        user,
        'post',
      );
      dispatch(addAuth(res.data));
      await AsyncStorage.setItem('auth', JSON.stringify(res.data));
      setIsLoading(false);
      console.log(userInfo);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const handleLoginWithFacebook = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
      ]);
      if (result.isCancelled) {
        console.log('Login cancelled');
        Alert.alert('Login cancelled');
      } else {
        const profile = await Profile.getCurrentProfile();

        if (profile) {
          setIsLoading(true);
          const data = {
            name: profile.name,
            givenName: profile.firstName,
            familyName: profile.lastName,
            email: profile.userID,
            photo: profile.imageURL,
          };
          const res: any = await authenticationAPI.HandleAuthentication(
            api,
            data,
            'post',
          );
          dispatch(addAuth(res.data));
          await AsyncStorage.setItem('auth', JSON.stringify(res.data));
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SectionComponent>
      <TextComponent
        styles={{textAlign: 'center'}}
        text="OR"
        color={appColors.gray4}
        size={16}
        font={fontFamilies.medium}
      />
      {/* <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            console.log(error);
          } else if (result.isCancelled) {
            console.log('canceled');
          } else {
            console.log(result);
          }
        }}
      /> */}
      <ButtonComponent
        onPress={handleLoginWithGoogle}
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        text="Login with Google"
        textFont={fontFamilies.regular}
        icon={<Google />}
        iconFlex="left"
      />
      <ButtonComponent
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        text="Login with Facebook"
        icon={<Facebook />}
        iconFlex="left"
        onPress={handleLoginWithFacebook}
      />
      <LoadingLogin visible={isLoading} />
    </SectionComponent>
  );
};

export default SocialLogin;
