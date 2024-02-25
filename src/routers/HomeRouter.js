import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import HomeBottomTab from '../components/navigation/HomeBottomTab';
import ConstituencyScreen from '../screens/ConstituencyScreen';
import TDScreen from '../screens/TDScreen';

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
            {/* <Tab.Screen name="TD" component={TDScreen} initialParams={{td: "Chris-Andrews.D.2007-06-14"}}/> */}
            {/* <Tab.Screen name="Constituency" component={ConstituencyScreen} initialParams={{constituency: "Donegal"}}/> */}

            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Constituency" component={ConstituencyScreen} />
            <Tab.Screen name="TD" component={TDScreen} />


        </Tab.Navigator>
    );
}