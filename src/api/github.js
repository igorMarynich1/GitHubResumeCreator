import axios from 'axios';

export const fetchUserData = async username => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
    );
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

export const fetchUserRepositories = async username => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=updated`,
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching repositories');
  }
};
