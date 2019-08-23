import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button style={styles.text}
        title='Go to Component Screen'
        onPress={() => props.navigation.navigate('Component')}
      />
       <Button style={styles.text}
        title='Go to List Screen'
        onPress={() => props.navigation.navigate('List')}
      />
        <Button style={styles.text}
        title='Go to Image Screen'
        onPress={() => props.navigation.navigate('Image')}
      />
        <Button style={styles.text}
        title='Go to Counter Screen'
        onPress={() => props.navigation.navigate('Counter')}
      />
       <Button style={styles.text}
        title='Go to Color Screen'
        onPress={() => props.navigation.navigate('Color')}
      />
        <Button style={styles.text}
        title='Go to Square Screen'
        onPress={() => props.navigation.navigate('Square')}
      />
    </View>

    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 10,
    margin: 10
  }
});

export default HomeScreen;
