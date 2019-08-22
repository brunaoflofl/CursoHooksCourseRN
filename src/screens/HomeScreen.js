import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title='Go to Component Screen'
        onPress={() => props.navigation.navigate('Component')}
      />
       <Button
        title='Go to List Screen'
        onPress={() => props.navigation.navigate('List')}
      />
        <Button
        title='Go to Image Screen'
        onPress={() => props.navigation.navigate('Image')}
      />
    </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
