import React from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';

const SearchResults = () => {
    return (
    <SafeAreaView>
        <View style = {{display : 'flex', justifyContent : 'space-between'}}>
            <View style = {{height : Dimensions.get('window').height - 400}}>
                <RouteMap />
            </View>
            
            <View style = {{height : 400}}>
                <UberTypes />
            </View>
        </View>
   </SafeAreaView>
    );
};

export default SearchResults;