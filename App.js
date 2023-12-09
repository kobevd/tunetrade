import Home from './screens/Home';
import Profile from './screens/Profile'; // Assuming you have a Profile screen
import Settings from './screens/Settings';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#0F1320',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'TuneTrade') {
              iconName = 'music';
            } else if (route.name === 'Profile') {
              iconName = 'user'; // Example icon for profile
            } else if (route.name === 'Settings') {
              iconName = 'cog'; // Example icon for settings
            }
            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="TuneTrade"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: { backgroundColor: '#0F1320' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
    
        <Tab.Screen
          name="Profile"
          component={Profile} // Make sure you have a Profile component
          options={{
            title: 'Profile',
            headerStyle: { backgroundColor: '#0F1320' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            title: 'Investments',
            headerStyle: { backgroundColor: '#0F1320' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
