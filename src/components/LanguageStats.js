import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LanguageStats = ({languageStats}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Languages</Text>
      {Object.entries(languageStats).map(([language, percentage]) => (
        <Text key={language} style={styles.language}>
          <Text style={styles.languageName}>{language}</Text>:{' '}
          <Text style={styles.languagePercentage}>{percentage}%</Text>
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  language: {
    fontSize: 16,
    marginBottom: 4,
  },
  languageName: {
    color: '#990003',
    fontStyle: 'italic',
  },
  languagePercentage: {
    color: '#990003',
  },
});

export default LanguageStats;
