import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UserCard from '../components/UserCard';
import UserNotFoundScreen from './UserNotFoundScreen';
import LanguageStats from '../components/LanguageStats';
import RepositoryList from '../components/RepositoryList';
import {fetchData} from '../utils/helper';

const ResumeScreen = props => {
  const [userData, setUserData] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [userNotFound, setUserNotFound] = useState(false);
  const [languageStats, setLanguageStats] = useState({});

  let username = props.navigation.state.params.username;

  useEffect(() => {
    fetchData(username)
      .then(data => {
        setUserData(data.userData);
        setRepositories(data.repositories);
        setLanguageStats(data.languageStats);
      })
      .catch(error => {
        console.error(error);
        setUserNotFound(true);
      });
  }, [username]);

  if (userNotFound) {
    return <UserNotFoundScreen />;
  }

  return (
    <View style={styles.container}>
      {userData ? (
        <>
          <UserCard
            name={userData.login}
            publicRepos={userData.public_repos}
            membershipSince={userData.formattedCreatedDate}
          />
          <LanguageStats languageStats={languageStats} />
          <RepositoryList repositories={repositories} />
        </>
      ) : (
        <Text>Loading user data...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 8,
  },
});

export default ResumeScreen;
