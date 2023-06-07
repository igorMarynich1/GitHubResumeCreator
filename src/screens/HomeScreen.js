import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = text => {
    setUsername(text);
  };

  const handleFormSubmit = () => {
    if (username.trim() !== '') {
      navigation.navigate('Resume', {username});
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter GitHub username"
        onChangeText={handleUsernameChange}
      />
      <Button title="Submit" onPress={handleFormSubmit} />
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
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default HomeScreen;
