import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ImageDetail = props => {
    return (
        <View>
            <Image source={props.imageSource}/>
            <Text>{props.title}</Text>
            <Text>Image Score - {props.score}</Text>
        </View>
    );
}
export default ImageDetail;
