import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/homeScreen';
import Menu from '../../screens/menuScreen';
import Crown from '../../screens/crownScreen';
import Nearstore from '../../screens/nearStoreScreen';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: 'Georgia',
          fontWeight: '300',
        },
        tabBarStyle: { backgroundColor:"#512414"},
        tabBarActiveTintColor:"orange",
        tabBarInactiveTintColor:"#F5EADC",
      }
    }
      
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Crown Rewards" component={Crown} />
      <Tab.Screen name="Nearby Stores" component={Nearstore} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
