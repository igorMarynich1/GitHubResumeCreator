import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import ResumeScreen from '../screens/ResumeScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'GitHub Resume Creator',
      },
    },
    Resume: {
      screen: ResumeScreen,
      navigationOptions: {
        title: 'Resume',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
