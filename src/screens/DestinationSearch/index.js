import React, { useEffect, useState } from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import PlaceRow from './PlaceRow';

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      })
    }
  }


  const homePlace = {
    description : 'Home',
    geometry : {location : {lat : 48.8152937, lng: 2.4597668}},
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };
  
  //컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook
  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);
  return (
    <SafeAreaView>
      <View style={styles.container}>

        {/* {자동완성 기능 출발지} */}
        <GooglePlacesAutocomplete
          placeholder='어디서 출발하시나요?'
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });
            // console.log(data, details);
          }}
          enablePoweredByContainer = {false} // 자동완성 기능 아래에 powerdByGoogle 제거
          suppressDefaultStyles //라이브러리에서 모든 기본 스타일을 제거
          currentLocation = {true}
          currentLocationLabel = 'Current location'
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView : styles.listView,
            separator : styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCMYDdbV78v1f3cAbXviPjDxeAydzMm3go',
            language: 'en',
          }}
          renderRow = {(data : GooglePlaceData) => <PlaceRow data = {data} />}
          renderDescription = {(data : DescriptionRow) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        {/* {자동완성 기능 목적지} */}
        <GooglePlacesAutocomplete
          placeholder='어디로 가시나요?'
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
            console.log(data, details);
          }}
          enablePoweredByContainer = {false} // 자동완성 기능 아래에 powerdByGoogle 제거
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer, // 원래 있던 스타일 불러와서
              top : 55, // top을 55로 재정의
            },
            separator : styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCMYDdbV78v1f3cAbXviPjDxeAydzMm3go',
            language: 'en',
          }}
          renderRow = {(data : GooglePlaceData) => <PlaceRow data = {data} />}
        />

        {/* {자동완성 입력창 옆 원} */}
        <View style = {styles.circle} />

        {/* {자동완성 입력창 옆 선} */}
        <View style = {styles.line} />

        {/* {자동완성 입력창 옆 사각형} */}
        <View style = {styles.square} />

      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;