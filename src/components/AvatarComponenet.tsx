import {
  Image,
  TouchableOpacity,
  View,
  StyleProp,
  ImageProps,
} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';
import TextComponent from './TextComponents';
import {fontFamilies} from '../constants/fontFamilies';
import {appColors} from '../constants/appColors';

interface Props {
  photoURL?: string;
  name: string;
  size?: number;
  styles?: StyleProp<ImageProps>;
  onPress?: () => void;
}

const AvatarComponenet = (props: Props) => {
  const {photoURL, name, size, styles, onPress} = props;

  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      {photoURL ? (
        <View>
          <Image
            source={{uri: photoURL}}
            style={[
              {
                width: size ?? 40,
                height: size ?? 40,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: appColors.white,
              },
              styles,
            ]}
          />
          <View>
            <TextComponent text={name} title size={18} />
          </View>
        </View>
      ) : (
        <View
          style={[
            globalStyles.center,
            {
              width: size ?? 40,
              height: size ?? 40,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: appColors.white,
              backgroundColor: appColors.gray2,
            },
          ]}>
          <TextComponent
            text={name}
            font={fontFamilies.bold}
            color={appColors.primary}
            size={size ? size / 3 : 14}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default AvatarComponenet;
