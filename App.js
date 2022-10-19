import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  txt: {
    color: 'blue',
    fontSize: 20,
  },
});

const App = () => {
  return (
    <View>
      <Text style={styles.txt}>Hello World</Text>
      <Text style={styles.txt}>Can we make a happy World</Text>
      <Text style={styles.txt}>That no body will judge Another</Text>
    </View>
  );
};

export default App;
