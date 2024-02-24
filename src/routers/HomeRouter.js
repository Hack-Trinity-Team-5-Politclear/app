import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import HomeBottomTab from '../components/navigation/HomeBottomTab';

const Tab = createBottomTabNavigator();

export default function HomeRouter() {
  return (
    <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
        headerShown: false,
        autoHideHomeIndicator: true,
        }}
        tabBar={HomeBottomTab}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}