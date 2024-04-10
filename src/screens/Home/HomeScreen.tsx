import {
  Button,
  FlatList,
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector, removeAuth} from '../../redux/reducers/authReducer';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager} from 'react-native-fbsdk-next';
import {globalStyles} from '../../styles/globalStyles';
import {appColors} from '../../constants/appColors';
import {
  CardComponents,
  CategoriesList,
  CircleComponent,
  EventItems,
  RowComponent,
  SectionComponent,
  SpaceComponents,
  TabBarComponents,
  TagComponent,
  TextComponent,
} from '../../components';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  ArrowDown,
  HambergerMenu,
  Notification,
  Scroll,
  SearchNormal1,
  Sort,
} from 'iconsax-react-native';
import {fontFamilies} from '../../constants/fontFamilies';

const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);
  const itemEvent = {
    title: 'International Brand Music Concert',
    description:
      'Enjoy your favorite dishe a a a lovely firends and family can take part i this concert',
    location: {
      title: 'Gala Convention Center',
      address: '36 Guild Street Lodon',
    },
    users: [''],
    authorId: '',
    startAt: Date.now(),
    endAt: Date.now(),
    date: Date.now(),
  };
  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle={'light-content'} />

      <View style={styles.ContainerStyle}>
        <View style={styles.ContainerViewInTopBar}>
          <RowComponent>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <HambergerMenu size={24} color={appColors.white} />
            </TouchableOpacity>
            <View
              style={[
                {
                  flex: 1,
                  alignItems: 'center',
                },
              ]}>
              <RowComponent>
                <TextComponent
                  text="Current Location"
                  color={appColors.white2}
                />
                <ArrowDown size={14} color={appColors.white} />
              </RowComponent>
              <TextComponent
                flex={0}
                text={'Binh Duong , Viet Nam'}
                font={fontFamilies.medium}
                size={13}
                color={appColors.white}
              />
            </View>
            <CircleComponent color={appColors.primaryBackground} size={36}>
              <View>
                <Notification size={18} color={appColors.white} />
                <View style={styles.babelIconInNotification} />
              </View>
            </CircleComponent>
          </RowComponent>
          <SpaceComponents height={20} />
          <RowComponent>
            <RowComponent
              styles={{flex: 1}}
              onPress={() =>
                navigation.navigate('SearchEvents', {
                  isFilter: false,
                })
              }>
              <SearchNormal1
                variant="TwoTone"
                color={appColors.white}
                size={20}
              />
              <View
                style={{
                  width: 1,
                  backgroundColor: appColors.gray2,
                  marginHorizontal: 10,
                  height: 20,
                }}
              />
              <TextComponent
                flex={1}
                text="Search..."
                color={appColors.gray2}
                size={16}
              />
            </RowComponent>
            <TagComponent
              onPress={() =>
                navigation.navigate('SearchEvents', {
                  isFilter: true,
                })
              }
              bgColor={appColors.button}
              label="Filters"
              icon={
                <CircleComponent size={20} color={appColors.buttonBackground}>
                  <Sort size={16} color={appColors.button} />
                </CircleComponent>
              }
            />
          </RowComponent>
          <SpaceComponents height={20} />
        </View>
        <View style={{marginBottom: -16}}>
          <CategoriesList isFill />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          {
            flex: 1,
            marginTop: Platform.OS === 'ios' ? 22 : 18,
          },
        ]}>
        <SectionComponent styles={{paddingHorizontal: 0, paddingTop: 24}}>
          <TabBarComponents title="Upcoming Events" onPress={() => {}} />
          {/* demo data  */}
          <FlatList
            horizontal
            data={Array.from({length: 5})}
            renderItem={({item, index}) => (
              <EventItems type="card" item={itemEvent} key={`event${index}`} />
            )}
          />
        </SectionComponent>

        {/* //image */}
        <SectionComponent>
          <ImageBackground
            source={require('../../assets/images/invite-image.png')}
            style={{flex: 1, padding: 16, minHeight: 127}}
            imageStyle={{
              resizeMode: 'cover',
              borderRadius: 12,
            }}>
            <TextComponent text="Invite your friends" title />
            <TextComponent text="Get $20 for ticket" />

            <RowComponent justify="flex-start">
              <TouchableOpacity
                onPress={() => console.log('fafafa')}
                style={[
                  globalStyles.button,
                  {
                    marginTop: 12,
                    backgroundColor: '#00F8FF',
                    paddingHorizontal: 28,
                  },
                ]}>
                <TextComponent
                  text="INVITE"
                  font={fontFamilies.bold}
                  color={appColors.white}
                />
              </TouchableOpacity>
            </RowComponent>
          </ImageBackground>
        </SectionComponent>

        <SectionComponent styles={{paddingHorizontal: 0, paddingTop: 24}}>
          <TabBarComponents title="Nearby you" onPress={() => {}} />
          {/* demo data  */}
          <FlatList
            horizontal
            data={Array.from({length: 5})}
            renderItem={({item, index}) => (
              <EventItems type="card" item={itemEvent} key={`event${index}`} />
            )}
          />
        </SectionComponent>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  ContainerStyle: {
    backgroundColor: appColors.primary,
    height: Platform.OS === 'android' ? 178 : 182,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 52,
  },
  ContainerViewInTopBar: {
    paddingHorizontal: 16,
    marginTop: 15,
  },
  babelIconInNotification: {
    backgroundColor: appColors.secondary,
    width: 10,
    height: 10,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#524CE0',
    position: 'absolute',
    top: -2,
    right: -2,
  },
});
