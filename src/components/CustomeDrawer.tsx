import {
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AvatarComponenet from './AvatarComponenet';
import RowComponent from './RowComponent';
import {globalStyles} from '../styles/globalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SpaceComponents from './SpaceComponents';
import TextComponent from './TextComponents';
import {fontFamilies} from '../constants/fontFamilies';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector, removeAuth} from '../redux/reducers/authReducer';
import {
  Bookmark2,
  Calendar,
  Logout,
  Message,
  MessageQuestion,
  Setting2,
  Sms,
  User,
} from 'iconsax-react-native';
import {appColors} from '../constants/appColors';
import {FlatList} from 'react-native';
import {LoginManager} from 'react-native-fbsdk-next';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomeDrawer = ({navigation}: any) => {
  // get user from authentication
  const auth = useSelector(authSelector);
  const size = 22;
  const color = appColors.gray;
  const dispatch = useDispatch();
  const profileMenu = [
    {
      key: 'MyProfile',
      title: 'My Profile',
      icon: <User size={size} color={color} />,
    },
    {
      key: 'Message',
      title: 'Message',
      icon: <Message size={size} color={color} />,
    },
    {
      key: 'Calendar',
      title: 'Calendar',
      icon: <Calendar size={size} color={color} />,
    },
    {
      key: 'Bookmark',
      title: 'Bookmark',
      icon: <Bookmark2 size={size} color={color} />,
    },
    {
      key: 'ContactUs',
      title: 'Contact Us',
      icon: <Sms size={size} color={color} />,
    },
    {
      key: 'Settings',
      title: 'Settings',
      icon: <Setting2 size={size} color={color} />,
    },
    {
      key: 'HelpAndFAQs',
      title: 'Help & FAQs',
      icon: <MessageQuestion size={size} color={color} />,
    },
    {
      key: 'SignOut',
      title: 'Sign Out',
      icon: <Logout size={size} color={color} />,
    },
  ];

  const handleLogout = async () => {
    await GoogleSignin.signOut();
    LoginManager.logOut();

    // clear local storage
    await AsyncStorage.removeItem('auth');

    dispatch(removeAuth({}));
  };
  const handleNavigation = (key: string) => {
    switch (key) {
      case 'SignOut':
        handleLogout();
        break;

      case 'MyProfile':
        navigation.navigate('Profile', {
          screen: 'ProfileScreen',
          params: {
            id: auth.id,
          },
        });
        break;
      default:
        console.log(key);
        break;
    }

    navigation.closeDrawer();
  };

  return (
    <View style={[localStyles.container]}>
      <AvatarComponenet
        styles={localStyles.avatar}
        onPress={() => handleNavigation('MyProfile')}
        photoURL={auth.photo}
        name={auth.name ? auth.name : auth.name}
      />
      {/* list menu */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={profileMenu}
        style={{flex: 1, marginVertical: 25}}
        renderItem={({item}) => (
          <RowComponent
            styles={[localStyles.listItem]}
            onPress={() => handleNavigation(item.key)}>
            {item.icon}
            <TextComponent
              text={item.title}
              styles={localStyles.listItemText}
              font={fontFamilies.regular}
              color={appColors.text}
            />
          </RowComponent>
        )}
      />

      <RowComponent justify="flex-start">
        <TouchableOpacity
          style={[
            globalStyles.button,
            {backgroundColor: '#00F8FF33', height: 'auto'},
          ]}>
          <MaterialCommunityIcons name="crown" size={22} color={'#00F8FF'} />
          <SpaceComponents width={8} />
          <TextComponent
            color="#00F8FF"
            styles={{fontSize: 15}}
            text="Upgrade Pro"
            font={fontFamilies.bold}
          />
        </TouchableOpacity>
      </RowComponent>
    </View>
  );
};

export default CustomeDrawer;

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 48,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listItem: {
    paddingVertical: 12,
    justifyContent: 'flex-start',
  },

  listItemText: {
    paddingLeft: 12,
    fontSize: 17,
  },
});
