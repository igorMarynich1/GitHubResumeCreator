import React from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';
import RepositoryItem from './RepositoryItem';

const RepositoryList = ({repositories}) => {
  return (
    <>
      <Text style={styles.heading}>Popular Repositories:</Text>
      <FlatList
        data={repositories}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <RepositoryItem item={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 8,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
});

export default RepositoryList;
