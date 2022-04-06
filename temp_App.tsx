import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '@styles';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
      }}>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
