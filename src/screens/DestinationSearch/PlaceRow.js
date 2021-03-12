import React from 'react';
import {View, Text} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const PlaceRow = ({data}) => {
    return (
        <View style = {styles.row}>
            <View style = {styles.iconContainer}>
                {data.description === 'Home' 
                ? <Entypo name = 'home' size = {20} color = {'white'}  />
                : <Entypo name = 'location-pin' size = {20} color = {'white'} />
                }
                
            </View>
            <Text style = {styles.locationText}>
                {/* {설명이 없는 경우 설명을 렌더링 한다(설명이 null인 경우 주변 렌더링) */}
                {data.description || data.vicinity}
                
            </Text>
        </View>
    );
};

export default PlaceRow;