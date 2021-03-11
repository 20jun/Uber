import React from 'react';
import { StatusBar, } from 'react-native';

import SearchResults from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch';
import HomeScreen from './src/screens/HomeScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <HomeScreen /> */}
      {/* <SearchResults /> */}
      <DestinationSearch />
    </>
  );
};

export default App;
