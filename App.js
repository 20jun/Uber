import React, {useEffect} from 'react';
import { StatusBar, Platform} from 'react-native';

import Router from './src/navigation/Root';

import Geolocation from '@react-native-community/geolocation';
// 네비게이션
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


navigator.geolocation = require('@react-native-community/geolocation');


const App: () => React$Node = () => {

  // 안드로이드 권한 관련, ios구동만 할거라 설정 안함
  const androidPermission = async () => {
  }

  useEffect(() => {
    if (Platform.OS === 'android')
    {
      androidPermission();
    }
    else
    {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
