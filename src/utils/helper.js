import axios from 'axios';
import moment from 'moment';

export const fetchUserData = async username => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchUserRepositories = async username => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=updated`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchData = async username => {
  try {
    const userData = await fetchUserData(username);
    const formattedCreatedDate = moment(userData.created_at).format(
      'MMM DD, YYYY',
    );

    const repositories = await fetchUserRepositories(username);
    const sortedRepositories = repositories.slice(0, 10).map(repo => ({
      ...repo,
      formattedDate: moment(repo.updated_at).format('MMM DD, YYYY'),
    }));

    const languageStats = sortedRepositories.reduce((stats, repo) => {
      const language = repo.language || 'Unknown';
      if (stats[language]) {
        stats[language] += 1;
      } else {
        stats[language] = 1;
      }
      return stats;
    }, {});

    const totalRepositories = sortedRepositories.length;
    const languageStatsPercentage = {};
    Object.entries(languageStats).forEach(([language, count]) => {
      const percentage = ((count / totalRepositories) * 100).toFixed(2);
      languageStatsPercentage[language] = percentage;
    });

    return {
      userData: {...userData, formattedCreatedDate},
      repositories: sortedRepositories,
      languageStats: languageStatsPercentage,
    };
  } catch (error) {
    throw error;
  }
};
