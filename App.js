import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';
import store from './src/store';
import LoginScreen from './src/screens/LoginScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RemoteScreen from './src/screens/RemoteScreen';
import TodoDetailsScreen from './src/screens/TodoDetailsScreen';
import {useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ParentStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const RemoteStack = createStackNavigator();

const RemoteStackScreen = () => {
  return (
    <RemoteStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'lightgreen'},
        headerTitleStyle: {color: 'white', fontWeight: 'bold'},
      }}>
      <RemoteStack.Screen name="RemoteScreen" component={RemoteScreen} />
    </RemoteStack.Navigator>
  );
};

const MainScreen = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'HomeStackScreen') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'RemoteStackScreen') {
            iconName = focused
              ? 'download-network'
              : 'download-network-outline';
          }

          return (
            <MaterialCommunityIcons
              name={iconName}
              size={40}
              color={color}
              style={{paddingTop: 8}}
            />
          );
        },

        tabBarLabel: ' ',
      })}
      tabBarOptions={{
        activeTintColor: 'white',

        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'lightgreen',
          height: 60,
        },
      }}>
      <BottomTab.Screen name="HomeStackScreen" component={HomeStackScreen} />
      <BottomTab.Screen
        name="RemoteStackScreen"
        component={RemoteStackScreen}
      />
    </BottomTab.Navigator>
  );
};

const HomeStackScreen = ({navigation}) => {
  const user = useSelector(state => state.loginReducer);
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'lightgreen'},
        headerTitleStyle: {
          fontFamily: 'Roboto',
          color: 'white',
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="DetailsScreen" component={TodoDetailsScreen} />
    </HomeStack.Navigator>
  );
};

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ParentStack.Navigator
          screenOptions={{headerShown: false, headerBackTitleVisible: false}}>
          <ParentStack.Screen name="Login" component={LoginScreen} />
          <ParentStack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{headerBackTitle: false}}
          />
        </ParentStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
