import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import HomeMap from '../../components/HomeMap';
import UberTypes from '../../components/UberTypes';

const SearchResults = () => {
    return (
    <SafeAreaView>
        <View>
            <HomeMap />
            <UberTypes />
        </View>
   </SafeAreaView>
    );
};

export default SearchResults;