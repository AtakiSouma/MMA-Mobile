import {Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../styles/globalStyles';
import Swiper from 'react-native-swiper';
import {appColors} from '../../constants/appColors';
import {appInfo} from '../../constants/appInfos';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fontFamilies} from '../../constants/fontFamilies';
import {TextComponent} from '../../components';

const OnbroadingScreen = ({navigation}: any) => {
  const [index, setIndex] = useState(0);

  return (
    <View style={[globalStyles.container]}>
      <Swiper
        style={{}}
        loop={false}
        onIndexChanged={num => setIndex(num)}
        index={index}
        activeDotColor={appColors.white}>
        <Image
          source={require('../../assets/images/onboarding-1.png')}
          style={styles.ImageStyle}
        />
        <Image
          source={require('../../assets/images/onboarding-2.png')}
          style={styles.ImageStyle}
        />
        <Image
          source={require('../../assets/images/onboarding-3.png')}
          style={styles.ImageStyle}
        />
      </Swiper>
      <View style={[styles.paginationStyle]}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <TextComponent
            text="Skip"
            color={appColors.gray2}
            font={fontFamilies.medium}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2 ? setIndex(index + 1) : navigation.navigate('Login')
          }>
          <TextComponent
            text="Next"
            color={appColors.white}
            font={fontFamilies.medium}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnbroadingScreen;

const styles = StyleSheet.create({
  ImageStyle: {
    flex: 1,
    width: appInfo.sizes.WIDTH,
    height: appInfo.sizes.HEIGHT,
    resizeMode: 'cover',
  },
  paginationStyle: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
