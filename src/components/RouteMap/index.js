import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCMYDdbV78v1f3cAbXviPjDxeAydzMm3go';
const RouteMap = () => {

    const origin = {
        latitude: 28.450627,
        longitude: -16.263045,
    };

    const destination = {
        latitude: 28.450127,
        longitude: -16.269045,
    }
    return (
        <MapView
            style={{
                width: '100%',
                height: '100%',
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation = {true}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}>
                <MapViewDirections
                    origin = {origin}
                    destination = {destination}
                    apikey = {GOOGLE_MAPS_APIKEY}
                    strokeWidth={5}
                    strokeColor="green"
                />
                <Marker
                coordinate = {origin}
                title = {'Origin'}
                />
                <Marker 
                coordinate = {destination}
                title = {'Destination'}
                />
        </MapView>
    );
};

export default RouteMap;