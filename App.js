import React, {useEffect} from 'react';
import { StatusBar, Platform} from 'react-native';

import SearchResults from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch';
import HomeScreen from './src/screens/HomeScreen';

import Geolocation from '@react-native-community/geolocation';
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
      {/* <HomeScreen /> */}
      {/* <SearchResults /> */}
      <HomeScreen />
    </>
  );
};

export default App;
