import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {EventModel} from '../models';
import {AuthState, authSelector} from '../redux/reducers/authReducer';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CardComponents from './CardComponents';
import {appInfo} from '../constants/appInfos';
import TextComponent from './TextComponents';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';
import RowComponent from './RowComponent';
import {globalStyles} from '../styles/globalStyles';
import AvatarGroup from './AvatarGroup';
import {Card, Location} from 'iconsax-react-native';
import SpaceComponents from './SpaceComponents';
import {Image} from 'react-native-svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
interface Props {
  item: EventModel;
  //   item: any;
  type: 'card' | 'list';
}
const EventItems = (props: Props) => {
  const {item, type} = props;
  const navigation: any = useNavigation();
  const auth: AuthState = useSelector(authSelector);
  return (
    // <CardComponents
    //   isShadow
    //   styles={{width: appInfo.sizes.WIDTH * 0.7}}
    //   onPress={() => {}}>
    //   {type === 'card' ? (
    //     <>
    //       <ImageBackground
    //         style={{flex: 1, marginBottom: 12, height: 131, padding: 10}}
    //         source={{uri: item.photoUrl}}
    //         imageStyle={{
    //           resizeMode: 'cover',
    //           borderRadius: 12,
    //         }}>
    //         <RowComponent justify="space-between">
    //           <CardComponents
    //             styles={[globalStyles.noSpaceCard]}
    //             color="#ffffffB3">
    //             <TextComponent
    //               color={appColors.danger2}
    //               font={fontFamilies.bold}
    //               size={18}
    //               text={'17-07-2003'}
    //               //   text={numberToString(new Date(item.date).getDate())}
    //             />
    //           </CardComponents>
    //         </RowComponent>
    //       </ImageBackground>
    //     </>
    //   ) : (
    //     <></>
    //   )}
    // </CardComponents>
    <CardComponents
      isShadow
      color={appColors.white2}
      styles={{width: appInfo.sizes.WIDTH * 0.7}}
      onPress={() => navigation.navigate('EventDetail', {item})}>
      <ImageBackground
        style={{flex: 1, marginBottom: 12, height: 131, padding: 10}}
        source={{
          uri: 'https://images3.alphacoders.com/135/1353818.jpg',
        }}
        imageStyle={{
          padding: 10,
          resizeMode: 'cover',
          borderRadius: 12,
        }}>
        <RowComponent justify="space-between">
          <CardComponents styles={globalStyles.noSpaceCard} color="#ffffffB3">
            <TextComponent
              color={appColors.danger2}
              font={fontFamilies.bold}
              text="10"
              size={14}
            />
            <TextComponent
              color={appColors.danger2}
              font={fontFamilies.bold}
              text="JUNE"
              size={12}
            />
          </CardComponents>
          <CardComponents styles={[globalStyles.noSpaceCard]} color="#ffffffB3">
            <MaterialIcons
              name="bookmark"
              color={appColors.danger2}
              size={22}
            />
          </CardComponents>
        </RowComponent>
        <TextComponent text="concert spakle" />
      </ImageBackground>
      <TextComponent
        numOfLine={1}
        text="International Brand Music Concert"
        title
        size={18}
      />
      <AvatarGroup />
      <RowComponent>
        <Location size={18} color={appColors.gray} variant="Bold" />
        <SpaceComponents width={10} />
        <TextComponent
          flex={1}
          numOfLine={1}
          text={item.location.address}
          size={12}
          color={appColors.text3}
        />
      </RowComponent>
    </CardComponents>
  );
};

export default EventItems;

const styles = StyleSheet.create({});
