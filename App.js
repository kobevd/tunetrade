import Home from './screens/Home';
import Details from './screens/Details';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      
      <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'TuneTrade') {
        iconName = focused ? 'music' : 'music';  // Here 'music' is an example icon name from FontAwesome
      } else if (route.name === 'Details') {
        iconName = focused ? 'info-circle' : 'info-circle'; // Here 'info-circle' is an example icon name from FontAwesome
      }

      return <FontAwesome name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'tomato',  // Color for the active tab icon
    inactiveTintColor: 'gray',  // Color for the inactive tab icon
  }}
>
  <Tab.Screen name="TuneTrade" component={Home} options={{ title: 'My home' , headerStyle: { backgroundColor: '#f4511e' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }} />
  <Tab.Screen name="Details" component={Details} options={{headerShown: false}} />
</Tab.Navigator>

    </NavigationContainer>
  );
}







