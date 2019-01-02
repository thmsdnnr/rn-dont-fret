// In App.js in a new project

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Orientation from 'react-native-orientation-locker';
import { Provider } from 'react-redux';

import HomeScreenContainer from './components/HomeScreenContainer';
import SettingsScreen from './components/SettingsScreen';
import FretboardScreenContainer from './FretboardScreenContainer';

import store from './store/store';

const RootStack = createStackNavigator(
  {
    Home: HomeScreenContainer,
    Fretboard: FretboardScreenContainer,
    Settings: SettingsScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#455a64'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Lato'
      }
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  orientationMap = {
    PORTRAIT: 'P',
    'PORTRAIT-UPSIDEDOWN': 'PU',
    'LANDSCAPE-LEFT': 'LL',
    'LANDSCAPE-RIGHT': 'LR'
  };

  componentWillMount() {
    const initial = Orientation.getInitialOrientation();
    store.dispatch({
      type: 'DEVICE_ROTATE',
      orientation: this.orientationMap[initial]
    });
  }

  componentDidMount() {
    Orientation.addOrientationListener(this.onOrientationDidChange);
    setInterval(() => {
      store.dispatch({
        type: 'RANDOM_NOTE_ON'
      });
    }, 2500);
  }

  onOrientationDidChange = orientation => {
    if (this.orientationMap[orientation].indexOf('P') === -1) {
      store.dispatch({
        // Hide the header in landscape mode.
        type: 'HEADER_HIDE'
      });
    } else {
      store.dispatch({
        type: 'HEADER_SHOW'
      });
    }
    store.dispatch({
      type: 'DEVICE_ROTATE',
      orientation: this.orientationMap[orientation]
    });
  };

  componentWillUnmount = () => {
    Orientation.removeOrientationListener(this.onOrientationDidChange);
  };

  render() {
    const navigationPersistenceKey = __DEV__ ? 'NavigationStateDEV' : null;
    return (
      <Provider store={store}>
        <AppContainer persistenceKey={navigationPersistenceKey} />
      </Provider>
    );
  }
}
