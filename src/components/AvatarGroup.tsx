import React from 'react';
import RowComponent from './RowComponent';
import {Image} from 'react-native';
import SpaceComponents from './SpaceComponents';
import TextComponent from './TextComponents';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';
interface Props {
  size?: number;
  userIds?: string[];
}

const AvatarGroup = (props: Props) => {
  const {size, userIds} = props;

  const photoUrl =
    'https://i.pinimg.com/originals/66/df/98/66df985893ab5700fe67a02f8577233e.jpg';
  return (
    <RowComponent justify="flex-start" styles={{marginVertical: 12}}>
      {/* {userIds.length > 0 && ( */}
      <>
        {Array.from({length: 3}).map((item, index) => (
          <Image
            key={`img${index}`}
            source={{uri: photoUrl}}
            style={{
              width: size ?? 24,
              height: size ?? 24,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: appColors.white,
              marginLeft: index > 0 ? -8 : 0,
            }}
          />
        ))}
        <SpaceComponents width={12} />
        <TextComponent
          text="+20 Going"
          size={12 + (size ? (size - 24) / 5 : 0)}
          color={appColors.primary}
          font={fontFamilies.semiBold}
        />
      </>
      {/* )} */}
    </RowComponent>
  );
};

export default AvatarGroup;
