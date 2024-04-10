import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  AvatarGroup,
  CardComponents,
  ContainerComponent,
  RowComponent,
  SectionComponent,
  SpaceComponents,
  TabBarComponents,
  TagComponent,
  TextComponent,
} from '../../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  ArrowLeft,
  ArrowLeft2,
  ArrowRight,
  Calendar,
  Location,
} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';
import {globalStyles} from '../../styles/globalStyles';
import LinearGradient from 'react-native-linear-gradient';
import {EventModel} from '../../models';
import {fontFamilies} from '../../constants/fontFamilies';
import ButtonComponent from '../../components/ButtonComponent';
import {appInfo} from '../../constants/appInfos';
import {LoadingModal} from '../../modals';

const EventDetail = ({navigation, route}: any) => {
  const {item}: {item: EventModel} = route.params;
  const {isLoading, setIsLoading} = useState(true);
  console.log(item);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={{
          uri: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/05/cosplay-nha-khai-pha-va-hanh-trinh-chinh-phuc-honkai-star-rail-1.jpg',
        }}
        style={{
          flex: 1,
          zIndex: -1,
          height: 244,
        }}
        imageStyle={{padding: 16, resizeMode: 'cover'}}>
        <LinearGradient colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0)']}>
          <RowComponent
            styles={{
              padding: 16,
              alignItems: 'flex-end',
              paddingTop: 42,
              // Platform.OS === 'android' ? StatusBar.currentHeight : 42,
            }}>
            <RowComponent styles={{flex: 1}}>
              <TouchableOpacity
                style={{
                  width: 48,
                  height: 48,
                  justifyContent: 'center',
                }}>
                <ArrowLeft size={28} color={appColors.white} />
              </TouchableOpacity>
              <TextComponent
                flex={1}
                text="Event Details"
                title
                color={appColors.white}
              />
            </RowComponent>
            <CardComponents
              styles={[globalStyles.noSpaceCard, {width: 36, height: 36}]}
              color="#ffffff4D">
              <MaterialIcons
                name="bookmark"
                color={appColors.white}
                size={22}
              />
            </CardComponents>
          </RowComponent>
        </LinearGradient>

        {/* **
        **
        User List */}
        <ScrollView style={{flex: 1, paddingTop: 244 - 130}}>
          <SectionComponent>
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
                alignItems: 'center',
              }}>
              <RowComponent
                justify="space-between"
                styles={[
                  globalStyles.shadow,
                  {
                    backgroundColor: appColors.white,
                    borderRadius: 100,
                    paddingHorizontal: 12,
                    width: '90%',
                  },
                ]}>
                <AvatarGroup size={36} />
                <TouchableOpacity
                  onPress={() => {}}
                  style={[
                    globalStyles.button,
                    {backgroundColor: appColors.primary, paddingVertical: 8},
                  ]}>
                  <TextComponent text="Invite" color={appColors.white} />
                </TouchableOpacity>
              </RowComponent>
            </View>
          </SectionComponent>
          <View style={{backgroundColor: 'f3f3f3'}}>
            <SectionComponent>
              <TextComponent
                title
                size={34}
                font={fontFamilies.semiBold}
                text={item.title}
              />
            </SectionComponent>
            <SectionComponent>
              <RowComponent styles={{marginBottom: 20}}>
                <CardComponents
                  styles={[globalStyles.noSpaceCard, {width: 48, height: 48}]}
                  color={`${appColors.primary}4D`}>
                  <Calendar
                    variant="Bold"
                    color={appColors.primary}
                    size={24}
                  />
                </CardComponents>
                <SpaceComponents width={16} />
                <View
                  style={{
                    flex: 1,
                    height: 48,
                    justifyContent: 'space-around',
                  }}>
                  <TextComponent
                    // text={`${DateTime.GetDate(new Date(item.date))}`}
                    text={'10-04-2024'}
                    font={fontFamilies.medium}
                    size={16}
                  />
                  <TextComponent
                    text="10-04-2024 -> 11-04-2024"
                    // text={`${
                    //   appInfo.dayNames[new Date(item.date).getDay()]
                    // }, ${DateTime.GetStartAndEnd(item.startAt, item.endAt)}`}
                    color={appColors.gray}
                  />
                </View>
              </RowComponent>
              <RowComponent
                styles={{marginBottom: 20, alignItems: 'flex-start'}}>
                <CardComponents
                  styles={[globalStyles.noSpaceCard, {width: 48, height: 48}]}
                  color={`${appColors.primary}4D`}>
                  <Location
                    variant="Bold"
                    color={appColors.primary}
                    size={24}
                  />
                </CardComponents>
                <SpaceComponents width={16} />
                <View
                  style={{
                    flex: 1,
                    minHeight: 48,
                    justifyContent: 'space-around',
                  }}>
                  <TextComponent
                    text={item.location.title}
                    font={fontFamilies.medium}
                    size={16}
                  />
                  <TextComponent
                    text={item.location.address}
                    color={appColors.gray}
                  />
                </View>
              </RowComponent>

              {/* ****
               ****
               ****
               **** */}
              {/* profile of eveneter */}
              <RowComponent
                justify="space-between"
                styles={{marginBottom: 20, flex: 1, marginRight: 10}}
                onPress={() =>
                  navigation.navigate('ProfileScreen', {
                    id: item.authorId,
                  })
                }>
                <Image
                  source={{
                    uri: 'https://static.wikia.nocookie.net/houkai-star-rail/images/2/22/Profile_Picture_Sparkle_-_Illusion.png/revision/latest?cb=20240206032940',
                    // uri: profile.photoUrl
                    //   ? profile.photoUrl
                    //   : 'https://img.icons8.com/cute-clipart/64/user-male-circle.png',
                  }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 12,
                    resizeMode: 'cover',
                  }}
                />
                <SpaceComponents width={16} />
                <View
                  style={{
                    flex: 1,
                    height: 48,
                    justifyContent: 'space-around',
                  }}>
                  <TextComponent
                    text="Spakle"
                    // text={profile.name ? profile.name : profile?.email}
                    font={fontFamilies.medium}
                    size={16}
                  />
                  <TextComponent
                    text="Personal"
                    // text={profile.type ? profile.type : 'Personal'}
                    color={appColors.gray}
                  />
                </View>

                <TagComponent
                  label={
                    'Follow'
                    // auth.following && auth.following.includes(item.authorId)
                    //   ? 'Unfollow'
                    //   : 'Follow'
                  }
                  // onPress={() => handleToggleFollowing(item.authorId)}
                  onPress={() => {}}
                  styles={{
                    backgroundColor: `${appColors.primary}20`,
                    borderRadius: 12,
                  }}
                  textStyles={{fontFamily: fontFamilies.regular}}
                  textColor={appColors.primary}
                />
              </RowComponent>
            </SectionComponent>
            <TabBarComponents title="About Event" />
            <SectionComponent>
              <TextComponent text={item.description} />
            </SectionComponent>
            <SectionComponent>
              <TextComponent text={item.description} />
            </SectionComponent>
            <SectionComponent>
              <TextComponent text={item.description} />
            </SectionComponent>
          </View>
        </ScrollView>
        {/* **********
        **********
          Button   
       **********
        ********** */}
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 1)']}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            padding: 12,
          }}>
          <ButtonComponent
            text="BUY TICKET $120"
            type="primary"
            onPress={() => {}}
            iconFlex="right"
            icon={
              <View
                style={[
                  globalStyles.iconContainer,
                  {
                    backgroundColor: '#3D56F0',
                  },
                ]}>
                <ArrowRight size={18} color={appColors.white} />
              </View>
            }
          />
        </LinearGradient>
        {/* <LoadingModal visible={isLoading} /> */}
      </ImageBackground>
    </View>
  );
};

export default EventDetail;

const styles = StyleSheet.create({});
