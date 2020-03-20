import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import MoviesScreen from './screens/MoviesScreen';
import TVShowsScreen from './screens/TVShowsScreen';
import Home from './assets/home.svg';
import Movie from './assets/movie.svg';
import TV from './assets/tv.svg';
import CodePush from 'react-native-code-push';

// Gets the current screen from navigation state
const getActiveRouteName = state => {
  const route = state.routes[state.index];

  if (route.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state);
  }

  return route.name;
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{title: 'Feel Your Movie'}}
    />
    <Stack.Screen name="Details" component={DetailScreen} />
  </Stack.Navigator>
);

const MoviesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Movies"
      component={MoviesScreen}
      options={{title: 'Movies'}}
    />
    <Stack.Screen name="Details" component={DetailScreen} />
  </Stack.Navigator>
);

const TVShowsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TVShows"
      component={TVShowsScreen}
      options={{title: 'TV Shows'}}
    />
    <Stack.Screen name="Details" component={DetailScreen} />
  </Stack.Navigator>
);

const AppContainer = () => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={state => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = getActiveRouteName(state);

        if (previousRouteName !== currentRouteName) {
          console.log('currentRouteName', currentRouteName);
        }

        // Save the current route name for later comparision
        routeNameRef.current = currentRouteName;
      }}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let Icon;

            if (route.name === 'Home') {
              Icon = Home;
            } else if (route.name === 'Movies') {
              Icon = Movie;
            } else if (route.name === 'TV Shows') {
              Icon = TV;
            }

            // You can return any component that you like here!
            return <Icon width={size} height={size} fill={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'dodgerblue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Movies" component={MoviesStack} />
        <Tab.Screen name="TV Shows" component={TVShowsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.ON_NEXT_RESTART,
})(AppContainer);
