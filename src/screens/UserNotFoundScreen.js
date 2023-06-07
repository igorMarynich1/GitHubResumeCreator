import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserNotFoundScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>User not found. Please try again.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default UserNotFoundScreen;
