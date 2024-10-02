import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Explore from './explore';
import accounts from './accounts';
import Liked from '../liked';
const Tab = createMaterialTopTabNavigator();
export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Liked" component={Home} />
      <Tab.Screen name="Library" component={SettingsScreen} />
      <Tab.Screen name="Suggested" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function Home() {
  return <Text>hje</Text>
}

function SettingsScreen() {
  return  <Text> hello</Text>
}
