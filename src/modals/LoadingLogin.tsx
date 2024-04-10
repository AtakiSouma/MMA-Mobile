import {View, Modal} from 'react-native';
import React from 'react';
import {TextComponent} from '../components';
import LottieView from 'lottie-react-native';
interface Props {
  visible: boolean;
  mess?: string;
}
const LoadingLogin = (props: Props) => {
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
          backgroundColor: 'rgba(0,0,0,0.2)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LottieView
          style={{
            width: 200,
            height: 200,
          }}
          source={require('../animation/login.json')}
          autoPlay
          loop
        />

        <TextComponent text="Login..." flex={0} color={'#ffffff'} />
      </View>
    </Modal>
  );
};

export default LoadingLogin;
