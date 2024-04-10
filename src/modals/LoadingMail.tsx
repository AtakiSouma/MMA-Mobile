import {View, Modal} from 'react-native';
import React from 'react';
import {TextComponent} from '../components';
import LottieView from 'lottie-react-native';
import {fontFamilies} from '../constants/fontFamilies';
interface Props {
  visible: boolean;
  mess?: string;
}
const LoadingMail = (props: Props) => {
  const {visible} = props;
  return (
    <Modal
      visible={visible}
      style={[{flex: 1}]}
      transparent
      statusBarTranslucent>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <LottieView
            style={{
              width: 200,
              height: 200,
            }}
            source={require('../animation/mail.json')}
            autoPlay
            loop
          />
        </View>
        <TextComponent
          text="We are sending New Password to your email"
          font={fontFamilies.bold}
          flex={0}
          styles={{fontSize: 20}}
          color={'#ffffff'}
        />
      </View>
    </Modal>
  );
};

export default LoadingMail;
