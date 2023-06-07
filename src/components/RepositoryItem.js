import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import moment from 'moment';

const RepositoryItem = ({item}) => {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(item.html_url)}
      style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.language}>
        Languages: {item.language ? item.language : '-'}
      </Text>
      <Text style={styles.lastEdited}>
        Last Edited: {moment(item.updated_at).format('MMM DD, YYYY')}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    color: '#990003',
  },
  language: {
    color: 'gray',
  },
  lastEdited: {
    color: 'gray',
    fontStyle: 'italic',
  },
});

export default RepositoryItem;
