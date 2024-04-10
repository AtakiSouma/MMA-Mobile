import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {appInfo} from '../constants/appInfos';
import {appColors} from '../constants/appColors';
import SpaceComponents from '../components/SpaceComponents';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/splash-img.png')}
      style={styles.ImageBackgroundStyle}
      imageStyle={styles.ImageStyle}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logoStyle}
      />
      <SpaceComponents height={16} />

      <ActivityIndicator color={appColors.primary} size={30} animating={true} />
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  ImageBackgroundStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyle: {
    flex: 1,
  },
  logoStyle: {
    width: appInfo.sizes.WIDTH * 0.7,
    resizeMode: 'contain',
  },
  // indicator: {
  //   padding: 12,
  //   backgroundColor: '#555',
  //   borderRadius: 12,
  // },
});
