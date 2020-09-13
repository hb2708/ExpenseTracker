import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Redux
import {Provider} from 'react-redux';
import store from './src/redux/store';

// Screens
import {HomeScreen} from './src/screens/HomeScreen';
import {AddExpense} from './src/screens/AddExpense';
import {ExchangeRateScreen} from './src/screens/ExchangeRateScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Expense Tracker'}}
      />
      <Stack.Screen
        name="Expense"
        component={AddExpense}
        options={{title: 'Add Expense'}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
              } else {
                iconName = 'payment';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen
            name="Exchange Rate"
            component={ExchangeRateScreen}
            options={{title: 'Exchange Rate'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
