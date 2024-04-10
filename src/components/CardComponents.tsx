import {StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';
import {appColors} from '../constants/appColors';
import {TouchableOpacity} from 'react-native-gesture-handler';
interface Props {
  onPress?: () => void;
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
  isShadow?: boolean;
  color?: string;
}

const CardComponents = (props: Props) => {
  const {onPress, children, styles, isShadow, color} = props;

  const localStyles: StyleProp<ViewStyle>[] = [
    globalStyles.card,
    isShadow ? globalStyles.shadow : undefined,
    {backgroundColor: color ?? appColors.white},
    styles,
  ];
  return (
    <TouchableOpacity style={localStyles} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default CardComponents;
