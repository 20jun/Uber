import React, {useEffect, useState} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles';

const DestinationSearch = () => {
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);
    
    useEffect(() => {
      console.warn('useEffect is called');
      if(originPlace && destinationPlace) {
        console.warn('Redirect to results');
      }
    }, [originPlace, destinationPlace]);
    return (
        <SafeAreaView>
        <View style = {styles.container}>
            
            <GooglePlacesAutocomplete
            placeholder='어디서 출발하시나요?'
            onPress={(data, details = null) => {
              setOriginPlace({data, details});
              console.log(data, details);
            }}
            styles = {{
              textInput : styles.textInput,
            }}
            fetchDetails
            query={{
              key: 'AIzaSyCMYDdbV78v1f3cAbXviPjDxeAydzMm3go',
        language: 'en',
      }}
      />

      <GooglePlacesAutocomplete
            placeholder='어디로 가시나요?'
            onPress={(data, details = null) => {
              setDestinationPlace({data, details});
              console.log(data, details);
            }}
            styles = {{
              textInput : styles.textInput,
            }}
            fetchDetails
            query={{
              key: 'AIzaSyCMYDdbV78v1f3cAbXviPjDxeAydzMm3go',
        language: 'en',
      }}
      />
        </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;