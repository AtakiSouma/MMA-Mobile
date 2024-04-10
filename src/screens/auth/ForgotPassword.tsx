import React, {useState} from 'react';
import {
  ContainerComponent,
  InputComponent,
  SectionComponent,
  SpaceComponents,
  TextComponent,
} from '../../components';
import {ArrowRight, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';
import ButtonComponent from '../../components/ButtonComponent';
import {Validate} from '../../util/validate';
import authenticationAPI from '../../api/authApi';
import {Alert} from 'react-native';
import {LoadingMail, LoadingModal} from '../../modals';

const ForgotPasswordScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const handleCheckEmail = () => {
    const isValidEmail = Validate.email(email);
    setIsDisable(!isValidEmail);
  };
  const handleForgotPassword = async () => {
    const api = `/forgotPassword`;
    setIsLoading(true);
    try {
      const res: any = await authenticationAPI.HandleAuthentication(
        api,
        {email},
        'post',
      );

      console.log(res);

      Alert.alert('Send mail', 'We sended a email includes new password!!!', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ]);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(`Can not create new password api forgot password, ${error}`);
    }
  };
  return (
    <ContainerComponent back isImageBackground isScroll>
      <SectionComponent>
        <TextComponent text="Resset Password" title />
        <SpaceComponents height={12} />
        <TextComponent text="Please enter your email address to request a password reset" />
        <SpaceComponents height={26} />
        <InputComponent
          value={email}
          onChange={val => setEmail(val)}
          affix={<Sms size={20} color={appColors.gray} />}
          placeholder="abc@gmail.com"
          onEnd={handleCheckEmail}
        />
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
          onPress={handleForgotPassword}
          disable={isDisable}
          text="Send"
          type="primary"
          icon={<ArrowRight size={20} color={appColors.white} />}
          iconFlex="right"
        />
      </SectionComponent>
      <LoadingMail visible={isLoading} />
    </ContainerComponent>
  );
};

export default ForgotPasswordScreen;
