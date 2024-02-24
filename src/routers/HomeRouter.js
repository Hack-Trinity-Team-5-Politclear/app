import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import HomeBottomTab from '../components/navigation/HomeBottomTab';
import ConstituencyScreen from '../screens/ConstituencyScreen';

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
      <Tab.Screen name="Constituency" component={ConstituencyScreen} />
    </Tab.Navigator>
  );
}