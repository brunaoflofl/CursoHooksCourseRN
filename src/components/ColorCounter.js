import React from 'react';
import {View, Text, Button} from 'react-native';

const ColorSquare = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrease} title={`Increase ${color}`}/>
            <Button onPress={() => onDecrease} title={`Decrease ${color}`}/>
        </View>

    );
};

export default ColorSquare;