import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {AuthState, addAuth, authSelector} from '../redux/reducers/authReducer';
import {useDispatch, useSelector} from 'react-redux';
import {SplashScreen} from '../screens';

const AppRouter = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const dispatch = useDispatch();
  const {getItem} = useAsyncStorage('auth');
  const auth: AuthState = useSelector(authSelector);

  useEffect(() => {
    checkLogin();
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkLogin = async () => {
    const res = await getItem();
    console.log('res', res);
    if (res) {
      const parsedRes = JSON.parse(res.toString());
      dispatch(addAuth(parsedRes));
    }
  };
  return (
    <>
      {isShowSplash ? (
        <SplashScreen />
      ) : auth.accesstoken ? (
        <MainNavigator />
      ) : (
        <AuthNavigator />
      )}
    </>
  );
};

export default AppRouter;
