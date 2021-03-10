import React from 'react';
import { StatusBar, } from 'react-native';

import SearchResults from './src/screens/SearchResults';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SearchResults />
    </>
  );
};

export default App;
